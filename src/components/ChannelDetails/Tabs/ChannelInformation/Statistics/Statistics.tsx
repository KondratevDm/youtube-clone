import React, { FC } from 'react';
import { changeDateFormat, numberWithSpaces } from '@/utils';

interface StatisticsProps {
    country: string,
    publishedAt: Date,
    statistics: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string,
    }
}

export const Statistics: FC<StatisticsProps> = ({ country, publishedAt, statistics }) => {
    return (
        <>
            <div className="channelInformation__statistics">
                <h3>Statistics</h3>
                <p>Subscriber count: {numberWithSpaces(statistics.subscriberCount)}</p>
                <p>Video count: {numberWithSpaces(statistics.videoCount)}</p>
                <p>View count: {numberWithSpaces(statistics.viewCount)}</p>
                <p>Сhannel creation date: {changeDateFormat(publishedAt)}</p>
                <p>Country: {country}</p>
            </div>
            <div className="channelInformation__divider" />
        </>
    );
}


