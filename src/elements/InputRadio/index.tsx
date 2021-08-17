import React from 'react';
// style
import RadioStyle from './style';

export interface Props {
  width: string;
  height: string;
  border: string;
  weigth: string;
  marginRight: string;
}

const InputRadio: React.FC<Props> = (props) => {
  return <RadioStyle type="radio" {...props} />;
};

InputRadio.defaultProps = {
  width: '20px',
  height: '20px',
  weigth: '5px',
  marginRight: '10px',
};

export default InputRadio;