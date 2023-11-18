'use client'

import React from "react";
import '../styles/card.module.scss';

export default function Card({ children, invert }: { children: React.ReactNode, invert: boolean }) {
    return (
        <div className={`card${invert ? ' invert' : ''}`}>
            { children }
        </div>
    );
}