import React, { FC } from 'react';

import { ChannelVideosLoader } from './ChannelVideosLoader/ChannelVideosLoader';
import { FeedLoader } from './FeedLoader/FeedLoader'
import { SearchLoader } from './SearchLoader/SearchLoader'
import { CircularLoader } from './CircularLoader/CircularLoader'

interface LoaderProps {
    type: string
}

interface LoaderProxyType {
    feed: () => JSX.Element,
    search: () => JSX.Element,
    channelVideos: () => JSX.Element,
    circularLoader: () => JSX.Element,
}

export const Loader: FC<LoaderProps> = ({ type }) => {

    const loaderByType: LoaderProxyType = {
        feed: FeedLoader,
        search: SearchLoader,
        channelVideos: ChannelVideosLoader,
        circularLoader: CircularLoader,
    }

    const CurrentLoader = loaderByType[type as keyof LoaderProxyType]

    return <CurrentLoader />
};