import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postLogin } from 'src/actions/User/UserActionCreator';

const LoginPage: React.FC = () => {
  const [inputTexts, setInputTexts] = useState({
    id: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTexts({ ...inputTexts, [e.target.name]: e.currentTarget.value });
  };

  const onClick = () => {
    if (inputTexts.id === '' || inputTexts.password === '') return;
    dispatch(postLogin.request(inputTexts));
    setInputTexts({ id: '', password: '' });
  };

  return (
    <div>
      {Object.entries(inputTexts).map(([key, value]) => {
        return <input type='text' key={key} name={key} value={value} onChange={handleChange} />;
      })}
      <button key={'loginButton'} onClick={onClick}>
        ログイン
      </button>
    </div>
  );
};

export default LoginPage;
