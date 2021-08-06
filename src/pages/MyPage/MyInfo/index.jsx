import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
// icon
import ControlPointIcon from '@material-ui/icons/ControlPoint';
// history
import { history } from '../../../redux/configureStore';
// elements
import { Grid, SubTitle, Button, MainTitle } from '../../../elements';
// components
import ProfileCard from '../../../components/ProfileCard';
import GuideToggle from '../GuideToggle';
import EventCard from '../../../components/EventCard';
import DropDown from '../DropDown';
// reducer
import { MypageCreators } from '../../../redux/modules/mypage';
// style
import { SetAlignItemsButton, TabMenuWrapper } from '../style';

const MyInfo = () => {
  const { myInfo, tripList } = useSelector(
    state => ({
      myInfo: state.mypage.myInfo,
      tripList: state.mypage.tripList,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MypageCreators.GetMyInfoDB());
  }, []);

  const deleteTripEvent = tripId => {
    dispatch(MypageCreators.DeleteTripEventDB({ tripId }));
  };

  return (
    <>
      <Grid display="flex" ver="center" hoz="space-between" margin="0 0 16px">
        <TabMenuWrapper>
          <li onClick={() => history.push('/mypage')}>
            <MainTitle width="auto" fs="sxl" color="black">
              프로필
            </MainTitle>
          </li>

          <li onClick={() => history.push('/mypage/promise')}>
            <MainTitle fs="sxl" width="auto" margin="0 0 0 20px" color="gray">
              나의 약속
            </MainTitle>
          </li>
        </TabMenuWrapper>

        <DropDown />
      </Grid>

      <ProfileCard userInfo={myInfo} />

      <Grid display="flex" hoz="space-between" margin="60px 0 0" ver="center">
        <SubTitle fs="la">길잡이 설정</SubTitle>

        <GuideToggle active={Boolean(myInfo.guide)} />
      </Grid>

      <Grid margin="60px 0 15px" display="flex" hoz="space-between">
        <SubTitle fs="la" width="auto">
          {myInfo.nickname} 님의 여행 이벤트
        </SubTitle>

        <Button
          fs="sm"
          color="darkG"
          bgColor="bgColor"
          padding="0"
          _onClick={() => {
            history.push('/mypage/create_trip');
          }}
          addstyle={SetAlignItemsButton}
        >
          추가하기 <ControlPointIcon style={{ marginLeft: '4px' }} />
        </Button>
      </Grid>

      {tripList.map((tripInfo, idx) => (
        <EventCard
          key={(idx * Date.now() + Math.random()).toString(36)}
          btnText="삭제하기"
          userInfo={tripInfo}
          mainText="여행 이벤트 삭제하기"
          sub2Text="여행 이벤트를 삭제하시겠습니까?"
          agreeText="삭제"
          toastMessage="여행 이벤트가 삭제되었습니다."
          callback={() => deleteTripEvent(tripInfo.tripId)}
        />
      ))}
    </>
  );
};

export default MyInfo;
