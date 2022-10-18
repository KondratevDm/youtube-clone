import { SidebarTabType } from '@/types'
import { IoLogoJavascript, IoIosArrowUp, IoIosArrowDown, IoIosMusicalNote } from 'react-icons/io';
import { FaReact, FaNodeJs, FaPodcast } from 'react-icons/fa';
import { SiYoutubegaming, SiSolidity } from 'react-icons/si';
import { TbMovie, TbBrandNextjs } from 'react-icons/tb';
import { GiPalmTree } from 'react-icons/gi';
import { BiFootball } from 'react-icons/bi';

export const sidebarTabsArr: SidebarTabType[] = [
    {
        id: 0,
        text: 'JavaScript',
        image: [IoLogoJavascript],
        path: '/'
    },
    {
        id: 1,
        text: 'ReactJS',
        image: [FaReact],
        path: '/'
    },
    {
        id: 2,
        text: 'Node.js',
        image: [FaNodeJs],
        path: '/'
    },
    {
        id: 3,
        text: 'Next.js',
        image: [TbBrandNextjs],
        path: '/'
    },
    {
        id: 4,
        text: 'Solidity',
        image: [SiSolidity],
        path: '/'
    },
    {
        id: 5,
        text: 'Chill',
        image: [IoIosArrowUp, IoIosArrowDown],
    },
]

export const sidebarHiddenTabsArr: SidebarTabType[] = [
    {
        id: 0,
        text: 'Gaming',
        image: [SiYoutubegaming],
        path: '/'
    },
    {
        id: 1,
        text: 'Music',
        image: [IoIosMusicalNote],
        path: '/'
    },
    {
        id: 2,
        text: 'Movie',
        image: [TbMovie],
        path: '/'
    },
    {
        id: 3,
        text: 'Podcast',
        image: [FaPodcast],
        path: '/'
    },
    {
        id: 4,
        text: 'Travel',
        image: [GiPalmTree],
        path: '/'
    },
    {
        id: 5,
        text: 'Sport',
        image: [BiFootball],
        path: '/'
    },
]

export const emptyArray = new Array(50).fill(null)