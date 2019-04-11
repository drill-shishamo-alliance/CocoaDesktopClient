import * as React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
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

    describe('Integration', () => {
        // describe('原因ボタンを押した時', () => {
        //     test('入力された原因がinputCauseOfFeelingsにあるか探しなかった場合追加する', () => {
        //         const { getByLabelText } = render(
        //             <InputCauseOfFeeling
        //                 selectedFeelingState={{
        //                     feelingId: 2,
        //                     feelingType: FeelingType.VERY_SATISFIED,
        //                     name: ''
        //                 }}
        //                 causeOfFeelingStates={[]}
        //                 switchInputFeeling={mockSwitchInputFeeling}
        //             />
        //         );
        //         const amountOfWorkButton = getByLabelText('amount-of-work-button');

        //         fireEvent.click(amountOfWorkButton);
        //     });

        //     test('入力された原因がinputCauseOfFeelingsにあるか探しあった場合消す', () => {
        //         const { getByLabelText } = render(
        //             <InputCauseOfFeeling
        //                 selectedFeelingState={{
        //                     feelingId: 2,
        //                     feelingType: FeelingType.VERY_SATISFIED,
        //                     name: ''
        //                 }}
        //                 causeOfFeelingStates={[]}
        //                 switchInputFeeling={mockSwitchInputFeeling}
        //             />
        //         );

        //     });
        // });

        describe('Sendボタンのテキスト', () => {
            test('原因の入力が行われていない時', () => {
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

                expect(sendButton.textContent).toBe('気分だけ伝える');
            });

            test('原因の入力が行われている時', () => {
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

                const amountOfWorkButton = getByLabelText(
                    'amount-of-work-button'
                );

                fireEvent.click(amountOfWorkButton);

                const sendButton = getByLabelText('send-button');

                expect(sendButton.textContent).toBe('気分と理由を伝える');
            });
        });
    });
});
