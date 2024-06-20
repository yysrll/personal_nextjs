import projects from "../../../data/ProjectData";
import ProjectList from "../_components/ProjectList";

export default function Page() {
  return (
    <div className="bg-hero-pattern-top bg-no-repeat">
      <div className="bg-hero-pattern-full bg-center bg-no-repeat">
        <div className="flex flex-col items-center px-12 pt-32 md:px-32 lg:px-48">
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
}
