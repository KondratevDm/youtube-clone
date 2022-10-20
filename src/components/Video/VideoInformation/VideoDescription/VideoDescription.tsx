import React, { FC, useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

interface VideoDescriptionProps {
    description: string
}

export const VideoDescription: FC<VideoDescriptionProps> = ({ description }) => {
    const [showDescription, setShowDescription] = useState(false)
    return (
        <div className="video__info__content-details__description">
            <Accordion sx={{ background: "#181818", color: "white", boxShadow: '0' }}>
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ width: "200px", height: "10px", padding: '0', opacity: '0.3' }}
                    onClick={() => {
                        setShowDescription(!showDescription)
                    }}
                >
                    <p>{showDescription ? 'Unshow' : 'Show'} description</p>
                </AccordionSummary>
                <AccordionDetails sx={{}}>
                    <pre>{description}</pre>
                </AccordionDetails>
            </Accordion>
        </div>

    )
};