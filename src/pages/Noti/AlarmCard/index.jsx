import React from 'react';
// history
import { history } from '../../../redux/configureStore';
// elements
import { Grid, Text, Strong } from '../../../elements';
// components
import ProfileImage from '../../../components/ProfileImg';
import GuideNameplate from '../../../components/GuideNameplate';

const AlarmCard = () => {
  return (
    <Grid
      padding="20px 0"
      isFlex
      ver="center"
      border="1px solid #E7E7E7"
      borDirection="bottom"
      _onClick={() => history.push('/mypage')}
    >
      <ProfileImage />

      <Text margin="0 0 0 15px" overflow="visible">
        <Strong fw="bold">닉네임</Strong>님이 <GuideNameplate />를 부탁합니다
      </Text>
    </Grid>
  );
};

export default AlarmCard;
