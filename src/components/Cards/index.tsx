import React, { FC } from 'react';
import { VideoItemType } from '@/types'
import { ChannelCard } from './ChannelCard/ChannelCard';
import { VideoCardSearch } from './VideoCardSearch/VideoCardSearch';
import { VideoCardFeed } from './VideoCardFeed/VideoCardFeed';

interface CardsProps {
    item: VideoItemType,
    id: string
}

export const Cards: FC<CardsProps> = ({ item, id }) => {
    switch (id) {
        case 'ChannelCard':
            return <ChannelCard item={item} />;
        case 'VideoCardSearch':
            return <VideoCardSearch item={item} />;
        case 'VideoCardFeed':
            return <VideoCardFeed item={item} />;
        default:
            return null;
    }
};