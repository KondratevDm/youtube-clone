import { NavbarTabType } from '@/types'

import HomeLogo from '@assets/images/home.svg'
import ArrowTop from '@assets/images/arrow-top.svg'
import ArrowBottom from '@assets/images/arrowBottom.svg'

export const navBarTabsArr: NavbarTabType[] = [
    {
        id: 0,
        text: 'Home',
        image: [HomeLogo],
        path: '/'
    },
    {
        id: 1,
        text: 'About',
        image: [HomeLogo],
        path: '/about'
    },
    {
        id: 2,
        text: 'Hm',
        image: [HomeLogo],
        path: '/hm'
    },
    {
        id: 3,
        text: 'Show more',
        image: [ArrowTop, ArrowBottom],
    },
]

export const navBarHiddenTabsArr: NavbarTabType[] = [
    {
        id: 0,
        text: 'Home',
        image: [HomeLogo],
        path: '/home'
    },
    {
        id: 1,
        text: 'Home',
        image: [HomeLogo],
        path: '/home'
    },
    {
        id: 2,
        text: 'Home',
        image: [HomeLogo],
        path: '/home'
    },
    {
        id: 3,
        text: 'Home',
        image: [HomeLogo],
        path: '/home'
    },
]