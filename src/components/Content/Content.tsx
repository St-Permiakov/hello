import React from 'react';

import styles from './Content.scss';

type TProps = {
  content: string;
};

export const Content = (props: TProps) => {
  const { content } = props;

  return (
    <div className={styles.root} dangerouslySetInnerHTML={{ __html: content }} />
  );
};

