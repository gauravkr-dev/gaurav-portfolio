import React from 'react'
import ProjectsView from './_components/projects-view'

const page = () => {
    return (
        <div className="max-w-4xl mx-auto px-4">
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
            <ProjectsView />
        </div>
    )
}

export default page
