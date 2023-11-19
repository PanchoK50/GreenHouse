'use client'

import React from "react";
import card from "../styles/card.module.scss";

export default function Card(
    { children, invert = false, style = {} }:
    { children: React.ReactNode, invert: boolean, style: object }
) {
    return (
        <div style={{ position: "relative", overflow: "hidden" }}>
            <div data-delay="20s" className={`${card.card} ${invert ? card.invert : ''} slide-in`} style={style}>
                { children }
            </div>
        </div>
    );
}

Card.defaultProps = {
    invert: false,
    style: {}
}