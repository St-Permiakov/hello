import React from 'react';

import { Section } from '@/components/Section';

import sections from '@/resources/sections';

import styles from './Main.scss';

export const Main = () => {
  const activeSections = React.useMemo(() => sections.filter(({ active }) => active), [sections]);

  return (
    <div className={styles.root}>
      {activeSections.map(Section)}
    </div>
  );
};

