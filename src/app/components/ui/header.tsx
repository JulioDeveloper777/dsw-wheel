import Redirect from "@/app/lib/redirect";
import { Logo } from "../images/logo";
export const Header = () => {
  return (
    <div className="w-full border-b border-[#262626] flex lg:mt-5 h-20 items-center justify-between bg-[--background] px-5  lg:px-10 py-4 gap-5 pointer-events-auto z-0">
      <Logo />
      <nav className="flex items-center gap-4 text-[--text-highlights] -inset font-medium text-sm lg:text-lg">
        <Redirect
          href="/home"
          className="hover:text-zinc-50 transition-all hover:brightness-75"
        >
          Início
        </Redirect>
        <Redirect
          href="/aprendiz"
          className="hover:text-zinc-50 transition-all hover:brightness-75"
        >
          Aprendiz
        </Redirect>
        <Redirect
          href="/downloads"
          className="hover:text-zinc-50 transition-all hover:brightness-75"
        >
          Downloads
        </Redirect>
      </nav>
    </div>
  );
};
