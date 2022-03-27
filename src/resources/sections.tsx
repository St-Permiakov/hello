import { TSection } from '@/types';

import React from 'react';

import { Hello } from '@/components/Hello';
import { About } from '@/components/About';

function contentStub(this: TSection) {
  return this.title;
}

const sections: TSection[] = [
  {
    id: 'hello',
    title: 'Hello',
    content: <Hello />,
    showTitle: false,
    active: true
  },
  {
    id: 'about',
    title: 'About',
    content: <About />,
    showTitle: false,
    active: true
  },
  {
    id: 'stack',
    title: 'Stack',
    content: contentStub,
    active: true
  },
  {
    id: 'skills',
    title: 'Skills',
    content: contentStub,
    active: true
  },
  {
    id: 'learning',
    title: 'Skills',
    content: contentStub,
    active: true
  },
  {
    id: 'exp',
    title: 'Work experience',
    content: contentStub,
    active: true
  },
  {
    id: 'edu',
    title: 'Education',
    content: contentStub,
    active: true
  }
];

export default sections;
