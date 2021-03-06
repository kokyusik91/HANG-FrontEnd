import React from 'react';
// icon
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// router
import { useLocation } from 'react-router-dom';
import { HeaderIncluded } from '../../route/Path';
// history
import { history } from '../../redux/configureStore';
// components
import { Container, Logo, Grid, Button } from '../../elements';
import NotiBadge from './NotiBadge';
// style
import HeaderStyle from './style';

const Header = () => {
  const path: string = useLocation().pathname;
  const isHome: boolean = path === '/';
  const [title, setTitle] = React.useState<string>('');

  React.useEffect((): void => {
    switch (true) {
      case /search/.test(path):
        setTitle('검색');
        break;

      case /detail/.test(path):
        setTitle('프로필');
        break;

      case /mypage\/block/.test(path):
        setTitle('차단 목록');
        break;

      case /mypage/.test(path):
        setTitle('마이페이지');
        break;

      case /chat/.test(path):
        setTitle('채팅');
        break;

      case /noti/.test(path):
        setTitle('알림');
        break;

      case /favorite/.test(path):
        setTitle('관심목록');
        break;

      default:
        setTitle('Hang');
    }
  }, [path]);

  return HeaderIncluded.includes(path) && !/chat\/room/.test(path) ? (
    <HeaderStyle>
      <Container height="66px" padding="0">
        <Grid
          height="100%"
          isFlex
          hoz={isHome ? 'flex-end' : 'space-between'}
          ver="center"
        >
          {!isHome ? (
            <Button
              form="text"
              margin="0 18px 0 0"
              _onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIosIcon />
            </Button>
          ) : null}

          <Logo
            imgUrl={
              isHome
                ? 'https://hang-image-upload.s3.ap-northeast-2.amazonaws.com/localImage/Symbol.png'
                : null
            }
            height={isHome ? '36px' : null}
            width={isHome ? '36px' : null}
          >
            {title}
          </Logo>

          <NotiBadge />
        </Grid>
      </Container>
    </HeaderStyle>
  ) : null;
};

export default Header;
