import Image from "next/image";

const Intro = () => {
  return (
    <section>
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
        <span className="font-bold">Hello, my name is Gonçalo{" "}</span>
        and I have recently completed my Master's in{" "}
        <span className="underline">Computer Science and Engineering</span>. I
        am mostly interested in{" "}
        <span className="font-bold">back-end{" "}</span>
        development but I also enjoy learning some general{" "}
        <span className="font-bold">web-development{" "}</span>
        and <span className="font-bold">machine-learning{" "}</span>. I am most
        familiar with using{" "}
        <span className="italic underline">Spring Boot{" "}</span>, and
        <span className="italic underline"> NextJS or React</span>.
      </p>
    </section>
  );
};

export default Intro;
