import React, { FC } from 'react';
import { Loader, Error, VideoCard } from '@components';
import { VideoItemType } from '@/types'
import { useAxios } from '@/hooks/useAxios'
import './Feed.scss';

interface FeedProps {
  selectedCategory: string
}

export const Feed: FC<FeedProps> = ({ selectedCategory }) => {

  const { response, error, loading, handleCloseError } = useAxios(selectedCategory);

  console.log(response?.items)

  return (
    <div className="feed">
      <div className="feed__content">
        {loading && (
          <Loader />
        )}

        {response && (
          response.items.map((item: VideoItemType) => {
            return (
              <VideoCard
                key={item.id.videoId}
                item={item}
              />
            )
          })
        )}

        {!!error && (
          <Error
            message={error.message}
            handleCloseError={handleCloseError}
          />
        )}
      </div>
    </div >
  )
};