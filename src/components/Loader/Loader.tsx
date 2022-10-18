import React, { FC } from 'react';
import { FeedLoader } from './FeedLoader/FeedLoader'
import { SearchLoader } from './SearchLoader/SearchLoader'

interface LoaderProps {
    type: string
}

interface LoaderProxyType {
    feed: () => JSX.Element,
    search: () => JSX.Element,
}

export const Loader: FC<LoaderProps> = ({ type }) => {

    const loaderByType: LoaderProxyType = {
        feed: FeedLoader,
        search: SearchLoader,
    }

    const CurrentLoader = loaderByType[type as keyof LoaderProxyType]

    return <CurrentLoader />
};