import Swip from "./swip";
import ImageCard from "./image-card";
export default function Experiences() {
  return (
    <div className="  flex flex-col h-screen justify-center px-8 md:px-16 gap-6 ">
      <div className="flex flex-col justify-center gap-6 md:px-24 mb-6 md:mb-8">
        <h1 className="text-5xl font-extrabold text-white text-center">Experiences</h1>
        <p className="text-xl text-white text-center font-bold">
          Our experiences create opportunities for teams to work together and
          share ideas leading increased innovation and productivity.
        </p>
      </div>
      <Swip />
    </div>
  );
}
