import Image from "next/image";
import logo from "/public/logo.png"
export default function Navbar()
{
    return (
           <nav className=" w-full relative h-24 shadow-x bg-inherit">
            <div className="flex justify-between text-white items-center h-full w-full px-4">
                <Image className="pt-4"
                 src={logo}
                 alt="logo"
                 width={150}
                 height={120}
                 
                />
                <a href="#" className=" hover:text-violet-700 font-extrabold text-lg px-12">About Us</a>
            </div>
           </nav>
    );
}