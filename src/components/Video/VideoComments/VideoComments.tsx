import React, { FC } from 'react';
import { useFetchVideoComments } from '@/hooks/useFetchVideoComments'
import { numberWithSpaces } from '@utils'
import { Commentary } from './Commentary/Commentary';
import { Error } from '@components';

interface VideoCommentsProps {
    videoId: string,
    commentCount: string
}

export const VideoComments: FC<VideoCommentsProps> = ({ videoId, commentCount }) => {
    const { comments, error, handleCloseError } = useFetchVideoComments(videoId);

    const commentsData = comments?.map((it) => it.snippet.topLevelComment.snippet)

    return (
        <div className="video__info">
            <p className="video__info__comment-count">{numberWithSpaces(commentCount)} comments</p>
            {comments && (
                commentsData.map((item) => {
                    return (
                        <Commentary
                            key={`${item.authorChannelId.value}${item.publishedAt}`}
                            authorChannelId={item.authorChannelId.value}
                            authorDisplayName={item.authorDisplayName}
                            publishedAt={item.publishedAt}
                            textOriginal={item.textOriginal}
                        />
                    )
                })
            )}

            {!!error && (
                <Error
                    message={error.response.data.message}
                    handleCloseError={handleCloseError}
                />
            )}
        </div>
    )
};