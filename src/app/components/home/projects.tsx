import { ProjectItemHome } from "./project-item";

export const ProjectsHome = () => {
  return (
    <div className="mt-10 lg:mt-36 flex flex-col items-center justify-center w-ful mb-10">
      <h1 className="font-medium text-3xl text-center lg:text-4xl mb-10">
        Projetos Ativos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
        <ProjectItemHome
          title="DSW"
          description="Programa de desenvolvimento de volantes caseiros com force feedback no Arduino Leonardo."
          url="https://github.com/Valdemir-DSW"
          status="FINALIZADO"
        />
        <ProjectItemHome
          title="DSW Button Box"
          description="Programa para fazer button box com Arduino Leonardo."
          url="https://github.com/Valdemir-DSW"
          status="PARADO"
        />
        <ProjectItemHome
          title="DSW Painel Pro"
          description="Programa completo para extração de telemetria de jogos de corrida, com suporte para Arduinos e plataformas de movimento."
          url="https://github.com/Valdemir-DSW"
          status="NAO LANCADO"
        />
        <ProjectItemHome
          title="DSW Pro"
          description="Programa gratuito para desenvolver volantes com force feedback na STM32."
          url="https://github.com/Valdemir-DSW"
          status="FINALIZADO"
        />
        <ProjectItemHome
          title="DSW Button Box Pro"
          description="Atualização otimizada de seu antecessor, com melhor interface e sem travamentos, ainda gratuito."
          url="https://github.com/Valdemir-DSW"
          status="FINALIZADO"
        />
        <ProjectItemHome
          title="DSW Gamepad Test"
          description="Teste seu volante ou gamepad."
          url="https://github.com/Valdemir-DSW"
          status="DISPONIVEL"
        />
        <ProjectItemHome
          title="Calculadora de Torque"
          description="Calcule o torque, energia e polias de seu volante para obter uma melhor experiência."
          url="https://github.com/Valdemir-DSW"
          status="DISPONIVEL"
        />
      </div>
    </div>
  );
};
