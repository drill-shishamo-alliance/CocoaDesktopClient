import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import CauseOfFeelingButton from './CauseOfFeelingButton';
import { CauseOfFeelingType } from 'src/models/states/CauseOfFeelingState';

afterEach(cleanup);

describe('CauseOfFeelingButton', () => {
    const onClickSpy = jest.fn();
    describe('UIの仕様', () => {
        describe('causeOfFeelingTypeによって適切にボタンとテキストが描画される', () => {
            test('causeOfFeelingtype=AMOUNT_OF_WORKのとき「仕事量」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.AMOUNT_OF_WORK}
                        onClick={onClickSpy}
                    />
                );

                // 「仕事内容」ボタンが描画される
                getByLabelText('amount-of-work-button');
                const amountOfWorkText = getByLabelText('amount-of-work-text');

                // テキストは「仕事内容」
                expect(amountOfWorkText.textContent).toBe('仕事量');
            });

            test('causeOfFeelingtype=JOB_DESCRIPTIONのとき「仕事内容」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.JOB_DESCRIPTION}
                        onClick={onClickSpy}
                    />
                );

                // 「仕事内容」ボタンが1つ描画される
                getByLabelText('job-description-button');
                const jobDescriptionText = getByLabelText(
                    'job-description-text'
                );

                // テキストは「仕事内容」
                expect(jobDescriptionText.textContent).toBe('仕事内容');
            });

            test('causeOfFeelingtype=HUMAN_RELATIONのとき「人間関係」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HUMAN_RELATION}
                        onClick={onClickSpy}
                    />
                );

                // 「人間関係」ボタンが描画される
                getByLabelText('human-relation-button');

                const humanRelationText = getByLabelText('human-relation-text');

                // テキストは「人間関係」
                expect(humanRelationText.textContent).toBe('人間関係');
            });

            test('causeOfFeelingtype=EVALUATIONのとき「評価」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.EVALUATION}
                        onClick={onClickSpy}
                    />
                );

                // 「評価」ボタンが描画される
                getByLabelText('evaluation-button');
                const evaluationText = getByLabelText('evaluation-text');

                // テキストは「評価」
                expect(evaluationText.textContent).toBe('評価');
            });

            test('causeOfFeelingtype=OVERTIME_WORKのとき「残業」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.OVERTIME_WORK}
                        onClick={onClickSpy}
                    />
                );

                // 「残業」ボタンが1つ描画される
                getByLabelText('overtime-work-button');
                const overtimeWorkText = getByLabelText('overtime-work-text');

                // テキストは「残業」
                expect(overtimeWorkText.textContent).toBe('残業');
            });

            test('causeOfFeelingtype=HOLIDAY_WORKのとき「休日出勤」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <CauseOfFeelingButton
                        causeOfFeelingType={CauseOfFeelingType.HOLIDAY_WORK}
                        onClick={onClickSpy}
                    />
                );

                // 「休日出勤」ボタンが1つ描画される
                getByLabelText('holiday-work-button');
                const holidayWorkText = getByLabelText('holiday-work-text');

                // テキストは「休日出勤」
                expect(holidayWorkText.textContent).toBe('休日出勤');
            });
        });
    });
});
