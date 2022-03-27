import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Link.scss';

type TProps = {
    href: string;
    external?: boolean;
    className?: string;
};

export const Link: FC<TProps> = (props) => {
    const { href, external, className, children } = props;
    return (
        <a
          href={href}
          target={external ? '_blank' : '_self'}
          className={classNames(styles.root, className)}
          rel="noreferrer"
        >
            {children}
        </a>
    );
};

