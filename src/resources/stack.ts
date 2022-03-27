import { TStackItem } from '@/types';

const stack: TStackItem[] = [
  {
    img: {
      img: '/public/images/react.webp',
      fallbackImg: '/public/images/react.png'
    },
    name: 'React',
    active: true
  },
  {
    img: {
      img: '/public/images/redux.webp',
      fallbackImg: '/public/images/redux.png'
    },
    name: 'Redux',
    active: true
  },
  {
    img: {
      img: '/public/images/ts.webp',
      fallbackImg: '/public/images/ts.png'
    },
    name: 'TypeScript',
    active: true
  },
  {
    img: {
      img: '/public/images/js.webp',
      fallbackImg: '/public/images/js.png'
    },
    name: 'JavaScript',
    active: true
  },
  {
    img: {
      img: '/public/images/next.webp',
      fallbackImg: '/public/images/next.png'
    },
    name: 'Next.js',
    active: true
  },
  {
    img: {
      img: '/public/images/wp.webp',
      fallbackImg: '/public/images/wp.png'
    },
    name: 'Webpack',
    active: true
  },
  {
    img: {
      img: '/public/images/gql.webp',
      fallbackImg: '/public/images/gql.png'
    },
    name: 'GraphQL',
    active: false
  }
]

export default stack;
