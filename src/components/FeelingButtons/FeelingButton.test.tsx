import * as React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import FeelingButton from './FeelingButton';
import { FeelingType } from 'src/models/states/FeelingState';

afterEach(cleanup);

describe('FeelingButton', () => {
    const handleClickSpy = jest.fn();

    describe('UIの仕様', () => {
        describe('feelingTypeによって適切にボタンとテキストが描画される', () => {
            test('feelingtype=VERY_DISSATISFIEDのとき「最悪」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <FeelingButton
                        feelingType={FeelingType.VERY_DISSATISFIED}
                    />
                );
                const veryDissatisfiedButton = getByLabelText(
                    'very-dissatisfied-button'
                );
                const veryDissatisfiedText = getByLabelText(
                    'very-dissatisfied-text'
                );

                // 「最悪」ボタンが1つ描画される
                expect(veryDissatisfiedButton.childElementCount).toBe(1);
                // テキストは「最悪」
                expect(veryDissatisfiedText.textContent).toBe('最悪');
            });

            test('feelingtype=DISSATISFIEDのとき「悪い」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <FeelingButton feelingType={FeelingType.DISSATISFIED} />
                );
                const dissatisfiedButton = getByLabelText(
                    'dissatisfied-button'
                );
                const dissatisfiedText = getByLabelText('dissatisfied-text');

                // 「悪い」ボタンが1つ描画される
                expect(dissatisfiedButton.childElementCount).toBe(1);
                // テキストは「悪い」
                expect(dissatisfiedText.textContent).toBe('悪い');
            });

            test('feelingtype=VERY_NORMALのとき「普通」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <FeelingButton feelingType={FeelingType.NORMAL} />
                );
                const normalButton = getByLabelText('normal-button');
                const normalText = getByLabelText('normal-text');

                // 「普通」ボタンが1つ描画される
                expect(normalButton.childElementCount).toBe(1);
                // テキストは「普通」
                expect(normalText.textContent).toBe('普通');
            });

            test('feelingtype=SATISFIEDのとき「良い」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <FeelingButton feelingType={FeelingType.SATISFIED} />
                );
                const satisfiedButton = getByLabelText('satisfied-button');
                const satisfiedText = getByLabelText('satisfied-text');

                // 「最悪」ボタンが1つ描画される
                expect(satisfiedButton.childElementCount).toBe(1);
                // テキストは「良い」
                expect(satisfiedText.textContent).toBe('良い');
            });

            test('feelingtype=VERY_SATISFIEDのとき「最高」ボタンとテキストが正しく描画される', () => {
                const { getByLabelText } = render(
                    <FeelingButton feelingType={FeelingType.VERY_SATISFIED} />
                );
                const verySatisfiedButton = getByLabelText(
                    'very-satisfied-button'
                );
                const verySatisfiedText = getByLabelText('very-satisfied-text');

                // 「最悪」ボタンが1つ描画される
                expect(verySatisfiedButton.childElementCount).toBe(1);
                // テキストは「最高」
                expect(verySatisfiedText.textContent).toBe('最高');
            });

            describe('handleClickの有無によるUIの変化', () => {
                test('handleClickがPropsで渡された場合、disabled=false');
                const { getByLabelText } = render(
                    <FeelingButton
                        feelingType={FeelingType.VERY_SATISFIED}
                        handleClick={handleClickSpy}
                    />
                );

                const button = getByLabelText(
                    'very-satisfied-button'
                ) as HTMLButtonElement;

                // IconButtonのdisabledがFalse
                // expect(button.style.).toBeFalsy()
            });

            test('handleClickがPropsで渡されなかった場合、disabled=true', () => {
                const { getByLabelText } = render(
                    <FeelingButton feelingType={FeelingType.VERY_SATISFIED} />
                );

                const button = getByLabelText(
                    'very-satisfied-button'
                ) as HTMLButtonElement;

                // IconButtonのdisabledがTrue
                // expect(button.style.disa)
            });
        });
    });

    describe('Integration', () => {
        // 各ボタンごとに発火
        describe('正しい引数でhandleClickが発火する', () => {
            test('最悪ボタン', () => {
                const feelingType: FeelingType = FeelingType.VERY_DISSATISFIED;
                const { getByLabelText } = render(
                    <FeelingButton
                        feelingType={feelingType}
                        handleClick={handleClickSpy}
                    />
                );
                const veryDissatisfiedButton = getByLabelText(
                    'very-dissatisfied-button'
                );
                fireEvent.click(veryDissatisfiedButton);
                expect(handleClickSpy).toHaveBeenCalledWith(feelingType);
            });
        });
    });
});
