import Link from 'next/link'
import { notFound } from 'next/navigation'
import ProjectActions from '../../components/ProjectActions'

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
                <ProjectActions
                    subdomain={project.subdomain}
                    github={project.github}
                />
            </main>
        </div>
    )
}
