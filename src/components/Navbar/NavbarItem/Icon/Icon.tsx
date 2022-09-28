import React, { FC } from 'react';

interface IconProps {
    text: string,
    image: string[],
    isShowMoreItem: boolean,
    isHiddenTabsShow: boolean
}

export const Icon: FC<IconProps> = ({ image, text, isShowMoreItem, isHiddenTabsShow }) => {

    if (isShowMoreItem) {
        if (isHiddenTabsShow) {
            return (
                <img src={image[0]} alt={text} />
            )
        }
        return (
            <img src={image[1]} alt={text} />
        )
    }
    return (
        <img src={image[0]} alt={text} />
    )
}