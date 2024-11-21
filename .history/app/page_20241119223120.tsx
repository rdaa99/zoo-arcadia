import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 text-gray-800">
      <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start text-center">
        {/* Section Accueil */}
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">
          Bienvenue au Zoo Arcadia
        </h1>
        <Image
          src="/images/zoo.webp"
          alt="Vue panoramique du Zoo Arcadia"
          width={700}
          height={450}
          priority
          className="rounded-lg shadow-2xl"
        />

        <p className="text-lg sm:text-left max-w-2xl text-gray-700">
          Plongez dans un environnement où la nature et l'éducation se
          rencontrent. Explorez nos habitats diversifiés et découvrez des
          animaux fascinants. Rejoignez des activités éducatives pour toute la
          famille et créez des souvenirs inoubliables.
        </p>

        <Link href="/faq">
          <span className="text-blue-500 hover:underline text-lg">
            Consultez notre FAQ
          </span>
        </Link>
        <Button
          className="mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800"
          href="/faq"
        >
          En savoir plus
        </Button>

        {/* Section À propos du Zoo */}
        <section className="max-w-2xl text-center sm:text-left mt-16">
          <h2 className="text-3xl font-semibold text-blue-600">
            À propos du Zoo
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Depuis 1960, le Zoo Arcadia est un lieu où la biodiversité est
            célébrée. Situé près de la forêt de Brocéliande, notre zoo accueille
            des animaux venant de divers habitats. Nous sommes fiers de notre
            indépendance énergétique et de notre engagement envers l'écologie.
          </p>
        </section>

        {/* Section Habitats */}
        <section className="max-w-2xl mt-12 text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-blue-600">Nos Habitats</h2>
          <p className="text-lg text-gray-700 mt-4">
            Découvrez nos différents habitats, soigneusement conçus pour recréer
            les environnements naturels de chaque espèce.
          </p>
          <ul className="list-inside list-disc text-left text-gray-700 mt-4">
            <li>
              <strong>Savane</strong> - Le royaume des lions, girafes, et bien
              plus encore.
            </li>
            <li>
              <strong>Jungle</strong> - Plongez dans la verdure et rencontrez
              des singes et des oiseaux tropicaux.
            </li>
            <li>
              <strong>Marais</strong> - Découvrez des espèces uniques dans notre
              espace marécageux.
            </li>
          </ul>
        </section>

        {/* Section Animaux */}
        <section className="max-w-2xl mt-12 text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-blue-600">Nos Animaux</h2>
          <p className="text-lg text-gray-700 mt-4">
            Rencontrez nos résidents les plus fascinants, soigneusement protégés
            et entretenus par nos vétérinaires.
          </p>
          <ol className="list-inside list-decimal text-left text-gray-700 mt-4">
            <li className="mb-2">Lions majestueux</li>
            <li className="mb-2">Éléphants impressionnants</li>
            <li className="mb-2">Oiseaux colorés</li>
            <li className="mb-2">Reptiles étonnants</li>
          </ol>
        </section>

        {/* Section Services et Activités */}
        <section className="max-w-2xl mt-12 text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-blue-600">
            Activités et Services
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Profitez de nos services uniques et participez à des activités
            enrichissantes :
          </p>
          <ul className="list-inside list-disc text-left text-gray-700 mt-4">
            <li>Visites guidées pour en apprendre plus sur les animaux.</li>
            <li>Un petit train pour explorer le parc de manière ludique.</li>
            <li>
              Restauration pour tous les goûts, avec une sélection de produits
              locaux.
            </li>
          </ul>
        </section>

        {/* Section de Contact */}
        <section className="max-w-2xl mt-12 text-center sm:text-left">
          <h2 className="text-3xl font-semibold text-blue-600">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            Avez-vous des questions? N'hésitez pas à nous contacter via notre
            formulaire de contact ou à consulter la FAQ pour plus
            d'informations.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-gray-500 mt-12">
        <p>© 2024 Zoo Arcadia - Tous droits réservés</p>
        <Link href="/mentions-legales">Mentions Légales</Link>
      </footer>
    </div>
  );
}
