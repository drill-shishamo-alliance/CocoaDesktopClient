type UserState = {
  employeeId: string;
  departmentId: string;
  isLoggedIn: boolean;
};

type ReadonlyUserState = Readonly<UserState>;
export default ReadonlyUserState;
