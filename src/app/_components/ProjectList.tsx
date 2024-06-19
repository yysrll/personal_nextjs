import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  return (
    <div className="bg-hero-pattern-full bg-right bg-no-repeat px-12 py-12 md:px-32 lg:px-48">
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold md:text-2xl">👨‍💻 Recent Projects</h2>
        <p className="mb-12 text-gray-500">Here are some of my projects</p>
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

const projects = [
  {
    title: "One Poslog App",
    description:
      "This mobile application for ultimate all-in-one solution for optimizing your workday at PT Pos Logistics Indonesia. This internal app is designed to streamline your daily tasks, enhance collaboration, and boost productivity like never before.",
    image: "/projects/oneposlog.png",
    link: "",
  },
  {
    title: "Pakarangan App",
    description:
      "The Pakarangan application is designed to check the availability of glamping sites at the Pakarangan tourist destination.",
    image: "/projects/pakarangan.png",
    link: "https://github.com",
  },
  {
    title: "I-Talk App",
    description:
      "The I-talk application is used as a learning tool for children to recognize objects or images with modifiable voice features.",
    image: "/projects/I-Talk.png",
    link: "https://github.com",
  },
];
