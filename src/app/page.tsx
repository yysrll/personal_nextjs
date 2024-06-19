import Hero from "./_components/Hero";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <main>
      <div className="bg-hero-pattern bg-top bg-no-repeat">
        <div className="bg-hero-pattern-full bg-right bg-no-repeat">
          <Hero />
          <ProjectList />
        </div>
      </div>
    </main>
  );
}
