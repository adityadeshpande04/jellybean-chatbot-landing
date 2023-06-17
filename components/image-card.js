export default function ImageCard() {
  return (
    <section className="font-sans leading-normal flex text-white w-full justify-center">
      <div className="max-w-lg shadow-lg rounded overflow-hidden m-4 sm:flex">
        <div className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden bg-[url('https://unsplash.it/804/800')]"></div>

        <div className="px-6 py-4">
          <h2 className="mb-2 font-black">Hello Tailwind!</h2>
          <p className="mb-4 text-grey-dark text-sm">
            Learning Tailwind is incredibly easy. The team has done a wonderful
            job with the documentation. This is pretty amazing, I must say.
          </p>

          <button className="py-3 px-6 bg-purple hover:bg-purple-light text-white font-bold rounded-full mt-1 mb-2">
            Hey, click me.
          </button>
        </div>
      </div>
    </section>
  );
}
