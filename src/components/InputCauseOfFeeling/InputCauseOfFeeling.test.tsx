import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import InputCauseOfFeeling from './InputCauseOfFeeling';
import { FeelingType } from 'src/models/states/FeelingState';

// テストを実行するたびに初期化
afterEach(cleanup);

describe('InputCauseFeeling', () => {
    const mockSwitchInputFeeling = jest.fn();

    describe('UIの仕様', () => {
        test('selectedFeelingTypeによって適切なボタンが描画される', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingState={{
                        feelingId: 2,
                        feelingType: FeelingType.VERY_SATISFIED,
                        name: ''
                    }}
                    causeOfFeelingStates={[]}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const feelingButton = getByLabelText('very-satisfied-button');

            expect(feelingButton.childElementCount).toBe(1);
        });

        test('質問のテキストは「理由があったら教えてください。」', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingState={{
                        feelingId: 2,
                        feelingType: FeelingType.DISSATISFIED,
                        name: ''
                    }}
                    causeOfFeelingStates={[]}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const question = getByLabelText('question');

            expect(question.textContent).toBe('理由があったら教えてください。');
        });

        test('原因ボタンが6つ描画される', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingState={{
                        feelingId: 2,
                        feelingType: FeelingType.DISSATISFIED,
                        name: ''
                    }}
                    causeOfFeelingStates={[]}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );
            const buttons = getByLabelText('buttons');

            // ボタンの数は6個
            expect(buttons.childElementCount).toBe(6);
        });

        test('戻るボタンが描画される', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingState={{
                        feelingId: 2,
                        feelingType: FeelingType.DISSATISFIED,
                        name: ''
                    }}
                    causeOfFeelingStates={[]}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const backButton = getByLabelText('back-button');

            expect(backButton.childElementCount).toBe(1);
        });

        test('Sendボタンが描画される', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingState={{
                        feelingId: 2,
                        feelingType: FeelingType.DISSATISFIED,
                        name: ''
                    }}
                    causeOfFeelingStates={[]}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const sendButton = getByLabelText('send-button');

            expect(sendButton.childElementCount).toBe(1);
        });
    });
});
