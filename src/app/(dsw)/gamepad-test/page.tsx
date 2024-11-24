import { ContentGamepadTest } from "@/app/components/gamepad-test/content-gamepad";
import Footer from "@/app/components/ui/footer";

export default function GamepadTest() {
  return (
    <div className="h-screen w-screen bg-[--background] mx-auto my-auto pointer-events-auto">
      <ContentGamepadTest />
      <Footer />
    </div>
  );
}
