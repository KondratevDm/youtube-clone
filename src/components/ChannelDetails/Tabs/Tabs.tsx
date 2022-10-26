import React, { FC, useState } from 'react';
import { Box } from '@mui/material';

import { TabPanel } from './TabPanel/TabPanel';
import { StyledTab } from './StyledTab/StyledTab';
import { StyledTabs } from './StyledTabs/StyledTabs';
import { ChannelInformation } from './ChannelInformation/ChannelInformation';
import { ChannelVideos } from './ChannelVideos/ChannelVideos';

interface TabsProps {
    description: string,
    country: string,
    publishedAt: Date,
    statistics: {
        hiddenSubscriberCount: boolean,
        subscriberCount: string,
        videoCount: string,
        viewCount: string,
    },
    channelId: string,
}

export const Tabs: FC<TabsProps> = ({ description, country, publishedAt, statistics, channelId }) => {

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ marginTop: "20px" }}>
            <Box sx={{ bgcolor: "#181818" }}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs"
                >
                    <StyledTab label="Videos" />
                    <StyledTab label="About a channel" />
                </StyledTabs>
            </Box>

            <TabPanel value={value} index={0}>
                <ChannelVideos channelId={channelId} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ChannelInformation
                    description={description}
                    country={country}
                    publishedAt={publishedAt}
                    statistics={statistics}
                />
            </TabPanel>
        </Box>
    );
}


