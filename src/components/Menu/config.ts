import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/home',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Explore',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Collections',
        href: '/swap',
      },
      {
        label: 'Portfolio',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Swap',
    icon: 'TradeIcon',
    initialOpenState: false,
    href: '/swap'
  },
  {
    label: 'Earn',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Statking',
        href: '/swap',
      },
      {
        label: 'Pools',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Fracionalization',
    icon: 'TradeIcon',
    initialOpenState: false,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
]

export default config
