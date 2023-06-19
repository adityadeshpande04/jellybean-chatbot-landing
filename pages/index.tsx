import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Experiences from "@/components/experiences";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="flex flex-col h-full my-bg">
      <div className="flex flex-col justify-center items-center">
        <Navbar />
        <LandingPage />
      </div>
      <Experiences />
      <Footer />
    </div>
  );
}
