import React, { FC } from 'react';
import { changeDateFormat } from '@utils'
import { VideoItemType } from '@/types'
import WithOutPrewiewLogo from '@assets/images/high.jpg'
import { Link } from 'react-router-dom';

interface VideoCardFeedProps {
    item: VideoItemType;
}

export const VideoCardFeed: FC<VideoCardFeedProps> = ({ item }) => {
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
                {/* <Link to={`/channel/${item.snippet.channelId}`}> */}
                    <p className="feed__content__item__channel-name">{item.snippet.channelTitle}</p>
                {/* </Link> */}

                <p className="feed__content__item__views">{`${changeDateFormat(item.snippet.publishTime)}`}</p>
            </div>
        </Link>

    )
};