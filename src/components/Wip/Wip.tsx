import React from 'react';

import styles from './Wip.scss';

export const Wip = () => {
    const [ellipsis, setEllipsis] = React.useState('.');

    React.useEffect(() => {
        const interval = setInterval(() => {
            setEllipsis(prevState => prevState.length < 3 ? `${prevState}.` : '.');
        }, 500);
        return () => clearInterval(interval);
    }, [])

    return (
        <div className={styles.root}>
            <h1>Work in progress<span className={styles.ellipsis}>{ellipsis}</span></h1>
        </div>
    )
}
