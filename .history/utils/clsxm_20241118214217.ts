import { twMerge } from "tailwind-merge";

/** Merge classes with tailwind-merge */
export default function clsxm(...classes: string[]) {
  return twMerge(clsx(...classes));
}
