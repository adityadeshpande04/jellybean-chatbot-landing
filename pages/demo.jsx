import Swip from "../components/swip";
import ImageCard from "../components/image-card";
export default function Demo() {
  return (
    <div className="my-bg text-black flex flex-col h-screen p-8 md:p-16">
      <div className="flex flex-col gap-2 md:px-24 mb-6 md:mb-8">
        <h1 className="text-5xl font-extrabold text-white">Experiences</h1>
        <p className="text-xl text-white">
          Our experiences create opportunities for teams to work together and
          share ideas leading increased innovation and productivity.
        </p>
      </div>
      <Swip />
    </div>
  );
}
