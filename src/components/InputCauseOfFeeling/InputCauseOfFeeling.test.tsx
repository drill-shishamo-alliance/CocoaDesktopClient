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
                    selectedFeelingType={FeelingType.VERY_SATISFIED}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const feelingButton = getByLabelText('very-satisfied-button');

            expect(feelingButton.childElementCount).toBe(1);
        });

        test('質問のテキストは「の原因は何ですか？」', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingType={FeelingType.VERY_SATISFIED}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const question = getByLabelText('question');

            expect(question.textContent).toBe('の原因は何ですか？');
        });

        test('原因ボタンが6つ描画される', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingType={FeelingType.VERY_SATISFIED}
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
                    selectedFeelingType={FeelingType.VERY_SATISFIED}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const backButton = getByLabelText('back-button');

            expect(backButton.childElementCount).toBe(1);
        });

        test('Sendボタンが描画される', () => {
            const { getByLabelText } = render(
                <InputCauseOfFeeling
                    selectedFeelingType={FeelingType.VERY_SATISFIED}
                    switchInputFeeling={mockSwitchInputFeeling}
                />
            );

            const sendButton = getByLabelText('send-button');

            expect(sendButton.childElementCount).toBe(1);
        });
    });
});
