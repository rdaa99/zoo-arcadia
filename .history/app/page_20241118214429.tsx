import { Navbar } from "@/components/organisms/Navbar";
import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold text-green-800">
          Bienvenue au Zoo Arcadia
        </h1>
        <p className="text-center text-gray-700">
          Découvrez notre zoo situé près de la forêt de Brocéliande, où nous
          prenons soin de nos animaux et de leur environnement.
        </p>
        <Image
          className="rounded-lg shadow-lg"
          src="/zoo-image.jpg"
          alt="Zoo Arcadia"
          width={600}
          height={400}
          priority
        />
        <h2 className="text-2xl font-semibold text-green-600">Nos Habitats</h2>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left text-gray-600">
          <li className="mb-2">Savane</li>
          <li className="mb-2">Jungle</li>
          <li className="mb-2">Marais</li>
        </ol>
        <h2 className="text-2xl font-semibold text-green-600">
          Services Offerts
        </h2>
        <ul className="list-inside list-disc text-sm text-center sm:text-left text-gray-600">
          <li className="mb-2">Restauration</li>
          <li className="mb-2">Visite guidée gratuite</li>
          <li className="mb-2">Visite en petit train</li>
        </ul>
        <h2 className="text-2xl font-semibold text-green-600">
          Avis des Visiteurs
        </h2>
        <p className="text-center text-gray-700">
          "Un endroit magnifique pour passer la journée!" - Visiteur satisfait
        </p>
        <Link href="/faq" className="text-blue-500 hover:underline">
          Consultez notre FAQ
        </Link>
        <Button
          className="mt-4 bg-green-600 text-white hover:bg-green-700"
          href="/faq"
        >
          Button
        </Button>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
