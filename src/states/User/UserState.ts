type UserState = {
  employeeId: number;
  departmentId: number;
  isLoggedIn: boolean;
};

type ReadonlyUserState = Readonly<UserState>;
export default ReadonlyUserState;
