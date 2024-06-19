import { BiLogoFlutter } from "react-icons/bi";
import { RiStickyNoteLine } from "react-icons/ri";
import {
  SiAndroidstudio,
  SiGithub,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiPhp,
  SiVisualstudiocode,
} from "react-icons/si";

export default function Skill() {
  return (
    <>
      <div className="mt-24">
        <h2 className="text-center text-lg font-bold">
          📚 Language and Framework
        </h2>
        <div className="flex-cols mt-6 flex flex-wrap justify-center gap-4">
          {languanges.map((lan, index) => (
            <div
              key={index}
              className={`rounded-lg bg-white/20 p-6 ${lan.color} backdrop-blur-sm`}
            >
              <div className="text-4xl">{lan.icon}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-center text-lg font-bold">🛠 Tools</h2>
        <div className="flex-cols mt-6 flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`rounded-lg bg-white/20 p-6 ${tool.color} backdrop-blur-sm`}
            >
              <div className="text-4xl">{tool.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const languanges = [
  {
    name: "Flutter",
    icon: <BiLogoFlutter />,
    color: "text-blue-500",
  },
  {
    name: "Kotlin",
    icon: <SiKotlin />,
    color: "text-purple-500",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-500",
  },
  {
    name: "Laravel",
    icon: <SiLaravel />,
    color: "text-red-400",
  },
];

const tools = [
  {
    name: "Visual Studio Code",
    icon: <SiVisualstudiocode />,
    color: "text-blue-600",
  },
  {
    name: "Android Studio",
    icon: <SiAndroidstudio />,
    color: "text-green-400",
  },
  {
    name: "Github",
    icon: <SiGithub />,
    color: "text-white",
  },
];
