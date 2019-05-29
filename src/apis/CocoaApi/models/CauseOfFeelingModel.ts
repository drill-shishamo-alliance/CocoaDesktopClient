export interface GetCauseofFeelingsResponse {
  cause_of_feelings: [
    {
      cause_of_feeling_id: number;
      name: string;
    }
  ];
  result: string;
}
