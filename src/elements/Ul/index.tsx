import React, { forwardRef } from 'react';
import UlStyle from './style';

export interface Props {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  overflow?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  testAlign?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  z?: string;
  shadow?: string;
  translate?: string;
}

const Ul: React.FC<Props> = forwardRef(({ children, ...props }, ref) => {
  return (
    <UlStyle ref={ref} {...props}>
      {children}
    </UlStyle>
  );
});

export default Ul;