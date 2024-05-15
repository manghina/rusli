import React, { Fragment } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { ProgressBar, Text, View } from "react-native-ui-lib";

import {
  ProfessionalOfferDecision,
  useProfessionalOfferDetailScreen,
} from "./index.hooks";
import { styles } from "./styles";
import { RequestProfessionalAcceptanceForm } from "@app/components/_professionals/RequestProfessionalAcceptanceForm";
import { ProfessionalOfferStatus } from "@app/models/ProfessionalOffer";
import moment from "moment";
import { colorTokens } from "@app/theme/colors/tokens";
import ThumbsUpIcon from "@app/components/SvgIcons/ThumbsUpIcon";
import ClockIcon from "@app/components/SvgIcons/ClockIcon";
import { UserAvatarDetails } from "@app/components/_users/UserAvatarDetails";
import { RequestStatus } from "@app/models/Request";
import { AppointmentStatus } from "@app/models/Appointment";
import { AppButton } from "@app/components/_ui/AppButton";

export const ProfessionalOfferDetailScreen = () => {
  const {
    currentProfessionalOffer,
    currentAppointment,
    screenTitle,
    screenSubtitle,
    isFetchingProfessionalOffer,
    isFetchingAppointment,
    isPatchingAppointment,
    onAcceptRequestPressed,
    onRejectRequestPressed,
    onVisitCompletedPressed,
    onPatientLatePressed,
    onLeaveAReviewPressed,
    onReportProblemPressed,
    onCallERPressed,
    decision,
  } = useProfessionalOfferDetailScreen();

  if (isFetchingProfessionalOffer || isFetchingAppointment) {
    return (
      <SafeAreaView>
        <ProgressBar />
      </SafeAreaView>
    );
  }

  const renderPreliminaryActions = () => (
    <View style={[styles.section, styles.actionsContainer]}>
      <Text style={styles.actionsDescription}>Cosa intende fare?</Text>
      <AppButton
        color="secondary"
        label="Accetta richiesta"
        onPress={onAcceptRequestPressed}
      />
      <AppButton
        color="secondary"
        label="Rifiuta la prestazione"
        onPress={onRejectRequestPressed}
      />
      <AppButton
        color="error"
        label="Riferisci al pronto soccorso"
        onPress={onCallERPressed}
      />
    </View>
  );

  const renderMainActions = () => (
    <View style={[styles.section, styles.actionsContainer]}>
      <Text style={styles.actionsDescription}>
        Azioni al momento disponibili
      </Text>
      {currentAppointment?.status === AppointmentStatus.BOOKED && (
        <>
          <AppButton
            label="Visita terminata con successo"
            disabled={isPatchingAppointment}
            loading={isPatchingAppointment}
            onPress={onVisitCompletedPressed}
          />
          <AppButton
            color="secondary"
            label="Paziente in ritardo..."
            disabled={isPatchingAppointment}
            loading={isPatchingAppointment}
            onPress={onPatientLatePressed}
          />
        </>
      )}
      {currentProfessionalOffer?.request.currentStatus ===
        RequestStatus.APPOINTMENT_COMPLETED && (
        <AppButton
          label="Lascia una recensione"
          disabled={isPatchingAppointment}
          loading={isPatchingAppointment}
          onPress={onLeaveAReviewPressed}
        />
      )}
      <AppButton
        hideBorder
        variant="outlined"
        color="error"
        label="Riporta un problema"
        disabled={isPatchingAppointment}
        loading={isPatchingAppointment}
        onPress={onReportProblemPressed}
      />
    </View>
  );

  const renderInstructions = () => <View />;

  const renderStatusContainer = () => {
    switch (currentProfessionalOffer?.status) {
      case ProfessionalOfferStatus.readyToBeAccepted:
        return (
          <View style={styles.statusMainWrapper}>
            <Text style={styles.sectionName}>Stato prenotazione</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusIconContainer,
                  styles.readyToBeAcceptedIconContainer,
                ]}
              >
                <ClockIcon color={colorTokens.colorIconWarning} />
              </View>
              <View style={styles.statusTitleContainer}>
                <Text style={styles.statusTitle}>In attesa di conferma</Text>
                <Text style={styles.statusSubtitle}>
                  La richiesta scade {moment().add(1, "day").from(moment())}
                </Text>
              </View>
            </View>
          </View>
        );
      case ProfessionalOfferStatus.Accepted:
        return (
          <View style={styles.statusMainWrapper}>
            <Text style={styles.sectionName}>Stato prenotazione</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusIconContainer,
                  styles.acceptedIconContainer,
                ]}
              >
                <ThumbsUpIcon color={colorTokens.colorIconSuccess} />
              </View>
              <Text style={styles.statusTitle}>Confermata dal paziente</Text>
            </View>
          </View>
        );
      case ProfessionalOfferStatus.Refused:
        return (
          <View style={styles.statusMainWrapper}>
            <Text style={styles.sectionName}>Stato prenotazione</Text>
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.rejectedIconContainer,
                  styles.readyToBeAcceptedIconContainer,
                ]}
              >
                <Text>ICON</Text>
              </View>
              <Text style={styles.statusTitle}>Rifiutata</Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  const renderProposedSlots = () => (
    <>
      <View style={[styles.section]}>
        <Text style={styles.sectionName}>Orari proposti</Text>
        <View style={styles.sectionContainer}>
          {(currentProfessionalOffer?.slots ?? []).map((slot, index) => {
            const dayString = moment(slot.startDate).format("dddd");

            return (
              <Fragment key={slot._id}>
                {index !== 0 && <View style={styles.divider} />}
                <View key={slot._id} style={styles.slotContainer}>
                  <Text style={styles.optionCounterText}>
                    Opzione {index + 1}
                  </Text>
                  <View style={styles.optionDetailsContainer}>
                    <View>
                      <Text style={styles.pText}>
                        {moment(slot.startDate).format("DD MMMM YYYY")}
                      </Text>
                      <Text style={styles.optionDayAndTimeText}>
                        {dayString.charAt(0).toUpperCase()}
                        {dayString.substring(1)} ore{" "}
                        {moment(slot.startDate).format("HH:mm")}
                      </Text>
                    </View>
                    <Text style={styles.optionPrice}>
                      {(slot.price / 100).toFixed(2).replace(".", ",")}€
                    </Text>
                  </View>
                </View>
              </Fragment>
            );
          })}
        </View>
      </View>
      <View style={[styles.section, styles.actionsContainer]}>
        <Text style={styles.actionsDescription}>
          Azioni al momento disponibili
        </Text>
        <AppButton color="error" label="Annulla appuntamento" />
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.pageContainer}>
          <View style={[styles.section]}>
            <Text style={styles.pageTitleText}>{screenTitle}</Text>
            <Text style={styles.pageSubtitleText}>{screenSubtitle}</Text>
          </View>
          <View style={[styles.contentWrapper]}>
            {[
              ProfessionalOfferStatus.readyToBeAccepted,
              ProfessionalOfferStatus.Accepted,
              ProfessionalOfferStatus.Refused,
            ].includes(currentProfessionalOffer?.status!) &&
              renderStatusContainer()}
            <View style={[styles.section]}>
              <Text style={styles.sectionName}>Dettagli paziente</Text>
              <View style={styles.sectionContainer}>
                <UserAvatarDetails
                  user={currentProfessionalOffer!.request.user}
                />
                <View style={styles.requestSummaryContainer}>
                  <Text style={styles.sectionName}>Riassunto richiesta</Text>
                  <View style={styles.requestContainer}>
                    <Text style={styles.requestSummaryText}>
                      “ Lorem ipsum dolor sit amet consectetur. Id facilisis
                      vestibulum metus. Lorem ipsum dolor sit amet consectetur.
                      Id facilisis vestibulum metus. Lorem ipsum dolor sit amet
                      consectetur. Id facilisis vestibulum metus. Lorem ipsum
                      dolor sit amet consec. Id facilisis vestibulum metus.
                      Lorem ipsum dolor sit amet ”
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            {currentProfessionalOffer?.status ===
              ProfessionalOfferStatus.Pending && (
              <>
                {decision === ProfessionalOfferDecision.NONE &&
                  renderPreliminaryActions()}
                {decision === ProfessionalOfferDecision.ACCEPT && (
                  <RequestProfessionalAcceptanceForm />
                )}
              </>
            )}
            {currentProfessionalOffer?.status ===
              ProfessionalOfferStatus.readyToBeAccepted &&
              renderProposedSlots()}
            {[ProfessionalOfferStatus.Accepted].includes(
              currentProfessionalOffer?.status as ProfessionalOfferStatus,
            ) &&
              currentAppointment && (
                <>
                  <View style={[styles.section]}>
                    <Text style={styles.sectionName}>Dettagli visita</Text>
                    <View style={styles.sectionContainer}></View>
                  </View>
                  {renderMainActions()}
                </>
              )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

ProfessionalOfferDetailScreen.displayName = "ProfessionalOfferDetailsScreen";
ProfessionalOfferDetailScreen.RouteName =
  "professional-offers/details" as const;
