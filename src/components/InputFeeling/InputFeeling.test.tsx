import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import InputFeeling from './InputFeeling';

// テストを実行するたびに初期化
afterEach(cleanup);

describe('InputFeeling', () => {
    test('テキストの仕様', () => {
        const { getByLabelText } = render(<InputFeeling />);
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
        const { getByLabelText } = render(<InputFeeling />);
        const root = getByLabelText('root');

        // ボタンの数は5個
        expect(root.childElementCount).toBe(5);
    });
});
