'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'

const projects = [
    {
        id: 'shoshin',
        name: 'Shoshin',
        description:
            "A project focused on beginner's mind and continuous learning",
        longDescription:
            "Shoshin represents the concept of maintaining a beginner's mind - an attitude of openness, eagerness, and lack of preconceptions when studying a subject, even when studying at an advanced level. This project explores how we can apply this philosophy to learning and development.",
        subdomain: 'https://shoshin.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/shoshin',
        color: 'from-blue-500 to-purple-600',
        tags: ['Learning', 'Mindfulness', 'Development'],
    },
    {
        id: 'elegant-mess',
        name: 'Elegant Mess',
        description: 'Exploring the beauty in chaos and complexity',
        longDescription:
            'Sometimes the most beautiful solutions emerge from what appears to be chaos. Elegant Mess explores the intersection of order and disorder, finding patterns in complexity, and creating beauty from apparent randomness.',
        subdomain: 'https://elegant-mess.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/elegant-mess',
        color: 'from-pink-500 to-red-500',
        tags: ['Art', 'Complexity', 'Patterns'],
    },
    {
        id: 'moods',
        name: 'Moods',
        description:
            'A creative exploration of emotional states and expressions',
        longDescription:
            "Moods is an artistic exploration of human emotions and how they can be expressed through digital mediums. It's about capturing the ephemeral nature of feelings and translating them into visual and interactive experiences.",
        subdomain: 'https://moods.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/moods',
        color: 'from-yellow-400 to-orange-500',
        tags: ['Emotions', 'Art', 'Interactive'],
    },
    {
        id: 'memory',
        name: 'Memory',
        description: 'Digital memory management and reflection tools',
        longDescription:
            "Memory is a digital tool for capturing, organizing, and reflecting on our thoughts and experiences. It's about creating a personal digital archive that helps us learn from the past and plan for the future.",
        subdomain: 'https://memory.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/memory',
        color: 'from-green-400 to-teal-500',
        tags: ['Productivity', 'Reflection', 'Organization'],
    },
    {
        id: 'bokendokei',
        name: 'Bōkendokei',
        description: 'A unique project exploring time and space concepts',
        longDescription:
            "Bōkendokei delves into the philosophical and practical aspects of time and space. It's an exploration of how we perceive, measure, and interact with these fundamental dimensions of our existence.",
        subdomain: 'https://bokendokei.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/bokendokei',
        color: 'from-indigo-500 to-blue-600',
        tags: ['Time', 'Space', 'Philosophy'],
    },
    {
        id: 'november',
        name: 'November',
        description: 'Creative work inspired by autumn and reflection',
        longDescription:
            'November captures the essence of autumn - a time of reflection, change, and preparation. This project explores themes of transition, nostalgia, and the beauty found in endings and new beginnings.',
        subdomain: 'https://november.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/November',
        color: 'from-amber-600 to-orange-700',
        tags: ['Autumn', 'Reflection', 'Transition'],
    },
    {
        id: 'lrnr',
        name: 'Lrnr',
        description: 'Learning platform and educational tools',
        longDescription:
            'Lrnr is a comprehensive learning platform designed to make education more accessible, engaging, and effective. It combines modern technology with proven learning methodologies to create an optimal learning experience.',
        subdomain: 'https://lrnr.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/Lrnr',
        color: 'from-emerald-500 to-green-600',
        tags: ['Education', 'Learning', 'Platform'],
    },
    {
        id: 'zen',
        name: 'Zen',
        description: 'A meditation timer and mindfulness app (In progress...)',
        longDescription:
            'Zen is a meditation and mindfulness application designed to help users develop a regular practice. It features customizable timers, guided sessions, and progress tracking to support the journey toward inner peace and mindfulness.',
        subdomain: 'https://zen.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/zen',
        color: 'from-slate-600 to-gray-700',
        tags: ['Meditation', 'Mindfulness', 'Wellness'],
    },
]

interface ProjectPageProps {
    params: {
        id: string
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const id = await params.id
    const project = projects.find((p) => p.id === id)

    if (!project) {
        notFound()
    }

    const handleLiveClick = () => {
        window.open(project.subdomain, '_blank', 'noopener,noreferrer')
    }

    const handleCodeClick = () => {
        window.open(project.github, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/"
                            className="text-gray-900 hover:text-gray-700 font-medium transition-colors duration-200"
                        >
                            ← Back to Portfolio
                        </Link>
                    </div>
                </div>
            </header>

            {/* Project Content */}
            <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
                {/* Project Header */}
                <div className="text-center mb-12">
                    <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${project.color} text-white text-2xl font-bold mb-6`}
                    >
                        {project.name.charAt(0)}
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {project.name}
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {project.description}
                    </p>
                </div>

                {/* Project Details */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        About This Project
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        {project.longDescription}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleLiveClick}
                        className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 transform shadow-lg cursor-pointer"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.586 4.586a2 2 0 112.828 2.828L11.828 10H14a2 2 0 110 4h-4a2 2 0 01-2-2v-2.172l-2.586 2.586a2 2 0 11-2.828-2.828L8.172 8H6a2 2 0 100-4h4a2 2 0 012 2v2.172l2.586-2.586z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Visit Live Site
                    </button>

                    <button
                        onClick={handleCodeClick}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-white text-lg font-medium rounded-lg transition-all duration-300 hover:bg-gray-900 hover:scale-105 transform shadow-lg cursor-pointer"
                    >
                        <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        View Source Code
                    </button>
                </div>
            </main>
        </div>
    )
}
