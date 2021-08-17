import React from 'react';
import SubTitleStyle from './style';

export interface Props {
  children: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  color?: string;
  lh?: string;
  textAlign?: string;
  addstyle?: any;
}

const SubTitle: React.FC<Props> = ({
  children,
  ...props
}): React.ReactElement => {
  return <SubTitleStyle {...props}>{children}</SubTitleStyle>;
};

SubTitle.defaultProps = {
  fw: 'semiBold',
};

export default SubTitle;
