import styled from 'styled-components';

const ContainerStyle = styled.div`
  position: relative;
  max-width: 1024px;
  height: ${props => props.height};
  margin: 0 auto;

  @media only screen and (max-width: 424px) {
    max-width: none;
    width: 95%;
  }
`;

export default ContainerStyle;
