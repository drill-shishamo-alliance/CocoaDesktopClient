export type Cause = {
  id: string;
  name: string;
  icon_path: string;
  default_color: string;
  clicked_color: string;
};

export type GetCausesResponse = {
  causes: Cause[];
};

export type GetCausesQuery = {
  access_token: string;
};
