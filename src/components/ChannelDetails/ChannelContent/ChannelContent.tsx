import React, { FC } from 'react';
import { Tabs } from '../Tabs/Tabs';
import { ChannelHeader } from './ChannelHeader/ChannelHeader';
import { AboutAutor } from './AboutAutor/AboutAutor';

interface ChannelContentProps {
    bannerExternalUrl: string,
    logoUrl: string,
    title: string,
    publishedAt: Date,
    description: string,
    country: string,
    channelId: string,
    statistics: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string,
    },
}

export const ChannelContent: FC<ChannelContentProps> = (props) => {

    const { bannerExternalUrl, logoUrl, title, description, country, publishedAt, statistics, channelId } = props

    return (
        <div className="channelDetails__content">
            <ChannelHeader bannerExternalUrl={bannerExternalUrl} />
            <div className="channelDetails__content__container">
                <AboutAutor
                    logoUrl={logoUrl}
                    title={title}
                    statistics={statistics}
                />
                <Tabs
                    description={description}
                    country={country}
                    publishedAt={publishedAt}
                    statistics={statistics}
                    channelId={channelId}
                />
            </div>
        </div>
    );
}


