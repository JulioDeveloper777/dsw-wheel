import { StatusProject } from "./status-project";
import Link from "next/link";
import Image from "next/image";

type ProjectStatus = "DISPONIVEL" | "FINALIZADO" | "PARADO" | "NAO LANCADO";

interface ProjectItemHomeProps {
  title: string;
  description: string;
  url: string;
  status: ProjectStatus;
}

export const ProjectItemHome = ({
  title,
  description,
  url,
  status,
}: ProjectItemHomeProps) => {
  return (
    <div className="flex flex-col border border-[#565656] rounded-2xl w-full lg:w-80 lg:h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="p-5 lg:w-full">
          <div className="flex flex-row items-center justify-between gap-3">
            <h3 className="font-extrabold text-xl">{title}</h3>
            <StatusProject label={status} />
          </div>
          <div className="flex flex-col items-center mt-5 justify-center">
            <p className="text-normal">{description}</p>
          </div>
        </div>
        <Link href={url} className="mt-auto">
          <div className="px-4 py-4 lg:py-4 border-t border-[#565656] hover:bg-slate-100 hover:text-black rounded-lg transition-all duration-10 ease-in-out hover:opacity-80">
            <div className="flex flex-row w-full justify-between items-center font-medium text-lg">
              <h3>Saiba Mais</h3>
              <Image
                src={"arrow.svg"}
                alt="arrow"
                width={20}
                height={20}
                quality={100}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
