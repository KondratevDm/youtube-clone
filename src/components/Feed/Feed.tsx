import React, { FC } from 'react';
import { Loader, Error, Cards } from '@components';
import { VideoItemType } from '@/types'
import { useFetchSuggestedVideos } from '@/hooks/useFetchSuggestedVideos'
import './Feed.scss';

interface FeedProps {
  selectedCategory: string
}

export const Feed: FC<FeedProps> = ({ selectedCategory }) => {

  const { error, isLoading, handleCloseError, items } = useFetchSuggestedVideos(selectedCategory);
  
  console.log(items)

  return (
    <div className="feed">
      <div className="feed__content">

        {items && (
          items.map((item: VideoItemType, index) => {
            return (
              <Cards
                key={`${index}${item.id.videoId}`} // videos can have the same id :c
                item={item}
                id="VideoCardFeed"
              />
            )
          })
        )}

        {isLoading && (
          <Loader type="feed" />
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