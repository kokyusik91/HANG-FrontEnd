import React, { useState } from 'react';

// components
import SearchBar from '../../components/SearchBar';
import AreaSelectBox from '../../components/AreaSelectBox';
import SearchCard from '../../components/SearchCard';
// style
import { Button, Grid, Text, Strong } from '../../elements';

const Search = () => {
  const [cityOpen, setCityOpen] = useState(false);
  const [traveler, setTraveler] = useState(false);
  const [guide, setGuide] = useState(false);

  const CityOpenhandler = () => {
    if (!cityOpen) {
      setCityOpen(true);
    } else {
      setCityOpen(false);
    }
  };
  const Travelerhandler = () => {
    if (!traveler) {
      setTraveler(true);
    } else {
      setTraveler(false);
    }
  };
  const Guidehandler = () => {
    if (!guide) {
      setGuide(true);
    } else {
      setGuide(false);
    }
  };
  return (
    <>
      <SearchBar />
      <Grid
        width="100%"
        margin="10px 0 10px 0"
        display="flex"
        hoz="space-between"
      >
        <Grid>
          <Button
            bgColor={!cityOpen ? 'gray' : 'brandColor'}
            padding="8px 30px"
            _onClick={CityOpenhandler}
          >
            지역
          </Button>
        </Grid>
        <Grid display="flex" hoz="flex-end">
          <Button
            bgColor={!traveler ? 'gray' : 'brandColor'}
            padding="8px 30px"
            _onClick={Travelerhandler}
          >
            여행자
          </Button>
          <Button
            bgColor={!guide ? 'gray' : 'brandColor'}
            margin="0 0 0 10px"
            _onClick={Guidehandler}
            padding="4px 30px"
          >
            길잡이
          </Button>
        </Grid>
      </Grid>
      <AreaSelectBox toggle={cityOpen} />
      <Button width="100%" margin="10px 0 0 0">
        검 색 하 기
      </Button>
      <Text margin="40px 0 0 0">
        <Strong>서울특별시 종로구</Strong>의 여행자입니다.
      </Text>
      <SearchCard
        username="새싹몬"
        age="20대"
        city="서울특별시 강남구"
        gender="남자"
        imgUrl="data:image/jpeg;base64,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"
      />
    </>
  );
};

export default Search;
