import Image from "next/image";
import Link from "next/link";
import { CollectionInfo, countAvailable } from "@/lib/fish";

type Props = {
  collection: CollectionInfo;
  variant?: "dark" | "light";
};

export function CollectionCard({ collection, variant = "dark" }: Props) {
  const available = countAvailable(collection.category);

  return (
    <Link
      href={collection.href}
      className={`group block overflow-hidden rounded-2xl transition hover:-translate-y-0.5 ${
        variant === "dark"
          ? "bg-black/40 ring-1 ring-white/10 hover:ring-white/25"
          : "bg-[#F9F9F9] ring-1 ring-[#2A2B2A]/10 hover:ring-[#1577FF]/30"
      }`}
    >
      <div className="relative aspect-[4/3] bg-black">
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-contain p-4 transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className={`space-y-2 p-5 ${variant === "dark" ? "text-white" : "text-[#2A2B2A]"}`}>
        <p className="text-xs font-bold uppercase tracking-wide text-[#1577FF]">
          {available} available now
        </p>
        <h3 className="text-xl font-bold">{collection.shortTitle}</h3>
        <p className={`text-sm leading-relaxed ${variant === "dark" ? "text-white/75" : "text-[#2A2B2A]/70"}`}>
          {collection.description}
        </p>
        <span className="inline-block pt-1 text-sm font-bold text-[#1577FF] group-hover:underline">
          View collection →
        </span>
      </div>
    </Link>
  );
}
