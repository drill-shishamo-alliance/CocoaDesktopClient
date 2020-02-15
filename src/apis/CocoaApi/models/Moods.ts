export type Mood = {
  id: string;
  department_id: string;
  name: string;
  weight: number;
  icon_name: string;
  color: string;
};

export type GetMoodsResponse = Mood[];

export type GetMoodsQuery = {
  access_token: string;
};
