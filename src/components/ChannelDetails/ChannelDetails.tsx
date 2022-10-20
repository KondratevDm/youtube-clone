import React, { FC } from 'react';
import { useParams } from 'react-router';

import './ChannelDetails.scss';

export const ChannelDetails: FC = () => {
  const { channelId } = useParams();


  return (
    <div className="ChannelDetails">
      channel {channelId}
    </div>
  );
}


