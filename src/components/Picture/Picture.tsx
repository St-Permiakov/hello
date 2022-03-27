import { TImg } from '@/types';

import React from 'react';
import classNames from 'classnames';

import styles from './Picture.scss';

type TProps = TImg & { className?: string };

export const Picture = (props: TProps) => {
  const { img, fallbackImg, alt, title, className } = props;

  const fallbackImgType = fallbackImg && fallbackImg.split('.').pop();

  return (
    <picture className={classNames(styles.root, className)}>
      <source srcSet={img} type="image/webp" />
      {!!fallbackImg && <source srcSet={fallbackImg} type={`image/${fallbackImgType}`} />}
      <img src={img} alt={alt || ''} title={title}/>
    </picture>
  );
};

