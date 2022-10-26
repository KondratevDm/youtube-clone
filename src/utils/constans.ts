import { SidebarTabType } from '@/types'

import JSLogo from '@assets/images/js.svg'
import ReactLogo from '@assets/images/react.svg'
import NodeLogo from '@assets/images/node.svg'
import NextLogo from '@assets/images/next.svg'
import SolidityLogo from '@assets/images/solidity.svg'
import ArrowUpLogo from '@assets/images/arrowUp.svg'
import ArrowDownLogo from '@assets/images/arrowDown.svg'
import GamingLogo from '@assets/images/gaming.svg'
import MusicLogo from '@assets/images/music.svg'
import MovieLogo from '@assets/images/movie.svg'
import PodcastLogo from '@assets/images/podcast.svg'
import TravelLogo from '@assets/images/travel.svg'
import SportLogo from '@assets/images/sport.svg'


export const sidebarTabsArr: SidebarTabType[] = [
    {
        id: 0,
        text: 'JavaScript',
        image: [JSLogo],
        path: '/'
    },
    {
        id: 1,
        text: 'ReactJS',
        image: [ReactLogo],
        path: '/'
    },
    {
        id: 2,
        text: 'Node.js',
        image: [NodeLogo],
        path: '/'
    },
    {
        id: 3,
        text: 'Next.js',
        image: [NextLogo],
        path: '/'
    },
    {
        id: 4,
        text: 'Solidity',
        image: [SolidityLogo],
        path: '/'
    },
    {
        id: 5,
        text: 'Chill',
        image: [ArrowUpLogo, ArrowDownLogo],
    },
]

export const sidebarHiddenTabsArr: SidebarTabType[] = [
    {
        id: 0,
        text: 'Gaming',
        image: [GamingLogo],
        path: '/'
    },
    {
        id: 1,
        text: 'Music',
        image: [MusicLogo],
        path: '/'
    },
    {
        id: 2,
        text: 'Movie',
        image: [MovieLogo],
        path: '/'
    },
    {
        id: 3,
        text: 'Podcast',
        image: [PodcastLogo],
        path: '/'
    },
    {
        id: 4,
        text: 'Travel',
        image: [TravelLogo],
        path: '/'
    },
    {
        id: 5,
        text: 'Sport',
        image: [SportLogo],
        path: '/'
    },
]

// export const sidebarTabsArr: SidebarTabType[] = [
//     {
//         id: 0,
//         text: 'JavaScript',
//         image: [IoLogoJavascript],
//         path: '/'
//     },
//     {
//         id: 1,
//         text: 'ReactJS',
//         image: [FaReact],
//         path: '/'
//     },
//     {
//         id: 2,
//         text: 'Node.js',
//         image: [FaNodeJs],
//         path: '/'
//     },
//     {
//         id: 3,
//         text: 'Next.js',
//         image: [TbBrandNextjs],
//         path: '/'
//     },
//     {
//         id: 4,
//         text: 'Solidity',
//         image: [SiSolidity],
//         path: '/'
//     },
//     {
//         id: 5,
//         text: 'Chill',
//         image: [IoIosArrowUp, IoIosArrowDown],
//     },
// ]

// export const sidebarHiddenTabsArr: SidebarTabType[] = [
//     {
//         id: 0,
//         text: 'Gaming',
//         image: [SiYoutubegaming],
//         path: '/'
//     },
//     {
//         id: 1,
//         text: 'Music',
//         image: [IoIosMusicalNote],
//         path: '/'
//     },
//     {
//         id: 2,
//         text: 'Movie',
//         image: [TbMovie],
//         path: '/'
//     },
//     {
//         id: 3,
//         text: 'Podcast',
//         image: [FaPodcast],
//         path: '/'
//     },
//     {
//         id: 4,
//         text: 'Travel',
//         image: [GiPalmTree],
//         path: '/'
//     },
//     {
//         id: 5,
//         text: 'Sport',
//         image: [BiFootball],
//         path: '/'
//     },
// ]

export const emptyArray = new Array(50).fill(null)