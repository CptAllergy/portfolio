import Image, { StaticImageData } from "next/image";
import { Link } from "lucide-react";

type Props = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
  projectUrl?: string;
};

const Project = ({ title, description, tags, imageUrl, projectUrl }: Props) => {
  return (
    <section className="group relative mb-3 max-w-2xl overflow-hidden rounded-lg border border-black/5 bg-gray-100 shadow transition last:mb-0 hover:bg-gray-200 sm:mb-8 sm:h-80 sm:even:pl-8 dark:bg-white/10 dark:text-white dark:hover:bg-white/15">
      <div className="flex h-full flex-col px-5 pt-4 pb-7 sm:max-w-1/2 sm:pt-10 sm:pr-2 sm:pl-10 sm:group-even:ml-72">
        <h3 className="flex items-center gap-2 text-2xl font-semibold">
          {title}
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              className="mt-0.5 text-gray-500 transition-all hover:scale-110 hover:cursor-pointer hover:text-black dark:hover:text-white"
            >
              <Link size={16} />
            </a>
          )}
        </h3>
        <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="dark:bg-primary/70 rounded-full bg-black/70 px-3 py-1 text-[0.7rem] tracking-wider text-white uppercase dark:text-white/80"
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
          quality={90}
          className="absolute top-8 -right-40 hidden w-md rounded-t-lg border-2 border-black shadow-2xl transition group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:scale-105 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        />
      </div>
    </section>
  );
};

export default Project;
