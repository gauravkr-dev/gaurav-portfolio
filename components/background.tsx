import React from 'react'

const Background = () => {
    return (
        <div
            className="fixed inset-0 -z-10 h-screen"
            style={{
                WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)',
                backgroundImage: 'radial-gradient(circle at 0.5px 0.5px, var(--primary) 0.5px, transparent 0)',
                backgroundSize: '48px 48px',
                maskImage: 'radial-gradient(ellipse 90% 90% at 50% 50%, black 50%, transparent 80%)',
                opacity: 0.4,
                pointerEvents: 'none'
            }}
            aria-hidden="true"
            role="presentation"
        />
    )
}

export default Background
