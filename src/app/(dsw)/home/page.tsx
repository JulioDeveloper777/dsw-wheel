import { Carrossel } from "@/app/components/home/carrossel";
import { IntroductionHome } from "@/app/components/home/introduction";
import { ProjectsHome } from "@/app/components/home/projects";
import Footer from "@/app/components/ui/footer";
import { Header } from "@/app/components/ui/header";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[--background]">
      <IntroductionHome />
      <Carrossel />
      <ProjectsHome />
      <Footer />
    </div>
  );
}
