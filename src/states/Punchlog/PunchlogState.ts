type AppState = {
  isPostLogResultLoading: boolean;
};

type ReadonlyAppState = Readonly<AppState>;
export default ReadonlyAppState;
