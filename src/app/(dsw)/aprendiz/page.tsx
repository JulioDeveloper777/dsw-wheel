import { ProjectsArchives } from "@/app/components/aprendiz/projects";
import Footer from "@/app/components/ui/footer";
import { Header } from "@/app/components/ui/header";

export default function Aprendiz() {
  return (
    <div className="h-screen w-screen bg-[--background] mx-auto my-auto">
      <Header />
      <ProjectsArchives />
      <Footer />
    </div>
  );
}
