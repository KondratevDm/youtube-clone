import React, { FC } from 'react';

import { IconProps } from '@/types'


export const Icon: FC<IconProps> = ({ image, isShowMoreItem, isHiddenTabsShow }) => {

    if (isShowMoreItem) {
        if (isHiddenTabsShow) {
            return (
                <img src={image[0]} />
            )
        }
        return (
            <img src={image[1]} />
        )
    }
    return (
        <img src={image[0]} />
    )
}