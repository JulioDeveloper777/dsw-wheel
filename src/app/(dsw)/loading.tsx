"use client";

import { Logo } from "../components/images/logo";

export default function Loading() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="animate-pulse">
        <Logo />
      </div>
    </div>
  );
}
