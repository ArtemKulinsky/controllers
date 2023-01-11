import React, { FC } from 'react';
import { observer } from 'mobx-react';
import classnames from 'classnames';

import ButtonControllerViewModel from './ButtonControllerViewModel';

import styles from './ButtonController.module.scss';

type ButtonType = { text: string; onClick?: () => void };

type Props = {
    viewModel: ButtonControllerViewModel;
    buttonsLeft?: ButtonType[];
    buttonsRight?: ButtonType[];
};

const Button: FC<ButtonType> = ({ text, onClick }) => (
    <button className={styles.Button} onClick={onClick}>
        {text}
    </button>
);

const ButtonControllerView: FC<Props> = ({ viewModel, buttonsLeft, buttonsRight }) => (
    <div className={styles.ButtonController}>
        <div className={classnames(styles.ButtonController__buttons, styles.buttons__left)}>
            {buttonsLeft?.map(button => (
                <Button {...button} key={button.text} />
            ))}
        </div>
        <input
            className={styles.ButtonController__input}
            value={viewModel.text}
            onChange={e => viewModel.changeText(e.target.value)}
        />
        <div className={styles.ButtonController__buttons}>
            {buttonsRight?.map(button => (
                <Button {...button} key={button.text} />
            ))}
        </div>
    </div>
);

export default observer(ButtonControllerView);
