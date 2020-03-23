import React from 'react';
import { useSelector } from 'react-redux';
import RootState from 'src/states';
import LoginPage from '../LoginPage/LoginPage';
import MainPage from '../MainPage/MainPage';

const App: React.FC = () => {
  const isLoggedIn = useSelector<RootState, RootState['user']['isLoggedIn']>(
    state => state.user.isLoggedIn
  );
  if (!isLoggedIn) {
    return <LoginPage />;
  } else {
    return <MainPage />;
  }
};

export default App;
