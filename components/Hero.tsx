"use client";

import { motion } from "framer-motion";
import { SearchCheck } from "lucide-react";

export default function Hero() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    {
      name: "Resume",
      href: "https://docs.google.com/document/d/14_x6RFBeG61YPSQnLNqmuNM6-eEyacky/edit?usp=drive_link&ouid=107951129430065629223&rtpof=true&sd=true",
    },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <section
      className="relative w-full min-h-screen overflow-hidden border-b border-blue-800/20"
      id="home"
    >
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-20 w-12 h-12 bg-[#4c1d95] rounded-xl"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-32 right-60 am:right-24 w-10 h-10 bg-[#4c1d95] rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 py-12 sm:py-32 relative z-10">
        <div className="max-w-5xl mt-12 mx-auto text-center text-[#4c1d95]">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            May be the,
            <br />
            Developer you need
          </motion.h1>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto w-full sm:max-w-4/6 flex justify-center gap-2 sm:gap-8 mt-12 py-4 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] backdrop-blur-lg rounded-full"
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="cursor-pointer rounded-full hover:scale-110 transition-all duration-200 text-[8px] sm:text-lg font-bold text-background-50"
              >
                {item.name}
              </a>
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-surface-100/70 max-w-2xl mx-auto"
          >
            Shoot me a mail if you'd like to see me work on.
            <br />
            Let's sort it out!
          </motion.p>
          <div className="-z-10 absolute right-4 sm:right-10 top-120 sm:top-4 sm:top-30 perspective-[500px]">
            {/* CTA Pills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              style={{
                transformStyle: "preserve-3d",
                rotateY: -25,
                rotateX: -15,
                rotateZ: -5,
              }}
              className="flex flex-col justify-center items-start gap-2 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] backdrop-blur-md rounded-lg py-4 shadow-2xl shadow-[#4c1d95]"
            >
              {[
                "Web Development",
                "Agentic Apps",
                "Cloud Deployment",
                "Workflow Orchestration",
              ].map((item) => (
                <div
                  key={item}
                  className="px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm flex gap-2 items-center text-background-50"
                >
                  <SearchCheck className="w-4 h-4 text-surface-100/80 text-white" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
