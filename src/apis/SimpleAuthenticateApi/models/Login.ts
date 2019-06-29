export type PostLoginRequest = {
  login_id: string;
  password: string;
};

export type PostLoginResponse = {
  authorization: string;
};
