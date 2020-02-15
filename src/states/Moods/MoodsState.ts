import { Mood } from 'src/apis/CocoaApi/models/Moods';

type MoodsState = {
  lists: Mood[];
  edits: {
    selectedMood?: Mood;
  };
  isFetching: boolean;
};

type ReadonlyMoodsState = Readonly<MoodsState>;
export default ReadonlyMoodsState;
