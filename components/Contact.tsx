"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "Email",
    icon: <Mail size={20} />,
    link: "mailto:rajumannem71@gmail.com",
    label: "rajumannem71@gmail.com",
    color: "hover:text-red-500",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    link: "https://www.linkedin.com/in/raju-mannem-604689240/",
    label: "in/raju-mannem-604689240",
    color: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    icon: <Github size={20} />,
    link: "https://github.com/Raju-Mannem",
    label: "github.com/Raju-Mannem",
    color: "hover:text-gray-900",
  },
  {
    name: "Twitter",
    icon: <Twitter size={20} />,
    link: "https://x.com/devloper_raju",
    label: "@devloper_raju",
    color: "hover:text-sky-500",
  },
];

export default function Contact() {
  return (
    <section className="w-full py-24 border-t border-blue-800/20" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            That's it, Let's keep things simple
          </h2>
          <p className="text-gray-500 mb-12 max-w-md mx-auto">
            I'm happy to extend our discussion on below platforms <br/>
            see you there.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group flex items-center justify-between p-4 rounded-xl border border-dashed border-black/20 bg-gray-50 transition-all ${social.color}`}
            >
              <div className="flex items-center gap-4">
                <span className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  {social.icon}
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    {social.name}
                  </p>
                  <p className="text-sm font-medium text-gray-700 truncate max-w-[150px] lg:max-w-none">
                    {social.label}
                  </p>
                </div>
              </div>
              <ExternalLink
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
