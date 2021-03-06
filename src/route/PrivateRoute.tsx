import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from 'src/shared/token';

interface Private {
  component: React.ElementType;
  path: string;
  exact?: boolean | undefined;
}

const PrivateRoute = ({ component: Component, ...rest }: Private) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
