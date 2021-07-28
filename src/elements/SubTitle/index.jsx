import React from 'react';
import SubTitleStyle from './style';

const SubTitle = ({ children, ...props }) => {
  return <SubTitleStyle {...props}>{children}</SubTitleStyle>;
};

SubTitle.defaultProps = {
  width: '100%',
  color: 'black',
  fw: 600,
};

export default SubTitle;