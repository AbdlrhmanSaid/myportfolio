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
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React.js", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Redux", icon: SiRedux },
    { name: "React Router", icon: SiReactrouter },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Shadcn", icon: SiCodepen },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Sass", icon: SiSass },
    { name: "EmailJs", icon: SiNodemon },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Mongoose", icon: SiMongodb },
    { name: "Axios", icon: SiAxios },
    { name: "React Query", icon: SiReactquery },
    { name: "Clerk", icon: SiAuth0 },
    { name: "Cloudinary", icon: SiCloudinary },
    { name: "Vite", icon: SiVite },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Figma", icon: SiFigma },
    { name: "Adobe XD", icon: SiAdobexd },
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="text-center">
                  <Badge
                    variant="secondary"
                    className="mb-2 flex  items-center justify-center"
                  >
                    <skill.icon className="w-4 h-4 mr-1 t  dark:text-gray-300" />
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
