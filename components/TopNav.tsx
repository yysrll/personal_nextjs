'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function TopNav() {
    const path = usePathname()

    return (
        <div className="fixed top-0 px-6 md:px-32 lg:px-48 py-8 w-full flex flex-row justify-between backdrop-blur-lg bg-white/10">
            <div className="w-6 h-6 md:w-8 md:h-8 relative">
                <Image
                    src="/icon-white.svg"
                    alt="Icon"
                    fill
                />
            </div>
            <div className="text-white">
                {
                    navigations.map ((nav, index) => (
                        <Link
                            className={`ms-4 md:ms-6 lg:ms-16 text-sm md:text-md lg:text-lg ${path === nav.link ? 'font-bold text-blue-500' : ''}`}
                            key={index}
                            href={nav.link}
                        >
                            {nav.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

const navigations = [
    {
        'name': 'Home',
        'link': '/',
    },
    {
        'name': 'About',
        'link': '#',
    },
    {
        'name': 'Project',
        'link': '#',
    },
    {
        'name': 'Contact',
        'link': '#',
    }
]