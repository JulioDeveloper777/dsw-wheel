import Link from "next/link";
import Image from "next/image";

type Props = {
  size: number;
};

export const GitHub = ({ size }: Props) => {
  return (
    <Link href="https://github.com/Valdemir-DSW">
      <Image
        src={"GitHub.svg"}
        alt="Github"
        width={size}
        height={size}
        quality={100}
        className="hover:scale-110 transition-all duration-10 ease-in-out hover:opacity-20"
      />
    </Link>
  );
};
