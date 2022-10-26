import React, { FC } from 'react';

import { Description } from './Description/Description';
import { Statistics } from './Statistics/Statistics';

import './ChannelInformation.scss'

interface ChannelInformationProps {
    description: string,
    country: string,
    publishedAt: Date,
    statistics: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string,
    }
}

export const ChannelInformation: FC<ChannelInformationProps> = ({ description, country, publishedAt, statistics }) => {
    return (
        <div className="channelInformation">
            <Description description={description} />
            <Statistics country={country} publishedAt={publishedAt} statistics={statistics} />
        </div>
    );
}


