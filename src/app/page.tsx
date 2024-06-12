import Hero from "./_components/Hero";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ProjectList />
      {/* <div className="mt-12">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl font-bold">Projects</h2>
          <p className="text-gray-300 mb-12">Here are some of my projects</p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-3 gap-12">
          {
            projects.map((project, index) => (
              <ProjectCard key={index}/>
            ))
          }
        </div>
      </div> */}
    </main>
  );
}
