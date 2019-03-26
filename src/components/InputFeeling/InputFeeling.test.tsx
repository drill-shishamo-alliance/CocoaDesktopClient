import * as React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import InputFeeling from './InputFeeling';
import { FeelingType } from '../../models/states/FeelingState';

// テストを実行するたびに初期化
afterEach(cleanup);

describe('InputFeeling', () => {
    const mockSwitchInputCauseOfFeeling = jest.fn();
    test('テキストの仕様', () => {
        const { getByLabelText } = render(
            <InputFeeling
                switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
            />
        );
        const veryDissatisfiedText = getByLabelText('very-dissatisfied-text');
        const dissatisfiedText = getByLabelText('dissatisfied-text');
        const normalText = getByLabelText('normal-text');
        const satisfiedText = getByLabelText('satisfied-text');
        const verySatisfiedText = getByLabelText('very-satisfied-text');

        expect(veryDissatisfiedText.textContent).toBe('最悪');
        expect(dissatisfiedText.textContent).toBe('悪い');
        expect(normalText.textContent).toBe('普通');
        expect(satisfiedText.textContent).toBe('良い');
        expect(verySatisfiedText.textContent).toBe('最高');
    });

    test('気分ボタンが5つ描画される', () => {
        const { getByLabelText } = render(
            <InputFeeling
                switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
            />
        );
        const root = getByLabelText('root');

        // ボタンの数は5個
        expect(root.childElementCount).toBe(5);
    });

    // 各ボタンごとに発火
    describe('正しい引数でボタンが発火する', () => {
        test('最悪ボタン', () => {
            const { getByLabelText } = render(
                <InputFeeling
                    switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
                />
            );
            const veryDissatisfiedButton = getByLabelText(
                'very-dissatisfied-button'
            );
            fireEvent.click(veryDissatisfiedButton);
            expect(mockSwitchInputCauseOfFeeling).toHaveBeenCalledWith(
                FeelingType.VERY_DISSATISFIED
            );
        });

        test('悪いボタン', () => {
            const { getByLabelText } = render(
                <InputFeeling
                    switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
                />
            );
            const dissatisfiedButton = getByLabelText('dissatisfied-button');
            fireEvent.click(dissatisfiedButton);
            expect(mockSwitchInputCauseOfFeeling).toHaveBeenCalledWith(
                FeelingType.DISSATISFIED
            );
        });

        test('普通ボタン', () => {
            const { getByLabelText } = render(
                <InputFeeling
                    switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
                />
            );
            const normalButton = getByLabelText('normal-button');
            fireEvent.click(normalButton);
            expect(mockSwitchInputCauseOfFeeling).toHaveBeenCalledWith(
                FeelingType.NORMAL
            );
        });

        test('良いボタン', () => {
            const { getByLabelText } = render(
                <InputFeeling
                    switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
                />
            );
            const satisfiedButton = getByLabelText('satisfied-button');
            fireEvent.click(satisfiedButton);
            expect(mockSwitchInputCauseOfFeeling).toHaveBeenCalledWith(
                FeelingType.SATISFIED
            );
        });

        test('最高ボタン', () => {
            const { getByLabelText } = render(
                <InputFeeling
                    switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
                />
            );
            const verySatisfiedButton = getByLabelText('very-satisfied-button');
            fireEvent.click(verySatisfiedButton);
            expect(mockSwitchInputCauseOfFeeling).toHaveBeenCalledWith(
                FeelingType.VERY_SATISFIED
            );
        });
    });
});
