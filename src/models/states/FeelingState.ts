export enum FeelingType {
    VERY_DISSATISFIED = '@FEEELING/VERY_DISSATISFIED',
    DISSATISFIED = '@FEEELING/DISSATISFIED',
    NORMAL = '@FEEELING/NORMAL',
    SATISFIED = '@FEEELING/SATISFIED',
    VERY_SATISFIED = '@FEEELING/VERY_SATISFIED'
}

type FeelingState = { feelingType: FeelingType };
export default FeelingState;
