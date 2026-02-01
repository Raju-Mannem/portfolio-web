import { motion } from "framer-motion";

export const FloatingIcon = ({ icon: Icon, delay = 0, x = 0, y = 0 }: any) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut",
    }}
    className="absolute p-3 rounded-2xl bg-white opacity-80 border border-[#4c1d95] shadow-xl backdrop-blur-sm"
    style={{ left: x, top: y }}
  >
    <Icon className="w-5 h-5 text-[#4c1d95]" />
  </motion.div>
);
