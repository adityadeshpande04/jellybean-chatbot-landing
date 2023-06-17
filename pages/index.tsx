import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Experiences from "@/components/experiences";
export default function Home() {
  return (
    <div className="flex flex-col h-full my-bg">
      <Navbar />
      <LandingPage />
      <Experiences />
    </div>
  );
}
