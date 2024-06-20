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

export default function ProjectCard({
  imageSrc,
  title,
  description,
}: ProjectCardProps) {
  return (
    <div className="cursor-pointer rounded-lg bg-gray-500/10 p-4 backdrop-blur-sm transition hover:scale-110 hover:bg-gray-500/30 dark:bg-white/20 dark:hover:bg-white/30">
      <div className="relative aspect-video w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="p-6">
        <h2 className="text-md font-semibold text-black dark:text-white md:text-xl">
          {title}
        </h2>
        <p className="mt-2 line-clamp-3 overflow-hidden text-ellipsis text-sm leading-6 text-gray-500 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}
