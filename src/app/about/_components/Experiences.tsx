import Image from "next/image";

export default function Experiences() {
  return (
    <div className="mt-24">
      <h2 className="text-center text-lg font-bold text-black dark:text-white">
        👨‍💻 Experiences
      </h2>
      {experiences.map((experience, index) => (
        <div key={index} className="mt-10">
          <ExperiencesItem {...experience} />
        </div>
      ))}
    </div>
  );
}

interface ExperiencesItemProps {
  company: string;
  companyLogo: string;
  location: string;
  role: string;
  duration: string;
  description: string;
}

function ExperiencesItem({
  company,
  companyLogo,
  location,
  role,
  duration,
  description,
}: ExperiencesItemProps) {
  return (
    <div className="flex">
      <div>
        <div className="rounded-2xl bg-gray-500/20 p-4 backdrop-blur-2xl dark:bg-white/20">
          <div className="rounded-lg bg-white p-4">
            <div className="relative h-16 w-16">
              <Image
                src={companyLogo}
                alt={`${company} Logo`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-4">
        <h2 className="font-bold text-black dark:text-white">{role}</h2>
        <h3 className="text-gray-700 dark:text-gray-300">{company}</h3>
        <p className="text-gray-400 dark:text-gray-500">{location}</p>
        <p className="text-gray-400 dark:text-gray-500">{duration}</p>
        <p className="mt-2 text-sm text-gray-400 dark:text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

const experiences = [
  {
    company: "PT Pos Logistik Indonesia",
    companyLogo: "/companies/poslog.webp",
    location: "Jakarta, Indonesia",
    role: "Software Engineer - Mobile",
    duration: "May 2023 - Present",
    description:
      "Developed the OnePoslog mobile application (Android and iOS) using Flutter, enabling hundreds of employees to perform various tasks such as HRM, CRM, OMS, TMS, and others.",
  },
  {
    company: "Dicoding Indonesia",
    companyLogo: "/companies/dicoding.jpeg",
    location: "Remote, Indonesia",
    role: "Mobile Development Mentor",
    duration: "Sep 2022 - Des 2022",
    description:
      "Monitored student progress and performance within the Kampus Merdeka program, ensuring adherence to program requirements and objectives",
  },
  {
    company: "Bangkit Academy",
    companyLogo: "/companies/bangkit.jpeg",
    location: "Remote, Indonesia",
    role: "Mobile Development Facilitator",
    duration: "Feb 2022 - Jul 2022",
    description:
      "Guided cohort participants to successfully complete their courses, fostering a supportive learning environment.",
  },
  {
    company: "PT Upana Pelopor Aplikasi Adikarya",
    companyLogo: "/companies/upana.png",
    location: "Makassar, Indonesia",
    role: "Mobile Development Intern",
    duration: "Aug 2021 - Okt 2021",
    description: "Contributed to two projects using Flutter with Upana's team.",
  },
  {
    company: "PT PLN UIW Sulselrabar",
    companyLogo: "/companies/pln.png",
    location: "Makassar, Indonesia",
    role: "Web Development Intern",
    duration: "Oct 2020 - Feb 2021",
    description: "Develop Employee Complaint Web and API for mobile app",
  },
];
