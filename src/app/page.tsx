import { redirect } from "next/navigation";
import { Logo } from "./components/images/logo";

export default async function Page() {
  redirect("/home");

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Logo />
    </div>
  );
}
