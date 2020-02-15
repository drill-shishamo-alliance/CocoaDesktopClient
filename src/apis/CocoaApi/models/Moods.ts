export type Mood = {
  id: string;
  name: string;
  weight: number;
  icon_name: string;
  color: string;
};

export type GetMoodsResponse = {
  moods: Mood[];
};

export type GetMoodsQuery = {
  access_token: string;
};
