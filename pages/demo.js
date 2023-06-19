import Card from "../components/card";
export default function Demo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-white">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 xl:gap-x-20 mt-8">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
