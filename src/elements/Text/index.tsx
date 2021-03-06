import React from 'react';
import TextStyle from './style';

export interface Props {
  children?: any;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  ls?: string;
  wb?: string;
  ws?: string;
  cursor?: string;
  addstyle?: any;
  overflow?: string;
  _onClick?: any;
}

const Text: React.FC<Props> = ({
  _onClick,
  children,
  ...props
}): React.ReactElement => {
  return (
    <TextStyle onClick={_onClick} {...props}>
      {children}
    </TextStyle>
  );
};

export default Text;
