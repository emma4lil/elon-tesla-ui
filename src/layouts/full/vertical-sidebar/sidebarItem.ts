import {
  CircleIcon,
  CashBanknoteIcon,
  EPassportIcon,
  CurrencyBitcoinIcon,
  BuildingBankIcon,
  DashboardIcon,
  Settings2Icon,

} from 'vue-tabler-icons';

export interface menu {
  header?: string;
  title?: string;
  icon?: object;
  to?: string;
  divider?: boolean;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
  chipIcon?: string;
  children?: menu[];
  disabled?: boolean;
  type?: string;
  subCaption?: string;
}
const sidebarItems: menu[] = [
  { header: 'Dashboard' },
  {
    title: 'Trade',
    icon: DashboardIcon,
    to: '/dashboard/default'
  },
  {
    title: 'Active Orders',
    icon: CurrencyBitcoinIcon,
    to: '/dashboard/orders',
  },
  {header: 'Accounts'},
  {
    title: 'Withdraw',
    icon: CashBanknoteIcon,
    to: '/accounts/withdraw'
  },
  {
    title: 'Deposit',
    icon: BuildingBankIcon,
    to: '/accounts/deposit'
  },
  {
    title: "KYC",
    icon: EPassportIcon,
    to: '/accounts/kyc'
  },
  {
    title: "Explore Plans",
    icon: CashBanknoteIcon,
    to: '/accounts/plans'
  },
  {header: 'Settings'},
  {
    title: "Trade Settings",
    icon: Settings2Icon,
    to: '/settings'
  },
]

const sidebarItem: menu[] = [
  ...sidebarItems,
  // { header: 'Dashboard' },
  // {
  //   title: 'Default',
  //   icon: DashboardIcon,
  //   to: '/dashboard/default'
  // },
  // { divider: true },
  // { header: 'Pages' },
  // {
  //   title: 'Authentication',
  //   icon: KeyIcon,
  //   to: '/auth',
  //   children: [
  //     {
  //       title: 'Login',
  //       icon: CircleIcon,
  //       to: '/login1'
  //     },
  //     {
  //       title: 'Register',
  //       icon: CircleIcon,
  //       to: '/register'
  //     }
  //   ]
  // },
  // {
  //   title: 'Error 404',
  //   icon: BugIcon,
  //   to: '/error'
  // },
  // { divider: true },
  // { header: 'Utilities' },
  // {
  //   title: 'Typography',
  //   icon: TypographyIcon,
  //   to: '/utils/typography'
  // },
  // {
  //   title: 'Shadows',
  //   icon: ShadowIcon,
  //   to: '/utils/shadows'
  // },
  // {
  //   title: 'Colors',
  //   icon: PaletteIcon,
  //   to: '/utils/colors'
  // },
  //
  // {
  //   title: 'Icons',
  //   icon: WindmillIcon,
  //   to: '/forms/radio',
  //   children: [
  //     {
  //       title: 'Tabler Icons',
  //       icon: CircleIcon,
  //       to: '/icons/tabler'
  //     },
  //     {
  //       title: 'Material Icons',
  //       icon: CircleIcon,
  //       to: '/icons/material'
  //     }
  //   ]
  // },
  // { divider: true },
  // {
  //   title: 'Sample Page',
  //   icon: BrandChromeIcon,
  //   to: '/starter'
  // },
  // {
  //   title: 'Documentation',
  //   icon: HelpIcon,
  //   to: 'https://codedthemes.gitbook.io/berry-vuetify/',
  //   type: 'external'
  // }
];

export default sidebarItem;
