import React, { FC, useState } from 'react';
import { Snackbar } from '@mui/material';

import { numberWithSpaces } from '@utils'

interface AboutAutorProps {
    logoUrl: string,
    title: string,
    statistics: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string,
    },
}

export const AboutAutor: FC<AboutAutorProps> = ({ logoUrl, title, statistics }) => {
    const [openSnackBar, setOpenSnackBar] = useState(false)

    const handleClick = () => {
        setOpenSnackBar(true);
    };

    const handleClose = () => {
        setOpenSnackBar(false);
    };

    return (
        <>
            <div className="channelDetails__content__about-autor">
                <div className="channelDetails__content__about-autor__channel-info">
                    <img className="channelDetails__content__about-autor__channel-logo" src={logoUrl} />
                    <div>
                        <div className="channelDetails__content__about-autor__channel-info__title">{title}</div>
                        <div className="channelDetails__content__about-autor__channel-info__publish-time">{numberWithSpaces(statistics.subscriberCount)} subscribers</div>
                    </div>
                </div>
                <button className="channelDetails__content__about-autor__channel-info__subscribe" onClick={handleClick}>SUBSCRIBE</button>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={openSnackBar}
                onClose={handleClose}
                message="haha dude its just a clone"
            />
        </>
    );
}


