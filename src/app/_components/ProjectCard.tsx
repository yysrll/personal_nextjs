import Image from "next/image";
import Label from "../../../components/Label";
import { TiChartLine } from "react-icons/ti";

/**
 * @param {{ imageSrc: string, title: string, description: string }} props
 */

interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
}

export default function ProjectCard({ imageSrc, title, description }: ProjectCardProps) {
    return (
        <div className="p-4 rounded-lg backdrop-blur-sm bg-white/20 cursor-pointer">
            <div className="w-full aspect-video relative">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div className="p-6">
                <h2 className="text-md md:text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-sm text-gray-400 leading-6 line-clamp-3 text-ellipsis overflow-hidden">{description}</p>
            </div>
        </div>
    );
}

const labels = [
    {
        "name": "Laravel"
    },
    {
        "name": "React"
    },
    {
        "name": "Tailwind"
    }
]