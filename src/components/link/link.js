import React from "react";
import './link.css';

const Link = ({url, alt, src}) => {
    return (
        <a
            target={'_blank'}
            href={url}
        >
            <img src={src} alt={alt}/></a>
    )
}

export default Link;