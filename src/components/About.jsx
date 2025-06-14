import { Badge } from "@/components/ui/badge";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactrouter,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiMongodb,
  SiAxios,
  SiReactquery,
  SiCloudinary,
  SiVite,
  SiGit,
  SiGithub,
  SiFigma,
  SiAdobexd,
  SiCodepen,
  SiAuth0,
  SiNodemon,
} from "react-icons/si";

export default function About() {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS", icon: SiCss3, color: "text-blue-600" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-700" },
    { name: "React.js", icon: SiReact, color: "text-cyan-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "Redux", icon: SiRedux, color: "text-purple-600" },
    { name: "React Router", icon: SiReactrouter, color: "text-red-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
    { name: "Shadcn", icon: SiCodepen, color: "text-black dark:text-white" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-700" },
    { name: "Sass", icon: SiSass, color: "text-pink-500" },
    { name: "EmailJs", icon: SiNodemon, color: "text-green-600" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "Mongoose", icon: SiMongodb, color: "text-green-500" },
    { name: "Axios", icon: SiAxios, color: "text-purple-500" },
    { name: "React Query", icon: SiReactquery, color: "text-red-500" },
    { name: "Clerk", icon: SiAuth0, color: "text-blue-800" },
    { name: "Cloudinary", icon: SiCloudinary, color: "text-blue-500" },
    { name: "Vite", icon: SiVite, color: "text-purple-400" },
    { name: "Git", icon: SiGit, color: "text-orange-500" },
    { name: "GitHub", icon: SiGithub, color: "text-black dark:text-white" },
    { name: "Figma", icon: SiFigma, color: "text-pink-600" },
    { name: "Adobe XD", icon: SiAdobexd, color: "text-pink-700" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Abdelrhman Saeid is a passionate Front-End Developer with 4+ years
              of experience in modern web technologies including HTML, CSS,
              JavaScript, React.js, and Next.js.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <Badge
                    variant="secondary"
                    className="mb-2 flex items-center justify-center px-4 py-2 text-sm font-medium transition-transform transform hover:scale-105"
                  >
                    <skill.icon className={`w-6 h-6 mr-2 ${skill.color}`} />
                    <p>{skill.name}</p>
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
