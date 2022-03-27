import React from 'react';

import styles from './Footer.scss';
import { Link } from '@/components/Link';

export const Footer = () => {
    return (
        <div className={styles.root}>
            <div className={styles.copyright}>
              <div className={styles.author}>
                © St.Permiakov
              </div>
              <div className={styles.source}>
                Source code: <Link href={'https://github.com/St-Permiakov/St-Permiakov.github.io'} external={true}>St-Permiakov.github.io</Link>
              </div>
            </div>
        </div>
    );
};

