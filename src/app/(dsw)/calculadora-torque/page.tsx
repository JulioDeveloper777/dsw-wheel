import { ContentCalculadoraTorque } from "@/app/components/calculadora-torque/content-calculadora";
import Footer from "@/app/components/ui/footer";
import { Header } from "@/app/components/ui/header";

export default function CalculadoraTorque() {
  return (
    <div className="h-screen w-screen bg-[--background]">
      <ContentCalculadoraTorque />
      <Footer />
    </div>
  );
}
