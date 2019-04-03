import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import CauseOfFeelingButton from './CauseOfFeelingButton';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

afterEach(cleanup);

describe('CauseOfFeelingButton', () => {
    describe('UIの仕様', () => {
        describe('causeOfFeelingTypeによって適切にボタンとテキストが描画される', () => {
            test('causeOfFeelingtype=AMOUNT_OF_WORKのとき「仕事量」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.AMOUNT_OF_WORK}
                    />
                );
                const amountOfWorkButton = getByLabelText(
                    'amount-of-work-button'
                );
                const amountOfWorkText = getByLabelText('amount-of-work-text');

                // 「仕事内容」ボタンが1つ描画される
                expect(amountOfWorkButton.childElementCount).toBe(1);
                // テキストは「仕事内容」
                expect(amountOfWorkText.textContent).toBe('仕事量');
            });

            test('causeOfFeelingtype=JOB_DESCRIPTIONのとき「仕事内容」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.JOB_DESCRIPTION}
                    />
                );
                const jobDescriptionButton = getByLabelText(
                    'job-description-button'
                );
                const jobDescriptionText = getByLabelText(
                    'job-description-text'
                );

                // 「仕事内容」ボタンが1つ描画される
                expect(jobDescriptionButton.childElementCount).toBe(1);
                // テキストは「仕事内容」
                expect(jobDescriptionText.textContent).toBe('仕事内容');
            });

            test('causeOfFeelingtype=HUMAN_RELATIONのとき「人間関係」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HUMAN_RELATION}
                    />
                );
                const humanRelationButton = getByLabelText(
                    'human-relation-button'
                );
                const humanRelationText = getByLabelText('human-relation-text');

                // 「人間関係」ボタンが1つ描画される
                expect(humanRelationButton.childElementCount).toBe(1);
                // テキストは「人間関係」
                expect(humanRelationText.textContent).toBe('人間関係');
            });

            test('causeOfFeelingtype=EVALUATIONのとき「評価」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.EVALUATION}
                    />
                );
                const evaluationButton = getByLabelText('evaluation-button');
                const evaluationText = getByLabelText('evaluation-text');

                // 「評価」ボタンが1つ描画される
                expect(evaluationButton.childElementCount).toBe(1);
                // テキストは「評価」
                expect(evaluationText.textContent).toBe('評価');
            });

            test('causeOfFeelingtype=OVERTIME_WORKのとき「残業」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.OVERTIME_WORK}
                    />
                );
                const overtimeWorkButton = getByLabelText(
                    'overtime-work-button'
                );
                const overtimeWorkText = getByLabelText('overtime-work-text');

                // 「残業」ボタンが1つ描画される
                expect(overtimeWorkButton.childElementCount).toBe(1);
                // テキストは「残業」
                expect(overtimeWorkText.textContent).toBe('残業');
            });

            test('causeOfFeelingtype=HOLIDAY_WORKのとき「休日出勤」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HOLIDAY_WORK}
                    />
                );
                const holidayWorkButton = getByLabelText('holiday-work-button');
                const holidayWorkText = getByLabelText('holiday-work-text');

                // 「休日出勤」ボタンが1つ描画される
                expect(holidayWorkButton.childElementCount).toBe(1);
                // テキストは「休日出勤」
                expect(holidayWorkText.textContent).toBe('休日出勤');
            });
        });
    });
});
