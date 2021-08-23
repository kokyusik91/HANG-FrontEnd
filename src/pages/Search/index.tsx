import React from 'react';

import { useDispatch } from 'react-redux';
import queryString from 'query-string';
import { useInView } from 'react-intersection-observer';
import { useTypedSelector } from 'src/redux/configureStore';
import { SearchCreators } from 'src/redux/modules/SearchModule/search';
import { fetchMessage } from 'src/redux/modules/ToastMessage/toastMessage';
// components
import SearchBar from '../../components/SearchBar';
import AreaSelectBox from '../../components/AreaSelectBox';
import SearchCard from '../../components/SearchCard';
import ToastMessage from '../../components/ToastMessage';
// style
import { Button, Grid, Text, Strong, Container } from '../../elements';
import CategoryBtn from './style';

export interface SearchData {
  keyword?: string | string[];
  region: string;
  city: string;
  traveler: number;
  guide: number;
  pageNum?: number;
}

const Search = () => {
  const dispatch = useDispatch();

  const { userlist, nextItem, message }: any = useTypedSelector((state) => ({
    userlist: state.search.list,
    nextItem: state.search.nextItem,
    message: state.toastMessage.Message,
  }));
  // pageNum
  const [page, setPage] = React.useState<number>(1);
  const [ref, inView] = useInView();

  // 지역,여행자,길잡이 state
  const [cityNum, setCityNum] = React.useState<number>(0);
  const [cityOpen, setCityOpen] = React.useState<boolean>(false);
  const [traveler, setTraveler] = React.useState<boolean>(false);
  const [guide, setGuide] = React.useState<boolean>(false);
  const [subText, setSubText] = React.useState<string>('회원목록');

  // 도시,구 state
  const [city, setCity] = React.useState<string>('');
  const [gu, setGu] = React.useState<string>('');

  // 검색한 username state
  const [finduser, setFindUser] = React.useState<string>('');

  // 검색한 도시,구 state
  const [cityName, setCityName] = React.useState<string>('');
  const [guName, setGuName] = React.useState<string>('');

  const query = queryString.parse(location.search);

  // 페이지 첫 진입시 or 메인에서 검색후 페이지 진입시 사용할 데이터
  const SendSearch: SearchData = {
    keyword: finduser,
    region: city,
    city: gu,
    traveler: Number(traveler),
    guide: Number(guide),
  };

  const MainSearch: SearchData = {
    ...SendSearch,
    keyword: query.keyword,
    pageNum: page,
  };

  const MoreSearch: SearchData = {
    ...SendSearch,
    pageNum: page,
  };

  // 카테고리 버튼 이벤트 핸들러
  const CityOpenhandler = () => {
    if (!cityOpen) {
      setCityOpen(true);
      setCity('서울');
      setGu('');
    } else {
      setCityOpen(false);
      setCityNum(0);
      setCity('');
      setGu('');
    }
  };

  const Travelerhandler = () => {
    if (!traveler) {
      setTraveler(true);
      setGuide(false);
    } else {
      setTraveler(false);
    }
  };

  const Guidehandler = () => {
    if (!guide) {
      setGuide(true);
      setTraveler(false);
    } else {
      setGuide(false);
    }
  };

  const SearchHandler = () => {
    setCityName(city);
    setGuName(gu);
    if (traveler) {
      setSubText('여행자');
    } else if (guide) {
      setSubText('길잡이');
    } else {
      setSubText('회원목록');
    }
    dispatch(SearchCreators.fetchSearchSend(SendSearch));
    setPage(1);
  };

  // 무한스크롤 함수
  const NextItems = React.useCallback(async () => {
    if (page > 1 && userlist && userlist.length > 9) {
      await dispatch(SearchCreators.fetchMoreSearch(MoreSearch));
    }
  }, [page]);

  React.useEffect(() => {
    NextItems();
  }, [NextItems]);

  React.useEffect(() => {
    if (inView && nextItem) {
      setPage((state) => state + 1);
    }
  }, [inView]);

  React.useEffect(() => {
    setPage(1);
    dispatch(SearchCreators.fetchSearchLoad(MainSearch));
    dispatch(fetchMessage({ Message: false }));
  }, [query.keyword]);

  return (
    <Container>
      <SearchBar margin="0" setFindUser={setFindUser} />
      <Grid width="100%" margin="16px 0" isFlex hoz="space-between">
        <Grid width="auto">
          <CategoryBtn
            radius="20px"
            width="80px"
            height="32px"
            color={!cityOpen ? 'gray' : 'brandColor'}
            bgColor={
              !cityOpen ? 'rgba(231,231,231,0.5)' : 'rgba(255,153,0,0.2)'
            }
            border={!cityOpen ? '1px solid #c4c4c4' : '1px solid #ff9900'}
            onClick={CityOpenhandler}
            fw="bold"
          >
            지역
          </CategoryBtn>
        </Grid>
        <Grid width="auto">
          <CategoryBtn
            radius="20px"
            color={!traveler ? 'gray' : 'brandColor'}
            bgColor={
              !traveler ? 'rgba(231,231,231,0.5)' : 'rgba(255,153,0,0.2)'
            }
            border={!traveler ? '1px solid #c4c4c4' : '1px solid #ff9900'}
            width="80px"
            height="32px"
            onClick={Travelerhandler}
            fw="bold"
          >
            여행자
          </CategoryBtn>
          <CategoryBtn
            radius="20px"
            color={!guide ? 'gray' : 'brandColor'}
            bgColor={!guide ? 'rgba(231,231,231,0.5)' : 'rgba(255,153,0,0.2)'}
            border={!guide ? '1px solid #c4c4c4' : '1px solid #ff9900'}
            width="80px"
            height="32px"
            onClick={Guidehandler}
            margin="0 0 0 10px"
            fw="bold"
          >
            길잡이
          </CategoryBtn>
        </Grid>
      </Grid>
      <AreaSelectBox
        toggle={cityOpen}
        setGu={setGu}
        setCity={setCity}
        setCityNum={cityNum}
      />
      <Button _onClick={SearchHandler} fw="bold" width="100%" height="54px">
        검색
      </Button>
      <Text margin="28px 0 12px 0">
        <Strong>{cityName ? `${cityName}` : ''}</Strong>
        <Strong> {guName ? `${guName}의 ` : ''}</Strong>
        <Strong fw="md">
          {' '}
          {guName ? `${subText}입니다.` : '전체 회원목록입니다.'}
        </Strong>
      </Text>
      {userlist
        ? userlist.map((item, idx) => {
            return <SearchCard userInfo={item} key={idx} idx={idx} />;
          })
        : ''}
      <div ref={ref} style={{ marginTop: '100px', height: '20px' }} />
      {message && <ToastMessage msg="관심목록에 추가되었습니다" />}
    </Container>
  );
};

export default Search;
