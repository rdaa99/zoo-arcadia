import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <div className="bg-green-50 min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] text-gray-800">
      {/* Titre de la page */}
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
        Nos Services
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        Pour rendre votre visite inoubliable, nous proposons une gamme de
        services uniques au Zoo Arcadia. Profitez de la nature, détendez-vous,
        et laissez-nous enrichir votre expérience avec nos services spécialement
        conçus pour vous.
      </p>

      {/* Liste des services */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Service de restauration */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/restaurant.webp"
            alt="Service de restauration au Zoo"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Restauration
          </h2>
          <p className="text-gray-700 mb-4">
            Savourez une sélection de plats délicieux dans notre restaurant
            éco-responsable. Nous offrons des options pour tous les goûts, avec
            une attention particulière aux produits locaux et durables.
          </p>
        </div>

        {/* Visite guidée */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/visite-guidee.webp"
            alt="Visite guidée au Zoo Arcadia"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Visite guidée gratuite
          </h2>
          <p className="text-gray-700 mb-4">
            Découvrez le zoo sous un nouvel angle avec nos guides passionnés.
            Ils vous fourniront des informations fascinantes sur les animaux et
            leur habitat naturel.
          </p>
        </div>

        {/* Visite en petit train */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/petit-train.webp"
            alt="Visite en petit train au Zoo"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Visite en petit train
          </h2>
          <p className="text-gray-700 mb-4">
            Profitez d'une balade relaxante en petit train pour découvrir le zoo
            de manière ludique. Une activité idéale pour les familles et les
            enfants.
          </p>
        </div>

        {/* Autres services (ajustez selon les besoins du zoo) */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <Image
            src="/images/activites-enfants.webp"
            alt="Activités pour enfants au Zoo"
            width={300}
            height={200}
            className="rounded-md mb-4 mx-auto"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-2">
            Activités pour enfants
          </h2>
          <p className="text-gray-700 mb-4">
            Pour les plus jeunes, nous proposons des activités éducatives et des
            ateliers pour découvrir la faune et la nature tout en s’amusant.
          </p>
        </div>
      </div>

      {/* Lien de retour à l'accueil */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-block text-blue-500 hover:underline text-lg"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
