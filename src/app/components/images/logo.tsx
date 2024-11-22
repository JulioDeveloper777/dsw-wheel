import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="relative w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]">
        <Image
          src={"/logo.svg"}
          alt="DSW"
          fill
          quality={100}
          className="object-contain"
        />
      </div>
    </Link>
  );
};
