import {
  ProjectsDownloads,
} from "@/app/components/downloads/projects";
import Footer from "@/app/components/ui/footer";
import { Header } from "@/app/components/ui/header";

export default function Download() {
  return (
    <div className="h-screen w-screen bg-[--background] mx-auto my-auto">
      <Header />
      <ProjectsDownloads />
      <Footer />
    </div>
  );
}
