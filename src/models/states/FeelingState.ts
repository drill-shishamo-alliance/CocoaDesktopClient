export enum FeelingType {
    VERY_DISSATISFIED = '@FEEELING/VERY_DISSATISFIED',
    DISSATISFIED = '@FEEELING/DISSATISFIED',
    NORMAL = '@FEEELING/NORMAL',
    SATISFIED = '@FEEELING/SATISFIED',
    VERY_SATISFIED = '@FEEELING/VERY_SATISFIED'
}

type FeelingState = {
    feelingId: number;
    feelingType: FeelingType;
    name: string; // 自由に変更できる名前
};

export default FeelingState;
