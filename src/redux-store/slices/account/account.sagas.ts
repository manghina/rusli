import { put, select, take, takeEvery, call, delay } from "redux-saga/effects";
import { actions, RootState, selectors } from "@app/redux-store";
import { getCookie } from "./account.selectors";
import NavigationService from "@app/models/NavigationService";
import { ApiFailData } from "@app/redux-store/extra-actions/apis/api-builder";
import { PostAccountsParams } from "@app/redux-store/extra-actions/apis/post-accounts";
import { PostAccountsSessionsParams } from "@app/redux-store/extra-actions/apis/post-accounts-sessions";
import { PostUsersParams } from "@app/redux-store/extra-actions/apis/post-users";
import { GetUsersMeParams } from "@app/redux-store/extra-actions/apis/get-users-me";
import { IAccount } from "@app/models/Account";
import { GetProfessionalsMeParams } from "../../extra-actions/apis/get-professionals-me";
import { LoginScreen } from "@app/screens/Login";
import { UserHomeScreen } from "@app/screens/UserHome";
import { ProfessionalHomeScreen } from "@app/screens/ProfessionalHome";
import { PasswordResetSuccessScreen } from "@app/screens/PasswordResetSuccess";
import { EmailVerificationScreen } from "@app/screens/EmailVerificationScreen";
import { TutorialScreen } from "@app/screens/Tutorial";

export function* userInitSaga() {
  yield takeEvery(actions.appStartup.type, function* () {
    const cookie: RootState["account"]["cookie"] = yield select(getCookie);

    if (cookie) {
      yield put(actions.getAccountsMe.request({}));

      const action:
        | typeof actions.getAccountsMe.success
        | typeof actions.getAccountsMe.fail = yield take([
        actions.getAccountsMe.success,
        actions.getAccountsMe.fail,
      ]);

      if (action.type === actions.getAccountsMe.success.type) {
        const account: IAccount = yield select(selectors.getAccount);

        switch (account.type) {
          case "user":
            yield put(actions.getUsersMe.request({ autoLogin: true }));
            break;
          case "professional":
            yield put(actions.getProfessionalsMe.request({ autoLogin: true }));
            break;
          default:
            break;
        }
      } else {
        yield put(actions.resetAccount());
        NavigationService.replace(LoginScreen.RouteName);
      }
    } else {
      yield delay(2000);
      NavigationService.replace(TutorialScreen.RouteName);
    }
  });
}

export function* autoLoginSaga() {
  yield takeEvery(
    [
      actions.getUsersMe.success,
      actions.getProfessionalsMe.success,
      actions.getUsersMe.fail,
      actions.getProfessionalsMe.fail,
    ],
    function* (action) {
      const account: IAccount = yield select(selectors.getAccount);
      const redirectDelay = action.payload.prepareParams.autoLogin ? 2000 : 0;
      yield delay(redirectDelay);

      if (!account.emailVerified) {
        NavigationService.replace(EmailVerificationScreen.RouteName);
        return;
      }

      switch (action.type) {
        case actions.getUsersMe.success.type:
          NavigationService.replace(UserHomeScreen.RouteName);
          break;
        case actions.getProfessionalsMe.success.type:
          NavigationService.replace(ProfessionalHomeScreen.RouteName);
          break;
        default:
          const { status } = action.payload as ApiFailData<
            GetUsersMeParams | GetProfessionalsMeParams
          >;

          switch (status) {
            case 401:
              yield put(actions.resetAccount());
              NavigationService.replace(LoginScreen.RouteName);
              break;
            case 403:
              yield put(actions.resetAccount());
              NavigationService.replace(LoginScreen.RouteName);
              break;
            case 404:
              // Here we need to create a page only for account creation without email and password

              break;
            default:
              yield put(actions.resetAccount());
              break;
          }
          break;
      }
    },
  );
}

function* createAccountAndLogin(email: string, password: string) {
  yield put(
    actions.postAccounts.request({
      email,
      password,
    }),
  );

  // @ts-ignore
  const postAccountResultAction = yield take([
    actions.postAccounts.success,
    actions.postAccounts.fail,
  ]);

  if (postAccountResultAction.type === actions.postAccounts.fail.type) {
    const { status } =
      postAccountResultAction.payload as ApiFailData<PostAccountsParams>;

    // Conflict status
    if (status === 409) {
      // Account already exists, redirect to log in options
      yield put(actions.resetAccount());
      NavigationService.replace(LoginScreen.RouteName);
    }

    return;
  }

  // Login to retrieve cookie
  yield put(
    actions.postAccountsSessions.request({
      email,
      password,
      isSigningUp: true,
    }),
  );

  // @ts-ignore
  const postAccountsSessionsResultAction = yield take([
    actions.postAccountsSessions.success,
    actions.postAccountsSessions.fail,
  ]);

  if (
    postAccountsSessionsResultAction.type ===
    actions.postAccountsSessions.fail.type
  ) {
    yield put(actions.resetAccount());
    const {} =
      postAccountsSessionsResultAction.payload as ApiFailData<PostAccountsSessionsParams>;
    return null;
  }

  const account: IAccount = yield select(selectors.getAccount);

  return account;
}

export function* userRegistrationSaga() {
  yield takeEvery(actions.userRegistrationFormSubmitted, function* (action) {
    const { email, password } = action.payload;

    const account: IAccount | null = yield call(
      createAccountAndLogin,
      email,
      password,
    );

    if (!account) {
      yield put(actions.resetAccount());
      return;
    }

    const { firstName, lastName, birthDate } = action.payload;

    yield put(
      actions.postUsers.request({
        name: firstName,
        lastName: lastName,
        birthDate,
      }),
    );

    // @ts-ignore
    const postUsersResultAction = yield take([
      actions.postUsers.success,
      actions.postUsers.fail,
    ]);

    if (postUsersResultAction.type === actions.postUsers.fail.type) {
      // Maybe do nothing here?
      const { status } =
        postUsersResultAction.payload as ApiFailData<PostUsersParams>;
      return;
    }

    yield put(actions.getUsersMe.request({}));
  });
}

export function* professionalRegistrationSaga() {
  yield takeEvery(
    actions.professionalRegistrationFormSubmitted,
    function* (action) {
      const { email, password } = action.payload;

      const account: IAccount | null = yield call(
        createAccountAndLogin,
        email,
        password,
      );

      if (!account) {
        yield put(actions.resetAccount());
        return;
      }

      const {
        name,
        lastName,
        birthDate,
        specializations,
        city,
        alboId,
        phone,
        officeLocations,
        professionalPaperPhotoId,
      } = action.payload;

      yield put(
        actions.postProfessionals.request({
          name,
          lastName,
          birthDate,
          specializations,
          city,
          alboId,
          phone,
          officeLocations,
          professionalPaperPhotoId,
        }),
      );

      // @ts-ignore
      const postProfessionalsResultAction = yield take([
        actions.postProfessionals.success,
        actions.postProfessionals.fail,
      ]);

      if (
        postProfessionalsResultAction.type ===
        actions.postProfessionals.fail.type
      ) {
        // Maybe do nothing here?
        yield put(actions.resetAccount());
        const { status } =
          postProfessionalsResultAction.payload as ApiFailData<PostUsersParams>;
        return;
      }

      yield put(actions.getProfessionalsMe.request({}));
    },
  );
}

export function* postLoginSaga() {
  yield takeEvery(actions.postAccountsSessions.success, function* (action) {
    if (!action.payload.prepareParams.isSigningUp) {
      const account: IAccount = yield select(selectors.getAccount);

      if (account.type === "user") {
        yield put(actions.getUsersMe.request({}));
      } else {
        yield put(actions.getProfessionalsMe.request({}));
      }
    }
  });
}

export function* postResetPasswordSaga() {
  yield takeEvery([actions.patchPasswords.success], function* () {
    NavigationService.replace(PasswordResetSuccessScreen.RouteName);
  });
}
export function* postManualResetPasswordSaga() {
  yield takeEvery([actions.patchAccountsMePassword.success], function* () {
    NavigationService.replace(PasswordResetSuccessScreen.RouteName, {
      shouldGoToHomeScreen: true,
    });
  });
}

export function* verifyEmailSaga() {
  yield takeEvery(actions.verifyEmailOtp, function* (action) {
    yield put(
      actions.patchAccountsMe.request({
        emailVerificationToken: action.payload,
      }),
    );

    // @ts-ignore
    const patchAccountsMeResultAction = yield take([
      actions.patchAccountsMe.success,
      actions.patchAccountsMe.fail,
    ]);

    if (
      patchAccountsMeResultAction.type === actions.patchAccountsMe.fail.type
    ) {
      yield put(actions.setIsOtpError(true));
      return;
    }

    yield put(actions.setIsOtpError(null));

    const account: IAccount = yield select(selectors.getAccount);

    if (account.type === "user") {
      NavigationService.replace(UserHomeScreen.RouteName);
    } else {
      NavigationService.replace(ProfessionalHomeScreen.RouteName);
    }
  });
}
