export type Cause = {
  id: string;
  name: string;
  department_id: string;
  icon_path?: string;
  default_color?: string;
  clicked_color?: string;
};

export type GetCausesResponse = Cause[];

export type GetCausesQuery = {
  access_token: string;
};
