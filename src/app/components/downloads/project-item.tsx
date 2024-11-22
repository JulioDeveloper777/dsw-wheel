import Link from "next/link";
import Image from "next/image";
type Props = {
  title: string;
  updateHistory: string;
  credits: string;
  urlDownload: string;
};
export const ProjectItemDownload = ({
  title,
  updateHistory,
  credits,
  urlDownload,
}: Props) => {
  return (
    <div className="flex flex-col border border-[#565656] rounded-2xl w-full lg:w-80 bg-zinc-950">
      <div className="flex flex-col justify-center h-full">
        <div className="p-5 lg:w-full">
          <div className="flex flex-row items-center justify-between">
            <h3 className="font-extrabold text-xl">{title}</h3>
          </div>
          <div className="flex flex-col items-start justify-start mt-7">
            <h2 className="font-extrabold gap-3 flex">
              <span>•</span> Histórico de atualizações
            </h2>
            <div className="flex flex-row gap-5 mt-3">
              <div className="relative">
                <div className="bg-[#565656] block h-ful  l w-1 rounded-full absolute"></div>
              </div>
              <p className="text-normal">{updateHistory}</p>
            </div>
          </div>
          <h2 className="font-extrabold gap-3 flex mt-5">
            <span>•</span> Créditos: {credits}
          </h2>
        </div>

        <Link href={urlDownload} target="_blank" className="mt-auto">
          <div className="px-4 py-4 lg:py-4 border-t border-[#565656] hover:bg-slate-100 hover:text-black rounded-b-2xl transition-all duration-300 ease-in-out hover:opacity-80">
            <div className="flex w-full items-center justify-center text-center font-medium text-lg">
              <h3>Download Windows</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
