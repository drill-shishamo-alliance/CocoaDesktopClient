export type PostLoginRequest = {
  id: string;
  password: string;
};

export type PostLoginResponse = {
  employee_id: number;
  department_id: number;
};
