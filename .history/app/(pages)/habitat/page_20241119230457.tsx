import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Habitats() {
  return (
    <div className="bg-green-50 min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] text-gray-800">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
        Nos Habitats
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        Le Zoo Arcadia recrée des environnements naturels pour nos animaux, vous
        permettant d'explorer des habitats uniques et de découvrir leur
        biodiversité fascinante.
      </p>

      {/* Liste des habitats */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Habitat : Savane */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/savane.webp"
            alt="Habitat de la Savane au Zoo Arcadia"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Savane</h2>
          <p className="text-gray-700 mb-4">
            La savane abrite les espèces emblématiques comme les lions, les
            girafes, et les zèbres. Ressentez la chaleur et la splendeur de ce
            paysage africain.
          </p>
        </div>

        {/* Habitat : Jungle */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/jungle.webp"
            alt="Habitat de la Jungle au Zoo Arcadia"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Jungle</h2>
          <p className="text-gray-700 mb-4">
            Plongez au cœur de la jungle luxuriante où vivent nos singes,
            perroquets colorés, et reptiles. Cet habitat recrée l’atmosphère
            dense et humide des forêts tropicales.
          </p>
        </div>

        {/* Habitat : Marais */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/marais.jpg"
            alt="Habitat des Marais au Zoo Arcadia"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Marais</h2>
          <p className="text-gray-700 mb-4">
            Découvrez les marais, où vivent des espèces uniques telles que les
            crocodiles et les tortues. Cet habitat mystérieux est rempli de
            biodiversité aquatique.
          </p>
        </div>

        {/* Ajout d'autres habitats (exemples pour illustration) */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/montagne.jpg"
            alt="Habitat Montagne au Zoo Arcadia"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Montagne
          </h2>
          <p className="text-gray-700 mb-4">
            Visitez notre habitat montagneux, où se trouvent les chèvres des
            montagnes et d’autres animaux adaptés aux terrains accidentés et aux
            climats frais.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/desert.jpg"
            alt="Habitat du Désert au Zoo Arcadia"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">Désert</h2>
          <p className="text-gray-700 mb-4">
            Entrez dans l'univers désertique où vivent nos chameaux et reptiles
            du désert. Découvrez comment ces espèces survivent aux conditions
            les plus arides.
          </p>
        </div>
      </div>

      {/* Lien de retour à l'accueil */}
      <div className="text-center mt-12">
        <Link href="/">
          <span className="inline-block text-blue-500 hover:underline text-lg">
            Retour à l'accueil
          </span>
        </Link>
      </div>
    </div>
  );
}
