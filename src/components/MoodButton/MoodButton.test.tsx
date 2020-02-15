import * as React from 'react';
/*
import { render, cleanup, fireEvent } from 'react-testing-library';
import MoodButton from './MoodButton';
import { MoodType } from 'src/states/MoodState';

afterEach(cleanup);

describe('MoodButton', () => {
  const handleClickSpy = jest.fn();

  describe('UIの仕様', () => {
    describe('moodTypeによって適切にボタンとテキストが描画される', () => {
      test('moodtype=VERY_DISSATISFIEDのとき「最悪」ボタンとテキストが正しく描画される', () => {
        const { getByLabelText } = render(
          <MoodButton moodType={MoodType.VERY_DISSATISFIED} />
        );
        const veryDissatisfiedButton = getByLabelText('very-dissatisfied-button');
        const veryDissatisfiedText = getByLabelText('very-dissatisfied-text');

        // 「最悪」ボタンが1つ描画される
        expect(veryDissatisfiedButton.childElementCount).toBe(1);
        // テキストは「最悪」
        expect(veryDissatisfiedText.textContent).toBe('最悪');
      });

      test('moodtype=DISSATISFIEDのとき「悪い」ボタンとテキストが正しく描画される', () => {
        const { getByLabelText } = render(<MoodButton moodType={MoodType.DISSATISFIED} />);
        const dissatisfiedButton = getByLabelText('dissatisfied-button');
        const dissatisfiedText = getByLabelText('dissatisfied-text');

        // 「悪い」ボタンが1つ描画される
        expect(dissatisfiedButton.childElementCount).toBe(1);
        // テキストは「悪い」
        expect(dissatisfiedText.textContent).toBe('悪い');
      });

      test('moodtype=VERY_NORMALのとき「普通」ボタンとテキストが正しく描画される', () => {
        const { getByLabelText } = render(<MoodButton moodType={MoodType.NORMAL} />);
        const normalButton = getByLabelText('normal-button');
        const normalText = getByLabelText('normal-text');

        // 「普通」ボタンが1つ描画される
        expect(normalButton.childElementCount).toBe(1);
        // テキストは「普通」
        expect(normalText.textContent).toBe('普通');
      });

      test('moodtype=SATISFIEDのとき「良い」ボタンとテキストが正しく描画される', () => {
        const { getByLabelText } = render(<MoodButton moodType={MoodType.SATISFIED} />);
        const satisfiedButton = getByLabelText('satisfied-button');
        const satisfiedText = getByLabelText('satisfied-text');

        // 「最悪」ボタンが1つ描画される
        expect(satisfiedButton.childElementCount).toBe(1);
        // テキストは「良い」
        expect(satisfiedText.textContent).toBe('良い');
      });

      test('moodtype=VERY_SATISFIEDのとき「最高」ボタンとテキストが正しく描画される', () => {
        const { getByLabelText } = render(
          <MoodButton moodType={MoodType.VERY_SATISFIED} />
        );
        const verySatisfiedButton = getByLabelText('very-satisfied-button');
        const verySatisfiedText = getByLabelText('very-satisfied-text');

        // 「最悪」ボタンが1つ描画される
        expect(verySatisfiedButton.childElementCount).toBe(1);
        // テキストは「最高」
        expect(verySatisfiedText.textContent).toBe('最高');
      });

      describe('handleClickの有無によるUIの変化', () => {
        test('handleClickがPropsで渡された場合、disabled=false', () => {
          const { getByLabelText } = render(
            <MoodButton moodType={MoodType.VERY_SATISFIED} handleClick={handleClickSpy} />
          );
          const button = getByLabelText('very-satisfied-button') as HTMLButtonElement;

          // IconButtonのdisabledがFalse
          expect(button.disabled).toBeFalsy();
        });

        test('handleClickがPropsで渡されなかった場合、disabled=true', () => {
          const { getByLabelText } = render(
            <MoodButton moodType={MoodType.VERY_SATISFIED} />
          );
          const button = getByLabelText('very-satisfied-button') as HTMLButtonElement;

          // IconButtonのdisabledがTrue
          expect(button.disabled).toBeTruthy();
        });
      });
    });
  });

  describe('Integration', () => {
    describe('ボタンを押したとき', () => {
      test('親から受け取ったmoodTypeがhandleClickの引数に設定される', () => {
        const moodType: MoodType = MoodType.VERY_DISSATISFIED;
        const { getByLabelText } = render(
          <MoodButton moodType={moodType} handleClick={handleClickSpy} />
        );
        const veryDissatisfiedButton = getByLabelText('very-dissatisfied-button');
        fireEvent.click(veryDissatisfiedButton);
        expect(handleClickSpy).toHaveBeenCalledWith(moodType);
      });
    });
  });
});
*/
