import Image from "next/image";

type Props = {
  size: number;
};

export const SkelectonImage = ({ size }: Props) => {
  return (
    <Image
      src={"SkelectonImage.svg"}
      alt="Skelecton"
      width={size}
      height={size}
      quality={100}
      className="transition-all hover:brightness-75 hover:border-gray-600"
    />
  );
};
