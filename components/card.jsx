import Image from "next/image";
import chatbotImg from "/public/image-01.png";
export default function Card({ title, body, imgSrc }) {
  return (
    <div className="m-4 max-w-lg">
      <div className="flex flex-col">
        <div className="img-wrapper roundex-xl overflow-hidden">
          <Image src={imgSrc} />
        </div>
        <h3 className="text-2xl font-bold mt-5 text-white">{title}</h3>
        <p className="mt-2 text-lg text-white">{body}</p>
      </div>
    </div>
  );
}
