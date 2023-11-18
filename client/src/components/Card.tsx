'use client'

import React from "react";
import card from "../styles/card.module.scss";

export default function Card(
    { children, invert = false, style }:
    { children: React.ReactNode, invert: boolean, style: object }
) {
    return (
        <div className={`${card.card} ${invert ? card.invert : ''}`} style={style}>
            { children }
        </div>
    );
}

Card.defaultProps = {
    style: {}
};