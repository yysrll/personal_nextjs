import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Hero from "./_components/Hero";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="fixed top-0 w-full">
          <TopNav /> 
        </div>
        <Hero />
        <ProjectList />
        <Footer />
      </div>
    </main>
  );
}
