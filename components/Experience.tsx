"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    type: "Full-Time",
    company: "Zeus Systems Inc",
    role: "Full Stack Software Developer",
    period: "Jan 2024 - Present",
    skills: [
      "HTMl5",
      "CSS3",
      "Javascript",
      "TypeScript",
      "React",
      "Nextjs",
      "Tailwind",
      "Motion",
      "Nodejs",
      "Express",
      "Python",
      "Flask",
      "PostgreSQL",
      "MongoDB",
      "Graphql",
      "AWS App Runner",
      "EC2",
      "ECS",
      "Lambda",
      "S3",
      "IAM",
      "CloudWatch",
      "Vercel",
      "Firebase",
      "Terraform",
      "Docker",
      "Linux",
      "Git",
      "Github",
      "Github Actions",
      "Chartjs",
      "Jira",
      "UML",
      "Visio",
      "Figma",
      "Canva",
    ],
  },
  {
    type: "Internship",
    company: "Red Carpet Animation Visual FX",
    role: "Machine Learning Intern",
    period: "May 2023 - Aug 2023",
    skills: ["Python", "Numpy", "Pandas", "Matplotlib", "Scikit-learn", "SQL"],
  },
];

export default function Experience() {
  return (
    <section
      className="w-full py-24 text-black border-y border-blue-800/20"
      id="experience"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">Experience</h2>

        <div className="relative border-l-2 border-gray-100 ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0 pl-8"
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-[#7c3aed]" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-[#7c3aed] font-medium">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end">
                  <span className="text-sm font-mono text-gray-500">
                    {exp.period}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded border border-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
