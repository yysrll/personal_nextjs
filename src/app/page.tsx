import ButtonTransparent from "../../components/ButtonTransparent";
import projects from "../../data/ProjectData";
import Hero from "./_components/Hero";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <main>
      <div className="bg-hero-pattern bg-top bg-no-repeat">
        <div className="flex flex-col items-center justify-center bg-hero-pattern-full bg-right bg-no-repeat">
          <Hero />
          <ProjectList projects={projects.slice(0, 3)} />
          <ButtonTransparent href="/project">Load More..</ButtonTransparent>
        </div>
      </div>
    </main>
  );
}
