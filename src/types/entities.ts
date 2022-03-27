import { TDynamicItem, TImg } from '@/types';

import React from 'react';

export type TSection = {
  // used for navigation
  id: string;
  title: string;
  content: React.ReactNode;
  showTitle?: boolean
} & TDynamicItem;

export type TContact = {
  // link or img
  icon?: TImg;
  text?: string;
  link: string;
};

export type TCompany = {
  name: string;
  link: string;
  position: string;
  dates: { from: Date; to?: Date };
  // may be html string
  duties: string;
};

export type TSkill = {
  name: string;
  // may be html string
  description: string;
  // may be html string
  additional: string;
  // example of code
  example?: string;
} & TDynamicItem;

export type TStackItem = {
  img: TImg;
  name: string;
} & TDynamicItem;
