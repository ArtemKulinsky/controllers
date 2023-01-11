import React, { FC } from 'react';
import { observer } from 'mobx-react';

import { CountryInfo } from '../../api/apiService';
import AutocompletesControllerViewModel from './AutocompletesControllerViewModel';
import Spinner from '../../components/Spinner';

import styles from './AutocompletesController.module.scss';

type PromptType = {
    onClick: () => void;
} & CountryInfo;

type Props = { viewModel: AutocompletesControllerViewModel };

const Prompt: FC<PromptType> = ({ name, fullName, flag, onClick }) => (
    <li className={styles.Prompt} onClick={onClick}>
        {name}, {fullName}
        <img alt={name} src={flag} />
    </li>
);

const AutocompletesControllerView: FC<Props> = ({ viewModel }) => (
    <div className={styles.AutocompletesController}>
        <input
            className={styles.AutocompletesController__input}
            value={viewModel.text}
            onChange={e => viewModel.changeText(e.target.value)}
        />
        {!!(viewModel.prompts.length || viewModel.isLoadingPrompts) &&
            (viewModel.isLoadingPrompts ? (
                <div className={styles.AutocompletesController__spinnerWrapper}>
                    <Spinner />
                </div>
            ) : (
                <ul className={styles.AutocompletesController__prompts}>
                    {viewModel.prompts.map(prompt => (
                        <Prompt
                            {...prompt}
                            onClick={() => viewModel.changeText(prompt.fullName, false)}
                        />
                    ))}
                </ul>
            ))}
    </div>
);

export default observer(AutocompletesControllerView);
