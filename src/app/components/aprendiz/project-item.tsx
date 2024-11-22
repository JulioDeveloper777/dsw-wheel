"use client";

import { useState } from "react";
import Link from "next/link";
import { Notify } from "../ui/notify";

type Props = {
  title: string;
  description: string;
  urlArchive: string;
};

export const ItemPost = ({ title, description, urlArchive }: Props) => {
  const [showNotify, setShowNotify] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(urlArchive);
      setShowNotify(true);
      setTimeout(() => setShowNotify(false), 3000);
    } catch (err) {
      console.error("Erro ao copiar texto:", err);
    }
  };

  return (
    <div className="relative bg-[#111] border border-[#333] rounded-xl overflow-hidden">
      <div className="p-6">
        <h3 className="font-bold text-xl mb-4">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>

      <div className="grid grid-cols-2 border-t border-[#333]">
        <Link
          target="_blank"
          href={urlArchive}
          className="p-4 text-center font-medium hover:bg-white hover:text-black transition-colors duration-200"
        >
          Ver Arquivo
        </Link>

        <button
          onClick={handleCopyClick}
          className="p-4 text-center font-medium hover:bg-white hover:text-black transition-colors duration-200 border-l border-[#333]"
        >
          Compartilhar
        </button>
      </div>

      {showNotify && (
        <Notify color="GREEN" message="Link copiado com sucesso! 😉" />
      )}
    </div>
  );
};
