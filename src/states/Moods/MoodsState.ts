import { Mood } from 'src/apis/Mood/Model';

type MoodsState = {
  lists: Mood[];
  edits: {
    selectedMood?: Mood;
  };
  isFetching: boolean;
};

type ReadonlyMoodsState = Readonly<MoodsState>;
export default ReadonlyMoodsState;
