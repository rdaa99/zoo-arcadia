import Link from "next/link";

export default function Services() {
  return (
    <div className="bg-green-50 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-green-800">Services Offerts</h1>
      <p className="text-center text-gray-700">
        Découvrez les services que nous proposons pour améliorer votre
        expérience au Zoo Arcadia.
      </p>
      <ul className="list-inside list-disc text-sm text-center sm:text-left text-gray-600 mt-4">
        <li className="mb-2">
          Restauration : Profitez de nos options de restauration variées.
        </li>
        <li className="mb-2">
          Visite guidée gratuite : Explorez le zoo avec un guide expert.
        </li>
        <li className="mb-2">
          Visite en petit train : Une façon amusante de découvrir le zoo.
        </li>
      </ul>
      <Link href="/" className="text-blue-500 hover:underline mt-4">
        Retour à l'accueil
      </Link>
    </div>
  );
}
