import React from 'react';

import { Contacts } from '@/components/Contacts';

import styles from './Header.scss';

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Stanislav Permiakov <span className={styles.subTitle}>Frontend Developer</span>
      </div>
      <div className={styles.contacts}>
        <span className={styles.contactsLabel}>Contact me!</span>
        <Contacts />
      </div>
    </div>
  );
};

