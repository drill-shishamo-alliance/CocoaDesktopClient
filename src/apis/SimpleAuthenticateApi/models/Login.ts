export type PostLoginRequest = {
  id: string;
  password: string;
};

export type PostLoginResponse = {
  employee_id: string;
  department_id: string;
};
