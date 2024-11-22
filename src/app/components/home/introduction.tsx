import Button from "../ui/button";
import Link from "next/link";

export const IntroductionHome = () => {
  return (
    <div className="flex mx-3 lg:mt-32 flex-col items-center justify-center gap-4 mt-5">
      <h1 className="font-medium text-3xl text-center lg:text-4xl">
        Bem-vindo ao DSW Simuladores
      </h1>
      <p className="text-center font-normal text-[--text-overshadowed] lg:w-3/6 lg:text-lg">
        O projeto DSW (DIY Steering Wheel) tem como objetivo desenvolver
        simuladores de direção de alta qualidade, acessíveis e de baixo custo.
        Esses simuladores são voltados para entusiastas de corridas virtuais que
        buscam uma experiência imersiva sem precisar investir em equipamentos
        caros. Nosso foco é tornar a simulação de corrida acessível a todos,
        promovendo a criatividade e o aprendizado dentro da comunidade de jogos
        de corrida.
      </p>
      <div className="mt-5 lg:mt-7">
        <Link href="/downloads">
          <Button>Download</Button>
        </Link>
      </div>
    </div>
  );
};
