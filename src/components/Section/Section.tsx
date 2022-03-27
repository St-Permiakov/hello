import { TSection } from '@/types';

import React from 'react';

import styles from './Section.scss';

type TProps = TSection & { showTitle?: boolean };

export const Section = (props: TProps) => {
  const { id, title, content, showTitle = true } = props;

  return (
    <section key={id} className={styles.root}>
      <span className={styles.anchor} id={id}></span>
      {showTitle && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.content}>{content}</div>
    </section>
  );
};

