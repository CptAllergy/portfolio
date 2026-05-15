import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

const Project = ({ title, description, tags, imageUrl }: Props) => {
  return (
    <section className="group relative mb-3 max-w-2xl overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition last:mb-0 hover:bg-gray-200 sm:mb-8 sm:h-80 sm:even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
      <div className="flex h-full flex-col px-5 pt-4 pb-7 sm:max-w-1/2 sm:pt-10 sm:pr-2 sm:pl-10 sm:group-even:ml-72">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-black/70 px-3 py-1 text-[0.7rem] tracking-wider text-white uppercase dark:text-white/70"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute top-8 -right-40 hidden w-md rounded-t-lg shadow-2xl transition group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-105 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        />
      </div>
    </section>
  );
};

export default Project;
