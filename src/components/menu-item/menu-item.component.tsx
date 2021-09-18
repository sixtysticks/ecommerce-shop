import React from "react";

import "./menu-item.styles.scss";

interface Props {
    title: string;
    imageUrl: string;
    size: string | undefined;
}

const MenuItem = ({ title, imageUrl, size }: Props) => {
    return (
        <div
            className={`${size} menu-item`}
            style={{
                backgroundImage: `url(${imageUrl})`,
            }}
        >
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
