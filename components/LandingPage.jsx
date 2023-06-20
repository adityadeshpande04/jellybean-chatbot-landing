import Image from "next/image";
import Whatsapplogo from "/public/whatsapp.png";
export default function LandingPage() {
  return (
    <section className="relative h-screen text-white">
      <div className=" container flex flex-col gap-12 justify-center items-center  md:pt-20">

        

        <p className=" text-center font-black text-5xl md:text-6xl pt-20 md:pt-20 z-10 ">

          Discover and Book Curated <br></br>Team Experiences on Whatsapp
        </p>
        <p className=" text-center font-bold text-xl md:text-2xl z-0">
          Explore Unique Experiences:<br></br> Discover a variety of exciting
          activities for your team.
        </p>
        <button className=" flex text-center rounded-full hover:bg-white hover:text-black w-44 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 justify-center text-sm items-center font-bold">
        <Image
          className="pt-1 pb-1 pr-2"
          src={Whatsapplogo}
          alt="logo"
          width={45}
          height={45}
        />
          Chat With Us
        </button>
      </div>
    </section>
  );
}
