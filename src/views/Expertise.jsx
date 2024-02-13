import { expertise_data } from "../assets/constants";
import { useScroll } from "../contexts/ScrollContext";

export default function Expertise() {
  const { aboutRef } = useScroll();

  return (
    <section
      ref={aboutRef}
      className="flex h-full w-full flex-col items-center justify-center bg-white px-2 py-12 sm:px-4 md:px-6 lg:px-12 xl:px-24"
    >
      <div className="w-full py-12">
        <h1 className="text-4xl font-semibold">Expertise</h1>
      </div>
      <div className="flex h-full w-full flex-row flex-wrap items-center justify-center gap-24 lg:justify-between">
        {expertise_data.map((data) => (
          <div
            key={data.title}
            className="flex w-full flex-col gap-2 md:w-[400px]"
          >
            <h1 className="text-2xl font-medium">• {data.title}</h1>
            <p className="text-gray-700">{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
