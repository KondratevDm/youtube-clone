import React, { FC } from 'react';
import { useFetchVideoComments } from '@/hooks/useFetchVideoComments'
import { changeDateFormat, numberWithSpaces } from '@utils'
import { Avatar } from '@mui/material';
interface VideoCommentsProps {
    videoId: string,
    commentCount: string
}

export const VideoComments: FC<VideoCommentsProps> = ({ videoId, commentCount }) => {
    const { comments } = useFetchVideoComments(videoId);

    const commentsData = comments?.map((it) => it.snippet.topLevelComment.snippet)
    console.log(commentsData)


    return (
        <div className="video__info">
            <p className="video__info__comment-count">{numberWithSpaces(commentCount)} comments</p>

            {comments && (
                commentsData.map((item, index) => {
                    return (
                        <div key={index} className="video__info__comment">
                            <div className="video__info__comment__about-autor__channel-info">
                                <Avatar sx={{ bgcolor: "#7499bc", width: '40px', height: '40px' }}>{item.authorDisplayName[0].toUpperCase()}</Avatar>
                                <div>
                                    <div className="video__info__comment__about-autor__channel-info__block">
                                        <div className="video__info__comment__about-autor__channel-info__block__title">{item.authorDisplayName}</div>
                                        <div className="video__info__comment__about-autor__channel-info__block__publish-time">{`${changeDateFormat(item.publishedAt)}`}</div>
                                    </div>

                                    <div className="video__info__comment__about-autor__channel-info__comment-text">{item.textOriginal}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )}

        </div>
    )
};