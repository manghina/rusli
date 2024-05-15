import { useSvgSizes } from "@app/hooks/useSvgSizes";
import { colorTokens } from "@app/theme/colors/tokens";
import Svg, { Path, SvgProps } from "react-native-svg";

const VisibilityOffIcon = ({ color, size, ...props }: SvgProps) => {
  const { width, height, viewBox } = useSvgSizes({ size });
  return (
    <Svg width={width} height={height} viewBox={viewBox} {...props}>
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M21.27 9.18c-.29-.46-.6-.89-.92-1.29a1 1 0 0 0-1.49-.09l-3 3c.22.66.26 1.42.06 2.21a4.021 4.021 0 0 1-2.9 2.9c-.79.2-1.55.16-2.21-.06l-2.46 2.46c-.5.5-.34 1.38.33 1.64 1.07.41 2.18.62 3.32.62 1.78 0 3.51-.52 5.09-1.49 1.61-1 3.06-2.47 4.23-4.34.95-1.51.9-4.05-.05-5.56ZM14.02 9.98l-4.04 4.04c-.51-.52-.84-1.24-.84-2.02 0-1.57 1.28-2.86 2.86-2.86.78 0 1.5.33 2.02.84Z"
      />
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="m18.25 5.75-3.39 3.39A3.986 3.986 0 0 0 12 7.96c-2.24 0-4.04 1.81-4.04 4.04 0 1.12.45 2.13 1.18 2.86l-3.38 3.39h-.01c-1.11-.9-2.13-2.05-3-3.41-1-1.57-1-4.12 0-5.69C3.91 7.33 5.33 5.9 6.91 4.92c1.58-.96 3.31-1.49 5.09-1.49 2.23 0 4.39.82 6.25 2.32ZM14.86 12c0 1.57-1.28 2.86-2.86 2.86-.06 0-.11 0-.17-.02l3.01-3.01c.02.06.02.11.02.17Z"
      />
      <Path
        fill={color ?? colorTokens.colorIcon}
        d="M21.77 2.23c-.3-.3-.79-.3-1.09 0L2.23 20.69c-.3.3-.3.79 0 1.09a.758.758 0 0 0 1.08-.01L21.77 3.31c.31-.3.31-.78 0-1.08Z"
      />
    </Svg>
  );
};

export default VisibilityOffIcon;
