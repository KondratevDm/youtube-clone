import React, { FC } from 'react';
import ReactPlayer from 'react-player/youtube'

interface PlayerProps {
    videoId: string,
}

export const Player: FC<PlayerProps> = ({ videoId }) => {
    return (
        <div className="video__container__player">
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls={true}
                width='100%'
                height='100%'
                origin={location.hostname}
            />
        </div>
    )
};