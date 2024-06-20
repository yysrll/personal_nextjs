import ProjectCard from "./ProjectCard";

interface ProjectProps {
  image: string;
  title: string;
  description: string;
}

interface ProjectListProps {
  projects: ProjectProps[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <>
      <div className="mt-12 flex flex-col items-center md:mt-16">
        <h2 className="text-xl font-bold text-black dark:text-white md:text-2xl">
          👨‍💻 Recent Projects
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          Here are some of my projects
        </p>
      </div>
      <div className="grid-col-1 grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </>
  );
}
