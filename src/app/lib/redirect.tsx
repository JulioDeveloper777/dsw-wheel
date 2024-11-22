import Link from "next/link";
import { cn } from "../lib/utils";

interface RedirectProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function Redirect({ href, className, children }: RedirectProps) {
  return (
    <Link href={href} className={cn("", className)}>
      {children}{" "}
    </Link>
  );
}
