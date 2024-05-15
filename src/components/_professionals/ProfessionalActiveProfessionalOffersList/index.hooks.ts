import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@app/redux-store";
import { useMemo } from "react";
import { RequestStatus } from "src/models/Request";
import { RequestCardProps } from "src/components/RequestCard";
import { CardStatus } from "src/components/RequestCard/index.hooks";
import { useNavigation } from "@react-navigation/native";
import { ProfessionalOfferDetailScreen } from "@app/screens/ProfessionalOfferDetail";

export const useProfessionalActiveProfessionalOffersList = () => {
  const dispatch = useDispatch();
  const navigator = useNavigation<any>();

  const activeProfessionalOffers = useSelector(
    selectors.getActiveProfessionalOffersList,
  );

  const cards = useMemo<RequestCardProps[]>(
    () =>
      activeProfessionalOffers.map((professionalOffer) => {
        let status: CardStatus;
        let title: string;

        switch (professionalOffer.request.currentStatus) {
          case RequestStatus.APPOINTMENT_SCHEDULED:
          case RequestStatus.VERIFYING_PAYMENT:
            title = `Appuntamento con ${professionalOffer.request.user.lastName} confermato`;
            status = CardStatus.BOOKED;
            break;
          case RequestStatus.APPOINTMENT_COMPLETED:
            title = `Appuntamento con ${professionalOffer.request.user.lastName} completato`;
            status = CardStatus.BOOKED;
            break;
          case RequestStatus.PROFESSIONAL_OFFERS_CREATED:
            title = `${professionalOffer.request.user.lastName} sta valutando la tua offerta`;
            status = CardStatus.BOOKED;
            break;
          case RequestStatus.INFORMATION_COLLECTED:
            title = `Nuova richiesta da ${professionalOffer.request.user.lastName}`;
            status = CardStatus.PLAIN;
            break;
          default:
            title = `Richiesta da ${professionalOffer.request.user.lastName}`;
            status = CardStatus.PLAIN;
        }

        return {
          _id: professionalOffer._id ?? "-",
          title,
          description: "-",
          status,
          onPress: () => {
            dispatch(
              actions.getProfessionalsMeProfessionalOffersByProfessionalOfferId.request(
                {
                  professionalOfferId: professionalOffer._id,
                },
              ),
            );
            navigator.navigate(ProfessionalOfferDetailScreen.RouteName);
          },
        };
      }),
    [activeProfessionalOffers],
  );

  return {
    cards,
  };
};
