import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Habitats() {
  return (
    <div className="bg-green-50 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-green-800">Nos Habitats</h1>
      <p className="text-center text-gray-700">
        Explorez les différents habitats que nous avons au Zoo Arcadia.
      </p>
      <ol className="list-inside list-decimal text-sm text-center sm:text-left text-gray-600 mt-4">
        <li className="mb-2">
          Savane : Découvrez les animaux emblématiques de la savane.
        </li>
        <li className="mb-2">
          Jungle : Plongez dans la biodiversité de la jungle.
        </li>
        <li className="mb-2">
          Marais : Observez les espèces uniques des marais.
        </li>
      </ol>
      <Link href="/" className="text-blue-500 hover:underline mt-4">
        Retour à l'accueil
      </Link>
    </div>
  );
}
