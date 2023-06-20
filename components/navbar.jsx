import Image from "next/image";
import logo from "/public/logo.png";
export default function Navbar() {
  return (
    <nav className=" w-full relative h-24 shadow-x ">
      <div className="flex justify-between text-white items-center h-full w-full px-4">
        <a href=" " ><Image
          className="pt-4"
          src={logo}
          alt="logo"
          width={150}
          height={120}
        />
        </a>
        <a href="/about" className=" hover:text-violet-700 font-extrabold text-lg px-8">
          About Us
        </a>
      </div>
    </nav>
  );
}
