import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-green-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-green-800">Contactez-nous</h1>
      <p className="text-gray-700">
        Si vous avez des questions, n'hésitez pas à nous contacter.
      </p>
      {/* Ajoutez ici le formulaire ou d'autres éléments nécessaires */}
    </div>
  );
}
