import Footer from "../../components/Footer";
import TopNav from "../../components/TopNav";
import Hero from "./_components/Hero";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <main>
      <div className="">
        <Hero />
        <ProjectList />
        <TopNav />
        <Footer />
      </div>
    </main>
  );
}
