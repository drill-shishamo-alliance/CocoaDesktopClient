export enum PostLogStatus {
  NOT_POSTED = '@POST_LOG_STATUS/NOT_POSTED',
  POSTING = '@POST_LOG_STATUS/POSTING',
  SUCCEEDED = '@POST_LOG_STATUS/SUCCEEDED',
  FAILED = '@POST_LOG_STATUS/FAILED',
}
type AppState = {
  postLogStatus: PostLogStatus;
};

type ReadonlyAppState = Readonly<AppState>;
export default ReadonlyAppState;
