import React from 'react';
import Input from './elements/Input';
import Strong from './elements/Strong';
import TextArea from './elements/TextArea';
import Text from './elements/Text';
import SubTitle from './elements/SubTitle';
import MainTitle from './elements/MainTitle';

const App = () => {
  return (
    <>
      <div className="App">웰컴투 타입스크립트</div>
      <Input
        placeholder="여행자/길잡이를 검색하세요"
        radius="40px"
        padding="11px 45px 11px 23px"
        fs="sl"
      />
      <Strong>ㅋㅋㅎㅇ</Strong>
      <TextArea />
      <Text fw="bold" fs="md" color="brandColor" textAlign="center">
        ㅎㅇ
      </Text>
      <SubTitle>ㅋㅋㅎㅇㄹ</SubTitle>
      <MainTitle>ㅎㅇㅎㅇㅎㅇㅎㅇㅎ</MainTitle>
    </>
  );
};

export default App;
