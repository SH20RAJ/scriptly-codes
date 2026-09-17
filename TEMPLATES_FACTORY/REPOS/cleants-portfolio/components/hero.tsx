import { userName } from "@/app/page";

export default function Hero() {
  return (
    <div
      data-testid="hero"
      className="w-screen p-2 flex flex-col min-h-[85vh] -mt-12 py-12 px-6 md:px-20 md:items-center"
    >
      <div className="my-24">
        <h1 className="text-4xl font-bold ">
          Hi, I&apos;m {userName} — a web developer
        </h1>
        <p className="text-lg text-slate-600 mt-4">
          I create accessible, high-performance web applications and open-source
          tools.
        </p>
      </div>
      <div className="flex gap-4 mt-24 flex-row items-center justify-center">
        <a
          href="#projects"
          className="text-sm rounded p-1 bg-green-600 text-white px-2  w-36 text-center hover:underline"
        >
          See My Work
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-sm rounded p-1 border border-green-600 text-green-600 px-2 w-36 text-center hover:underline"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
