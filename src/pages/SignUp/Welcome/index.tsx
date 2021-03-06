import React from 'react';
// history
import { history } from '../../../redux/configureStore';
// context
import { signUpStatus } from '../SignUpContext';
// elements
import { Grid, Button, Image, MainTitle } from '../../../elements';
// style
import ImageWrapper from './style';

const Welcome = (): React.ReactElement => {
  const { pageState } = React.useContext(signUpStatus);

  return (
    <>
      {pageState.page === 4 ? (
        <Grid height="calc(100vh - 76px)">
          <MainTitle fs="xl" fw="extraBold" margin="0 0 40px">
            당신만의 행복한 여행이
            <br />
            시작됩니다!
          </MainTitle>

          <Grid addstyle={ImageWrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.freepik.com/vectors/people"
            >
              People vector created by freepik - www.freepik.com
              <Image
                width="140%"
                height="100%"
                src="https://hang-image-upload.s3.ap-northeast-2.amazonaws.com/localImage/welcome.gif"
              />
            </a>
          </Grid>

          <Button
            fs="la"
            fw="bold"
            width="100%"
            margin="30px 0 20px"
            _onClick={() => history.push('/signin')}
          >
            시작하기
          </Button>
        </Grid>
      ) : null}
    </>
  );
};

export default Welcome;
