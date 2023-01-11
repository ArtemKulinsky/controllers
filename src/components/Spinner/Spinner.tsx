import React, { FC } from 'react';

import styles from './Spinner.module.scss';

const Spinner: FC = () => (
    <div className={styles.Spinner}>
        {Array.from(new Array(8)).map((_, idx) => (
            <div key={idx} />
        ))}
    </div>
);

export default Spinner;
