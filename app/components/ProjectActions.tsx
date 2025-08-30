'use client'

interface ProjectActionsProps {
    subdomain: string
    github: string
}

export default function ProjectActions({
    subdomain,
    github,
}: ProjectActionsProps) {
    const handleLiveClick = () => {
        window.open(subdomain, '_blank', 'noopener,noreferrer')
    }

    const handleCodeClick = () => {
        window.open(github, '_blank', 'noopener,noreferrer')
    }

    return (
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
    )
}
