import styled, { css } from 'styled-components';
// mixin
import {
  flexBox,
  floatBox,
  textProps,
  borderBox,
  outlineBox,
} from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  width?: string;
  height?: string;
  shadow?: string;
  radius?: string;
  bgColor?: string;
  margin?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  border?: string;
  borDirection?: string;
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  z?: string;
  cursor?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const makeItFlexBox = css<Prop>`
  ${({ hoz, ver }) => flexBox(hoz, ver, 'inline-flex')}
`;

const SpanStyle = styled.span<Prop>`
  display: inline-block;
  ${({ isFlex }) => isFlex && makeItFlexBox};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  box-shadow: ${({ shadow }) => shadow};
  border-radius: ${({ radius }) => radius};
  background-color: ${({ bgColor, theme }) => theme.color[bgColor]};
  margin: ${({ margin }) => margin};
  cursor: ${({ cursor }) => cursor};
  ${({ padding }) => borderBox(padding)};
  ${({ fs, fw, color, lh, textAlign }) =>
    textProps(fs, fw, color, lh, textAlign)};
  ${({ border, borDirection }) => outlineBox(border, borDirection)};
  ${({ position, top, right, bottom, left, z }) =>
    floatBox(position, top, right, bottom, left, z)};

  ${({ addstyle }) => addstyle};
`;

export default SpanStyle;
