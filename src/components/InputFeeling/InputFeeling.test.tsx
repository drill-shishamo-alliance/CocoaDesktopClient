import * as React from 'react';
import { render, cleanup } from 'react-testing-library';
import InputFeeling from './InputFeeling';

// テストを実行するたびに初期化
afterEach(cleanup);

describe('InputFeeling', () => {
  const mockSwitchInputCauseOfFeeling = jest.fn();

  describe('UIの仕様', () => {
    test('質問のテキストは「今日の気分はどうですか？」', () => {
      const { getByLabelText } = render(
        <InputFeeling
          switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
          feelingStates={[]}
        />
      );

      const question = getByLabelText('question');

      expect(question.textContent).toBe('今日の気分はどうですか？');
    });

    test('気分ボタンが5つ描画される', () => {
      const { getByLabelText } = render(
        <InputFeeling
          switchInputCauseOfFeeling={mockSwitchInputCauseOfFeeling}
          feelingStates={[]}
        />
      );
      const buttons = getByLabelText('buttons');

      // ボタンの数は5個
      expect(buttons.childElementCount).toBe(5);
    });
  });
});
