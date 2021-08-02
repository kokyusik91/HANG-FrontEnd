import React, { useState } from 'react';

import { useLocation } from 'react-router';
// style
import SearchIcon from '@material-ui/icons/Search';
import { Grid, Input } from '../../elements/index';
import { history } from '../../redux/configureStore';

const SearchBar = props => {
  const [keyword, SetKeyword] = useState('');
  const path = useLocation().pathname;

  const InputValue = e => {
    SetKeyword(e.target.value);
  };

  if (path.includes('/search')) {
    props.setFindUser(keyword);
  }

  const KeyPressHandler = e => {
    if (path.includes('/search')) {
      return undefined;
    }
    if (e.key === 'Enter') {
      history.push(`/search?keyword=${keyword}`);
    }
  };

  return (
    <Grid margin="28px 0 0 0" position="relative">
      <Input
        placeholder="여행자/길잡이를 검색하세요."
        _onChange={InputValue}
        _onKeyPress={KeyPressHandler}
      />
      <Grid
        width="30px"
        height="30px"
        position="absolute"
        right="10px"
        top="14px"
        color="gray"
      >
        <SearchIcon />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
