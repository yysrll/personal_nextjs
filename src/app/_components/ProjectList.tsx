import ProjectCard from "./ProjectCard"

export default function ProjectList() {
    return (
        <div className="py-12 px-12 md:px-32 lg:px-48 bg-right bg-hero-pattern-full bg-no-repeat">
        <div className="flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold">Recent Projects</h2>
          <p className="text-gray-500 mb-12">Here are some of my projects</p>
        </div>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8">
          {
            projects.map((project, index) => (
                <ProjectCard 
                    key={index}
                    imageSrc={project.image}
                    title={project.title}
                    description={project.description}
                />
            ))
          }
        </div>
      </div>
    )
}

const projects = [
    {
      title: "One Poslog App",
      description: "This mobile application for ultimate all-in-one solution for optimizing your workday at PT Pos Logistics Indonesia. This internal app is designed to streamline your daily tasks, enhance collaboration, and boost productivity like never before.",
      image: "/projects/oneposlog.png",
      link: ""
    },
    {
      title: "Pakarangan App",
      description: "The Pakarangan application is designed to check the availability of glamping sites at the Pakarangan tourist destination.",
      image: "/projects/pakarangan.png",
      link: "https://github.com"
    },
    {
      title: "I-Talk App",
      description: "The I-talk application is used as a learning tool for children to recognize objects or images with modifiable voice features.",
      image: "/projects/I-Talk.png",
      link: "https://github.com"
    }
  ]
  