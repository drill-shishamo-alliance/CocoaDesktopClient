export enum FeelingType {
    VERY_DISSATISFIED = '@FEEELING_VERY_DISSATISFIED',
    DISSATISFIED = '@FEEELING_DISSATISFIED',
    NORMAL = '@FEEELING_NORMAL',
    SATISFIED = '@FEEELING_SATISFIED',
    VERY_SATISFIED = '@FEEELING_VERY_SATISFIED'
}

type FeelingState = { feelingType: FeelingType };
export default FeelingState;
