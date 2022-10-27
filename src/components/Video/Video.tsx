import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from "react-router-dom";

import { Error, Loader } from '@components';
import { useFetchVideoDetails } from '@/hooks/fetch'
import { VideoContent } from './VideoContent/VideoContent';

import './Video.scss'

export const Video = () => {
    const navigate = useNavigate();
    const { videoId } = useParams();
    
    useEffect(() => {
        if (videoId === 'undefined') {
            return navigate("/not-found");
        }
    });

    const { item, error, handleCloseError, isLoading } = useFetchVideoDetails(videoId);

    return (
        <div className="video">
            <div className="video__container">
                {isLoading && (
                    <Loader type="circularLoader" />
                )}

                {item && (
                    <VideoContent
                        item={item}
                        videoId={videoId} />
                )}

                {error && (
                    <Error
                        message={error.response.data.message}
                        handleCloseError={handleCloseError}
                    />
                )}
            </div>
        </div>
    )
};