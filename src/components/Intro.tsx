import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://media.licdn.com/dms/image/C4D03AQGL-Fuxz3Eb7A/profile-displayphoto-shrink_800_800/0/1629481703574?e=1710979200&v=beta&t=D5HquLCkb7lkFXXmhHUytPkck-bvbjpZp8sLQgb0oNE"
            alt="Portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-32 w-32 object-cover shadow-xl rounded-full border-[0.35rem] border-white"
          />
        </div>
      </div>

      <p className="mb-10 mt-4 px-4  text-2xl font-medium !leading-[1.5] sm:text-3xl">
        <span className="font-bold">Hello, my name is Gonçalo </span>
        and I have recently completed my Master&apos;s in{" "}
        <span className="underline">Computer Science and Engineering</span>. I
        am mostly interested in <span className="font-bold">back-end </span>
        development but I also enjoy learning some general{" "}
        <span className="font-bold">web-development </span>
        and <span className="font-bold">machine-learning </span>. I am most
        familiar with <span className="italic underline">Spring Boot </span>,
        and
        <span className="italic underline"> NextJS or React</span>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/10
            outline-none hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV-EN.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer
            outline-none  hover:scale-105 active:scale-100 transition"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/goncaloprates/"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full  cursor-pointer border border-black/10
            outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/CptAllergy"
          target="_blank"
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full cursor-pointer border border-black/10
            outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-100 transition"
        >
          <BsGithub />
        </a>
      </div>
    </section>
  );
};

export default Intro;
