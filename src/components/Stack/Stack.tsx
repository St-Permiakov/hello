import React from 'react';

import { StackList } from './StackList';

import stack from '@/resources/stack';

import styles from './Stack.scss';

export const Stack = () => {
  return (
    <div className={styles.root}>
      <StackList />
    </div>
  );
};

