import React, { FC } from 'react';

interface ChannelHeaderProps {
    bannerExternalUrl: string,

}

export const ChannelHeader: FC<ChannelHeaderProps> = ({ bannerExternalUrl }) => {
    return (
        <header>
            <img className="channelDetails__content__banner" src={bannerExternalUrl} />
        </header>
    );
}


