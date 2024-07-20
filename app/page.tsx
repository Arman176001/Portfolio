
import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/components/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-5 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Approach />
      <Footer />
      </div>
    </main>
    );
}
