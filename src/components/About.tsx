import SectionHeading from "./SectionHeading";

const About = () => {
  return (
    <section
      id="about"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I began seriously programming in 2018, when I enrolled in University at
        Nova School of Science and Technology. During the 5 years I spent
        studying, besides the many projects and tests, I was an{" "}
        <span className="font-bold">intern at a consulting company</span>,
        participated in a{" "}
        <span className="font-bold">research project with a scholarship</span>,
        and finished my Master&apos;s Thesis in relation to
        <span className="font-bold">
          satellite monitoring of forests using machine learning techniques
        </span>
        .
      </p>
      <p>
        Since 2024, I&apos;ve been working as a Full-Stack Developer at Motorola
        Solutions, where I&apos;m learning everyday about what it takes to build
        a successful product. Besides that, I love working on my side projects
        when I have free time. I built simple tools to automate tasks, but my
        main endeavors are a flutter{" "}
        <span className="font-bold">fitness application</span> and a web{" "}
        <span className="font-bold">event browsing application</span>.
      </p>
    </section>
  );
};

export default About;
