import { motion } from "framer-motion";
import Link from "next/link";

export const Card = ({
  children,
  className = "",
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className="w-full h-full"
    >
      <motion.div
        variants={{
          hidden: { y: 100, scale: 0.9, opacity: 0 },
          visible: { y: 0, scale: 1, opacity: 1 },
        }}
        whileHover={{ scale: 1.01 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.8,
        }}
        className={`relative overflow-hidden rounded-[2rem] bg-[#1a1a24] dark:bg-[#0f0f16] border border-white/5 shadow-2xl ${
          noPadding ? "" : "p-12 sm:p-6"
        } ${className}`}
      >
        {/* Subtle Gradient Noise Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-500" />
        {children}
      </motion.div>
    </motion.div>
  );
};
export const CardWithImage = ({
  Icon,
  projectImage,
  projectTitle = "project title",
  projectLink = "/",
}: {
  Icon?: React.ReactNode;
  projectImage?: string;
  projectTitle?: string;
  projectLink?: string;
}) => {
  return (
    <Card className="h-80 sm:h-full w-full bg-transparent px-0 py-0 group overflow-hidden">
      <img
        src={projectImage}
        alt={projectTitle}
        className="w-full h-full rounded-lg object-contain object-top"
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] opacity-95 backdrop-blur-md p-4">
        <div className="mb-2">{Icon}</div>
        <h2 className="text-3xl font-medium leading-tight mb-2 text-[#fafafa]">
          {projectTitle}
        </h2>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#fafafa]/90 
                  flex items-center justify-center 
                  backdrop-blur-md 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-700 ease-in-out"
      >
        <Link
          href={projectLink}
          className="text-2xl font-bold text-white bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] px-8 py-2 rounded-full shadow-xl
                 transform translate-y-10 opacity-0
                 group-hover:translate-y-0 group-hover:opacity-100
                 transition-all duration-700 delay-100 ease-out"
        >
          view
        </Link>
      </div>
    </Card>
  );
};
