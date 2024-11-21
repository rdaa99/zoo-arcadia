import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-green-50 min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] text-gray-800">
      {/* Titre principal */}
      <h1 className="text-4xl font-bold text-green-800 text-center mb-8">
        Contactez-nous
      </h1>
      <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-12">
        Vous avez une question ou souhaitez en savoir plus sur le Zoo Arcadia ?
        Remplissez le formulaire ci-dessous ou utilisez les informations de
        contact pour nous joindre. Nous serons ravis de vous aider !
      </p>

      {/* Section Formulaire de Contact */}
      <div className="grid sm:grid-cols-2 gap-10">
        {/* Informations de contact */}
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <Image
            src="/images/contact.webp"
            alt="Contactez le Zoo Arcadia"
            width={400}
            height={300}
            className="rounded-md shadow-lg mb-6"
          />
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Nos coordonnées
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Adresse :</strong> 123 Rue de la Faune, Brocéliande,
            Bretagne
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Téléphone :</strong> +33 1 23 45 67 89
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Email :</strong> contact@zooarcadia.fr
          </p>
          <p className="text-gray-600 text-sm italic">
            Nous répondons généralement sous 24 heures.
          </p>
        </div>

        {/* Formulaire de contact */}
        <div>
          <h2 className="text-2xl font-semibold text-green-800 mb-4">
            Envoyez-nous un message
          </h2>
          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Votre nom complet"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Votre email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="votreemail@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Votre message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Comment pouvons-nous vous aider ?"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>

      {/* Lien de retour à l'accueil */}
      <div className="text-center mt-12">
        <Link href="/">
          <span className="inline-block text-blue-500 hover:underline text-lg">
            Retour à l&apos;accueil
          </span>
        </Link>
      </div>
    </div>
  );
}
