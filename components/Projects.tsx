"use client";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import {
  Search,
  Zap,
  Bell,
  CreditCard,
  Hospital,
  Bot,
  University,
  ContactRound,
  Server,
} from "lucide-react";
import { Card, CardWithImage } from "@/components/Card";
import { FloatingIcon } from "@/components/FloatingIcon";
import Image from "next/image";
import Link from "next/link";

const OrbSection = () => {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center z-10">
      <Image
        src="/profile-avatar-child.gif"
        width={100}
        height={100}
        alt="avatar"
        className="w-20 sm:w-40 h-20 sm:h-40 rounded-full object-contain object-top"
        priority
      />
    </div>
  );
};

export default function Projects() {
  return (
    <ReactLenis root>
      {/* bg-[#050508]  */}
      <div
        className="h-full sm:max-h-screen max-w-5/6 mx-auto text-white font-sans flex items-center justify-center my-4 sm:my-32"
        id="projects"
      >
        {/* Main Grid Container */}
        <div className="max-w-full sm:max-w-7xl h-full sm:max-h-screen grid grid-flow-col grid-rows-6 sm:grid-rows-2 grid-cols-1 sm:grid-cols-8 gap-8">
          {/* --- LEFT COLUMN --- */}
          <div className="col-span-4 sm:col-span-2">
            <CardWithImage
              Icon={
                <Zap className="w-8 h-8 text-[#4c1d95] fill-current bg-white rounded-full p-1 opacity-80" />
              }
              projectImage="/pscreenshots/campuslogics-web.png"
              projectTitle="Campuslogics Web"
              projectLink="https://campuslogics-web.vercel.app"
            />
          </div>
          <div className="col-span-4 sm:col-span-2">
            <CardWithImage
              Icon={
                <Bot className="w-8 h-8 text-[#4c1d95] bg-white rounded-full p-1 opacity-80" />
              }
              projectImage="/pscreenshots/ai-assistant.png"
              projectTitle="Virtual Assistant"
              projectLink="https://conversational-bot-aj8yxpnx36jjpywawvjz9p.streamlit.app/"
            />
          </div>

          {/* --- CENTER COLUMN (The Complex Part) --- */}
          <div className="order-first sm:order-0 col-span-4">
            <motion.div
              className="flex-1 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center relative overflow-visible z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-2 text-white/80 mb-6 font-semibold tracking-wide">
                <Server className="w-5 h-5" /> Projects
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-20">
                Projects I worked for
              </h1>
              <div className="absolute inset-0 left-0 top-20">
                <FloatingIcon icon={Search} x="10%" y="70%" delay={0} />
                <FloatingIcon icon={CreditCard} x="40%" y="45%" delay={1} />
                <FloatingIcon icon={Bell} x="80%" y="70%" delay={2} />
              </div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="w-full h-full"
              >
                <motion.div
                  variants={{
                    hidden: { y: 100, scale: 0.9, opacity: 0 },
                    visible: { y: 0, scale: 1, opacity: 1 },
                  }}
                  className="absolute -bottom-2 sm:-bottom-20 left-1/2 rounded-full bg-[#fafafa] -translate-x-1/2 z-20"
                >
                  <OrbSection />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="col-span-4">
            {/* Bottom Split Cards */}
            <div className="h-full w-full flex flex-col sm:flex-row gap-4 sm:gap-12">
              <CardWithImage
                Icon={
                  <Hospital className="w-8 h-8 text-[#4c1d95] bg-white rounded-full p-1 opacity-80" />
                }
                projectImage="/pscreenshots/virtual-techcare.png"
                projectTitle="Tech Care Dashboard"
                projectLink="https://virtual-techcare.netlify.app/"
              />
              <CardWithImage
                Icon={
                  <University className="w-8 h-8 text-[#4c1d95] bg-white rounded-full p-1 opacity-80" />
                }
                projectImage="/pscreenshots/meeting-assistant.png"
                projectTitle="Meeting Tracker"
                projectLink="https://meeting-assistant-v0.vercel.app/"
              />
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="col-span-4 sm:col-span-2 grid grid rows-2 gap-2">
            <Card className="relative overflow-hidden bg-[#fafafa] opacity-95 text-center flex flex-col justify-center items-center">
              <h3 className="text-3xl font-bold text-black">Sales</h3>
              <p className="text-xs text-gray-400 mb-4">Report</p>
              <Link
                href="https://github.com/Raju-Mannem/zomato-analysis/blob/main/zomato-analysis.ipynb"
                className="px-6 py-2 text-black border-1 border-dashed border-black rounded-full text-xs font-semibold hover:scale-110 duration-200"
              >
                View
              </Link>
            </Card>
            <Card className="relative overflow-hidden bg-[#fafafa] opacity-95 text-center flex flex-col justify-center items-center">
              <Image
                  src="/pscreenshots/jkcaiml.png"
                  alt="jkcaiml"
                  fill
                  className="absolute inset-0 object-cover opacity-10"
              />
              <div className="relative z-10 flex flex-col items-center">
                <h3 className="text-3xl font-bold text-black">Shared</h3>
                <p className="text-xs text-gray-500 mb-8">workspace</p>
                <Link
                  href="https://jkcaiml.pythonanywhere.com/"
                  className="px-6 py-2 text-[#6d28d9] bg-[#fafafa] rounded-full text-xs font-semibold hover:scale-110 duration-200"
                >
                  View
               </Link>
            </div>
            <div className="absolute w-full h-1/2 bottom-0 bg-[#6d28d9]" />
            </Card>
          </div>
          <div className="col-span-4 sm:col-span-2">
            <CardWithImage
              Icon={
                <ContactRound className="w-8 h-8 text-[#4c1d95] bg-white rounded-full p-1 opacity-80" />
              }
              projectImage="/pscreenshots/marriagebureau.png"
              projectTitle="Marriagebu Bureau"
              projectLink="https://krishnaveni-marriagebureau.vercel.app/"
            />
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
