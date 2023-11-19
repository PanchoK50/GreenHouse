'use client'

import React from "react";
import card from "../styles/card.module.scss";

export default function Card(
    { children, invert = false, style = {} }:
    { children: React.ReactNode, invert: boolean, style: object }
) {
    return (
        <div data-delay="20s" className={`${card.card} ${invert ? card.invert : ''} slide-in`} style={style}>
            { children }
        </div>
    );
}

Card.defaultProps = {
    invert: false,
    style: {}
}