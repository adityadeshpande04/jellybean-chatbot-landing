import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Navbar from "@/components/Navbar"
import LandingPage from "@/components/LandingPage"
export default function Home() {
  return (

    <div className="myclass">
    <Navbar />
    <LandingPage />
    </div>
  );
}
