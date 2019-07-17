export type Feeling = {
  id: string;
  name: string;
  weight: number;
  icon_name: string;
  color: string;
};

export type GetFeelingsResponse = {
  feelings: Feeling[];
};

export type GetFeelingsQuery = {
  access_token: string;
};
