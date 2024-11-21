import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Fusionner les classes avec tailwind-merge avec toutes les fonctionnalités de clsx */
export default function clsxm(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
