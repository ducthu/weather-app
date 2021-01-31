import React, { ImgHTMLAttributes } from 'react';
import { Img } from './styles';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    icon: string;
    height?: string;
    width?: string;
}

const Image: React.FC<ImageProps> = ({ icon, height = "auto", width = "auto", ...rest }) => {
    return (
        <Img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} height={height} width={width} />
    );
}

export { Image };