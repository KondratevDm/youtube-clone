import React, { FC } from 'react';

interface DescriptionProps {
    description: string,
}

export const Description: FC<DescriptionProps> = ({ description }) => {
    return (
        <>
            <div className="channelInformation__description">
                <h3>Description</h3>
                <pre>{description}</pre>
            </div>
            <div className="channelInformation__divider" />
        </>
    );
}


