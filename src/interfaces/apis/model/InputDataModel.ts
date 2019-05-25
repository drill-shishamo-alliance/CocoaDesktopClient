export interface InputData {
  feeling: {
    feeling_id: number;
  };
  cause_of_feeling: [
    {
      cause_of_feeling_id: number;
    }
  ];
  respondent: string;
}
