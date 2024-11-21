import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center">
        <h1 className="text-4xl font-bold text-blue-600">
          Bienvenue au Zoo Arcadia
        </h1>
        <Image
          src="/images/zoo.webp"
          alt="Zoo Arcadia"
          width={600}
          height={400}
          priority
          className="rounded-lg shadow-lg"
        />
        <p className="text-lg sm:text-left">
          Découvrez notre zoo unique, où la nature et l'éducation se
          rencontrent. Venez explorer une variété d'animaux fascinants et
          participer à nos activités éducatives.
        </p>
        <Link href="/faq" className="text-blue-500 hover:underline">
          Consultez notre FAQ
        </Link>
        <Button
          className="mt-4 text-white bg-blue-500 hover:bg-blue-700 hover:underline"
          href="/faq"
        >
          En savoir plus
        </Button>

        <h2 className="text-2xl font-semibold">Nos Animaux</h2>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">Lions majestueux</li>
          <li>Éléphants impressionnants</li>
          <li>Oiseaux colorés</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row"></div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
