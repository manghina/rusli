import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { YupShape } from "@app/models/common/TSUtility";
import { ProfessionalFeedback } from "@app/models/Appointment";

type FormData = { feedback: ProfessionalFeedback };

const schema = yup.object().shape<YupShape<FormData>>({
  feedback: yup
    .object()
    .shape({
      sweepRating: yup
        .number()
        .oneOf([1, 2, 3, 4, 5], "La valutazione deve essere compresa tra 1 e 5")
        .required(),
      sweepPositives: yup.string().optional().nullable(),
      sweepNegatives: yup.string().optional().nullable(),
      userRating: yup
        .number()
        .oneOf([1, 2, 3, 4, 5], "La valutazione deve essere compresa tra 1 e 5")
        .required(),
      userComments: yup.string().optional().nullable(),
    })
    .required(),
});

export const useRequestReviewByProfessional = () => {
  const dispatch = useDispatch();

  const currentAppointment = useSelector(selectors.getCurrentAppointment);
  const isPostingReview = useSelector(
    selectors.getAjaxIsLoadingByApi(
      actions
        .postProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentId
        .api,
    ),
  );

  const formData = useForm<FormData>({
    // @ts-ignore
    resolver: yupResolver(schema),
    defaultValues: {
      feedback: {
        sweepRating: 0,
        sweepPositives: "",
        sweepNegatives: "",
        userRating: 0,
        userComments: "",
      },
    },
  });

  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitted, isDirty },
  } = formData;

  const submitDisabled =
    (isSubmitted && !isValid) || !isDirty || isPostingReview;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        if (currentAppointment) {
          dispatch(
            actions.postProfessionalsMeAppointmentsProfessionalFeedbacksByAppointmentId.request(
              {
                appointmentId: currentAppointment._id,
                feedback: data.feedback,
              },
            ),
          );
        }
      }),
    [dispatch, currentAppointment, handleSubmit],
  );

  return {
    triggerSubmit,
    formData,
    submitDisabled,
    isPostingReview,
  };
};
