'use client'

import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className={ "container" }>
            { children }
        </div>
    );
}