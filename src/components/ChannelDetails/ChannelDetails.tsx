import React, { FC } from 'react';
import { useParams } from 'react-router';

import { Error, Loader } from '@components';
import { ChannelContent } from './ChannelContent/ChannelContent';
import { useFetchChannelDetails } from '@/hooks/useFetchChannelDetails'

import './ChannelDetails.scss';

export const ChannelDetails: FC = () => {

  const { channelId } = useParams();

  const { data, error, isLoading, handleCloseError, } = useFetchChannelDetails(channelId);

  return (
    <div className="channelDetails">
      {data && (
        <ChannelContent
          bannerExternalUrl={data.brandingSettings.image.bannerExternalUrl}
          logoUrl={data.snippet.thumbnails.high.url}
          title={data.snippet.title}
          publishedAt={data.snippet.publishedAt}
          description={data.snippet.description}
          country={data.snippet.country}
          statistics={data.statistics}
          channelId={channelId}
        />
      )}

      {isLoading && (
        <Loader type="circularLoader" />
      )}

      {!!error && (
        <Error
          message={error.response.data.message}
          handleCloseError={handleCloseError}
        />
      )}
    </div>
  );
}


