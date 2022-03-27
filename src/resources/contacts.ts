import { TContact } from '@/types';

const contacts: TContact[] = [
  {
    icon: {
      img: '/public/images/tg.webp',
      fallbackImg: '/public/images/tg.png'
    },
    text: 'Telegram',
    link: 'tg://resolve?domain=Stranger92'
  },
  {
    icon: {
      img: '/public/images/in.webp',
      fallbackImg: '/public/images/in.png'
    },
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/permiakov/'
  },
  {
    icon: {
      img: '/public/images/gh.webp',
      fallbackImg: '/public/images/gh.png'
    },
    text: 'GitHub',
    link: 'https://github.com/St-Permiakov'
  },
  {
    icon: {
      img: '/public/images/gm.webp',
      fallbackImg: '/public/images/gm.png'
    },
    text: 'GMail',
    link: 'mailto:permiakov.st@gmail.com'
  }
];

export default contacts;
