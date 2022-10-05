import React, { FC } from 'react';
import { IconProps, ReactIconsFunction } from '@/types'


export const Icon: FC<IconProps> = ({ image, isShowMoreItem, isHiddenTabsShow }) => {

    if (isShowMoreItem) {
        if (isHiddenTabsShow) {
            return (
                <Image image={image[0]} />
            )
        }
        return (
            <Image image={image[1]} />
        )
    }
    return (
        <Image image={image[0]} />
    )
}


interface ImageProps {
    image: ReactIconsFunction
}

const Image: FC<ImageProps> = ({ image }) => {
    return image({ color: 'white', size: 24 })
}