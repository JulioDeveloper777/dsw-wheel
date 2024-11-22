import Image from "next/image";

export type TypeStatus = {
  label: "FINALIZADO" | "DISPONIVEL" | "PARADO" | "NAO LANCADO";
};

export const StatusProject = ({ label }: TypeStatus) => {
  return (
    <div className="border pointer-events-none gap-2 border-[#565656] flex-row overshadowed min-w-[120px] min-h-[28px] flex items-center justify-center text-center rounded-3xl">
      <div className="inline-flex items-center justify-center">
        {label === "FINALIZADO" && (
          <Image
            src="circle-green.svg"
            alt="circle-green"
            width={10}
            height={10}
            quality={100}
            className="flex-shrink-0"
          />
        )}
        {label === "DISPONIVEL" && (
          <Image
            src="circle-green.svg"
            alt="circle-green"
            width={10}
            height={10}
            quality={100}
            className="flex-shrink-0"
          />
        )}
        {label === "PARADO" && (
          <Image
            src="circle-red.svg"
            alt="circle-red"
            width={10}
            height={10}
            quality={100}
            className="flex-shrink-0"
          />
        )}
        {label === "NAO LANCADO" && (
          <Image
            src="circle-orange.svg"
            alt="circle-orange"
            width={10}
            height={10}
            quality={100}
            className="flex-shrink-0"
          />
        )}
      </div>
      <h3 className="font-semibold text-white text-[10px] whitespace-nowrap">
        {label}
      </h3>
    </div>
  );
};
