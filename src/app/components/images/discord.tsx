import Link from "next/link";
import Image from "next/image";

type Props = {
  size: number;
};

export const Discord = ({ size }: Props) => {
  return (
    <Link href="https://discord.gg/ecf7PGTVVg">
      <Image
        src={"Discord.svg"}
        alt="Discord"
        width={size}
        height={size}
        quality={100}
        className="hover:scale-110 transition-all duration-10 ease-in-out hover:opacity-20"
      />
    </Link>
  );
};
