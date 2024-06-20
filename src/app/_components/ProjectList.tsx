import projects from "../../../data/ProjectData";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="px-12 py-12 md:px-32 lg:px-48">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold text-black md:text-2xl dark:text-white">
          👨‍💻 Recent Projects
        </h2>
        <p className="mb-12 text-gray-600 dark:text-gray-400">Here are some of my projects</p>
      </div>
      <div className="grid-col-1 grid gap-12 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.image}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

