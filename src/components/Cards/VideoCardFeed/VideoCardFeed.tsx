import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { changeDateFormat } from '@utils'
import { VideoItemType } from '@/types'
import WithOutPrewiewLogo from '@assets/images/high.jpg'
import { useNavigateToPath } from '@/hooks/useNavigateToPath'

interface VideoCardFeedProps {
    item: VideoItemType;
}

export const VideoCardFeed: FC<VideoCardFeedProps> = ({ item }) => {

    const { navigateToPath } = useNavigateToPath();

    return (
        <Link to={`/watch/${item.id.videoId}`}>
            <div key={item.id.videoId} className="feed__content__item">
                <img
                    className="feed__content__item__img"
                    alt="Video prewiew"
                    src={item.snippet.thumbnails.high.url}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = WithOutPrewiewLogo;
                    }}

                />
                <p className="feed__content__item__title">{item.snippet.title}</p>
                <p className="feed__content__item__channel-name"
                    onClick={(e) => navigateToPath(e)(`/channel/${item.snippet.channelId}`)}
                >
                    {item.snippet.channelTitle}
                </p>
                <p className="feed__content__item__views">{`${changeDateFormat(item.snippet.publishTime)}`}</p>
            </div>
        </Link>

    )
};