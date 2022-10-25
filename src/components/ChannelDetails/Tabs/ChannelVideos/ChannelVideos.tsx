import React, { FC } from 'react';
import { Loader, Error, Cards } from '@components';
import { VideoItemType } from '@/types'
import { useFetchChannelVideos } from '@/hooks/useFetchChannelVideos'
import './ChannelVideos.scss'

interface ChannelVideosProps {
    channelId: string,
}

export const ChannelVideos: FC<ChannelVideosProps> = ({ channelId }) => {

    const { isLoading, handleCloseError, items, error } = useFetchChannelVideos(channelId);

    console.log('items', items)

    return (
        <div className="channelVideos">
            <div className="channelVideos__content">
                {items && (
                    items.map((item: VideoItemType, index) => {
                        return (
                            <Cards
                                key={`${index}${item.id.videoId}`} // videos can have the same id :c
                                item={item}
                                id="ChannelVideoCard"
                            />
                        )
                    })
                )}

                {isLoading && (
                    <Loader type="channelVideos" />
                )}

                {!!error && (
                    <Error
                        message={error.message}
                        handleCloseError={handleCloseError}
                    />
                )}
            </div>
        </div>

    )
}


