import React from 'react';

import { Picture } from '@/components/Picture';

import styles from './Hello.scss';

export const Hello = () => {
  return (
    <div className={styles.root}>
      <div className={styles.ava}>
        <Picture img="/public/images/ava.webp" fallbackImg="/public/images/ava.png" />
      </div>
      <div className={styles.title}>
        <h1>Hi, I&apos;m Stanislav Permiakov</h1>
        <span>And I&apos;m a Frontend Developer</span>
      </div>
    </div>
  );
};

