import useFormField from "@app/hooks/useFormField";
import DislikeIcon from "@app/components/_form/FormRating/RatingSvgIcons/DislikeIcon";
import SadIcon from "@app/components/_form/FormRating/RatingSvgIcons/SadIcon";
import NormalIcon from "@app/components/_form/FormRating/RatingSvgIcons/NormalIcon";
import HappyIcon from "@app/components/_form/FormRating/RatingSvgIcons/HappyIcon";
import LikeIcon from "@app/components/_form/FormRating/RatingSvgIcons/LikeIcon";
import { useMemo } from "react";

const iconsObject = {
  1: DislikeIcon,
  2: SadIcon,
  3: NormalIcon,
  4: HappyIcon,
  5: LikeIcon,
};

export const useFormRating = (name: string) => {
  const { value, setValue } = useFormField<number>({ name });

  const onRatingClickedCallbacks = useMemo(
    () =>
      Object.entries(iconsObject).map(
        ([key, Icon]) =>
          () =>
            setValue(+key),
        {},
      ),
    [setValue],
  );

  return { value, setValue, iconsObject, onRatingClickedCallbacks };
};
