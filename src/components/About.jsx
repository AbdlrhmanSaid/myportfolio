import { Badge } from "@/components/ui/badge";

export default function About() {
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
              {["HTML/CSS", "JavaScript", "React.js", "Next.js"].map(
                (skill) => (
                  <div key={skill} className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      {skill}
                    </Badge>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
