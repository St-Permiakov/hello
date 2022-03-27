import React from 'react';

import { Content } from '@/components/Content';

import about from '@/resources/about';

import styles from './About.scss';

export const About = () => {
  return (
    <div className={styles.root}>
      <Content content={about} />
    </div>
  );
};

