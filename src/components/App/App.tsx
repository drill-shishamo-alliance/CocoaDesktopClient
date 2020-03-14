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
    console.log('return login page');
    return <LoginPage />;
  } else {
    console.log('return main page');
    return <MainPage />;
  }
};

export default App;
