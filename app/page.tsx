import ProjectCard from './components/ProjectCard'

const projects = [
    {
        id: 'shoshin',
        name: 'Shoshin',
        description:
            "A project focused on beginner's mind and continuous learning",
        subdomain: 'https://shoshin.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/shoshin',
        color: 'from-blue-500 to-purple-600',
    },
    {
        id: 'elegant-mess',
        name: 'Elegant Mess',
        description: 'Exploring the beauty in chaos and complexity',
        subdomain: 'https://elegant-mess.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/elegant-mess',
        color: 'from-pink-500 to-red-500',
    },
    {
        id: 'moods',
        name: 'Moods',
        description:
            'A creative exploration of emotional states and expressions',
        subdomain: 'https://moods.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/moods',
        color: 'from-yellow-400 to-orange-500',
    },
    {
        id: 'memory',
        name: 'Memory',
        description: 'Digital memory management and reflection tools',
        subdomain: 'https://memory.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/memory',
        color: 'from-green-400 to-teal-500',
    },
    {
        id: 'bokendokei',
        name: 'Bōkendokei',
        description: 'A unique project exploring time and space concepts',
        subdomain: 'https://bokendokei.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/bokendokei',
        color: 'from-indigo-500 to-blue-600',
    },
    {
        id: 'november',
        name: 'November',
        description: 'Creative work inspired by autumn and reflection',
        subdomain: 'https://november.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/November',
        color: 'from-amber-600 to-orange-700',
    },
    {
        id: 'lrnr',
        name: 'Lrnr',
        description: 'Learning platform and educational tools',
        subdomain: 'https://lrnr.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/Lrnr',
        color: 'from-emerald-500 to-green-600',
    },
    {
        id: 'zen',
        name: 'Zen',
        description: 'A meditation timer and mindfulness app (In progress...)',
        subdomain: 'https://zen.lovelyvector.com',
        github: 'https://github.com/alexguerra-dev/zen',
        color: 'from-slate-600 to-gray-700',
    },
]

export default function Home() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-fade-in-up">
                            lovelyVector
                        </h1>
                        <p
                            className="mt-6 text-xl text-gray-300 sm:text-2xl animate-fade-in-up"
                            style={{ animationDelay: '0.2s' }}
                        >
                            Exploring the intersection of creativity,
                            technology, and human experience
                        </p>
                        <p
                            className="mt-4 text-lg text-gray-400 animate-fade-in-up"
                            style={{ animationDelay: '0.4s' }}
                        >
                            A collection of projects that reflect my journey in
                            development and design
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl animate-slide-in-left">
                            Featured Projects
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 animate-slide-in-right">
                            Each project represents a unique exploration of
                            ideas and technologies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${0.1 * index}s` }}
                            >
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">
                        © 2024 lovelyVector. Built with Next.js and Tailwind
                        CSS.
                    </p>
                </div>
            </footer>
        </div>
    )
}
