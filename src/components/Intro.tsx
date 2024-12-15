import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div>
          {/*TODO add some better coloring to the image and smooth it. Increase the size and zoom into the face (less background)*/}
          <Image
            src="/profile.png"
            alt="Portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-44 w-44 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
        </div>
      </div>

      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl">
        <span className="font-bold">Hello, my name is Gonçalo </span>
        and I am a <span className="underline">full-stack developer</span>. I
        have a Master&apos;s in{" "}
        <span className="underline">Computer Science and Engineering</span> and
        I&apos;m mostly interested in{" "}
        <span className="font-bold">back-end </span>
        development but I also enjoy learning some general{" "}
        <span className="font-bold">web-development </span>
        and <span className="font-bold">machine-learning </span>. I am most
        familiar with <span className="italic underline">Spring Boot </span>,
        and
        <span className="italic underline"> NextJS or React</span>.
      </h1>

      <div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row">
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full border border-black/10 bg-gray-900 px-7 py-3 text-white outline-none transition hover:scale-105 hover:bg-gray-950 active:scale-100"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV-EN.pdf"
          download
          className="group flex cursor-pointer items-center gap-2 rounded-full bg-white px-7 py-3 outline-none transition hover:scale-105 active:scale-100"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/goncaloprates/"
          target="_blank"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 active:scale-100"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/CptAllergy"
          target="_blank"
          className="flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white p-4 text-gray-700 outline-none transition hover:scale-[1.15] hover:text-gray-950 active:scale-100"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
};

export default Intro;
