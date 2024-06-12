import { PiBriefcaseDuotone, PiHouse, PiHouseDuotone, PiPhoneCallDuotone, PiUserDuotone } from "react-icons/pi";

export default function BottomNav() {
    return (
        <nav className="fixed bottom-0 w-full backdrop-blur-lg bg-white/20">
        <div className="flex">
            {
                navigations.map ((nav, index) => (
                    <a
                        className="text-white"
                        key={index}
                        href={nav.link}
                    >
                        {nav.icon}
                            <div className="text-xs">
                        {nav.name}
                        </div>
                    </a>
                ))
            }
        </div>
      </nav>
    )
}

const navIconClass = 'h-12 w-12 text-orange-500'
const navigations = [
    {
        'name': 'Home',
        'link': '/',
        'icon': <PiHouseDuotone className={navIconClass} />
    },
    {
        'name': 'About',
        'link': '/about',
        'icon': <PiUserDuotone className={navIconClass} />
    },
    {
        'name': 'Project',
        'link': '/project',
        'icon': <PiBriefcaseDuotone className={navIconClass} />
    },
    {
        'name': 'Contact',
        'link': '/contact',
        'icon': <PiPhoneCallDuotone className={navIconClass} />
    }
]