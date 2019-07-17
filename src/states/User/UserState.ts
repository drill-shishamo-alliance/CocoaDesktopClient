type UserState = {
  accessToken?: string;
  isLoading: boolean;
};

type ReadonlyUserState = Readonly<UserState>;
export default ReadonlyUserState;
