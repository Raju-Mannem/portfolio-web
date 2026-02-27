import EducationFlow from "@/components/Education";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-[#7c3aed]/10 from-0% via-[#fafafa] via-80% to-[#7c3aed]/80 to-100% flex flex-col items-center justify-center border-x  border-blue-800/20">
      <Hero />
      <Projects />
      <Experience />
      <EducationFlow />
      <Contact />
    </main>
  );
}
