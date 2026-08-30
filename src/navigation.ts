import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: "Let's get in touch", href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'About Studio', href: getPermalink('/about') },
        { text: 'Contact Us', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Game Design & Concept', href: getPermalink('/services#game-design') },
        { text: 'Full-Cycle Development', href: getPermalink('/services#full-cycle') },
        { text: 'Game Art & Animation', href: getPermalink('/services#game-art') },
        { text: 'Monetization & Economy', href: getPermalink('/services#monetization') },
        { text: 'Publishing & Live Ops', href: getPermalink('/services#live-ops') },
      ],
    },
    {
      title: 'Studio',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Team', href: getPermalink('/about') },
        { text: 'Our Process', href: getPermalink('/about') },
        { text: 'Get in Touch', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    © 2026 FMS IT Solution PLC. All rights reserved.
  `,
};
