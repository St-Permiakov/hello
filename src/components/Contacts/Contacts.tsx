import React from 'react';

import { Link } from '@/components/Link';

import contacts from '@/resources/contacts';

import styles from './Contacts.scss';

export const Contacts = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {contacts.map(contact => (
          <li className={styles.item} key={contact.link}>
            <Link href={contact.link} external={true}>
              <span className={styles.linkContent}>
                {!!contact.icon && (
                  <picture className={styles.icon}>
                    <source srcSet={contact.icon.img} type="image/webp" />
                    <source srcSet={contact.icon.fallbackImg} type="image/png"/>
                    <img src={contact.icon.img} alt={contact.text || contact.link} title={contact.text || contact.link}/>
                  </picture>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

