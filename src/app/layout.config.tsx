import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'SendinCraft Docs',
    url: '/docs',
  },
  links: [
    {
      text: 'Home',
      url: '/',
      active: 'nested-url',
    },
  ],
};