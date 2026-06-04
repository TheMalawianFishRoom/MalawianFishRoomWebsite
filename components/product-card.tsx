import Link from "next/link";
import { FishImageLightbox } from "@/components/fish-image-lightbox";
import { Fish } from "@/types/fish";

type Props = {
  fish: Fish;
  showInquire?: boolean;
};

export function ProductCard({ fish, showInquire = true }: Props) {
  const isAvailable = fish.availability === "Available";

  return (
    <article className="group flex flex-col">
      <div className="relative mb-4 aspect-square w-full bg-black">
        {fish.image ? (
          <FishImageLightbox
            fishName={fish.name}
            primarySrc={fish.image}
            secondarySrc={fish.imageSecondary}
            triggerClassName="h-full"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#191919] text-sm font-bold text-white/40">
            Photo coming soon
          </div>
        )}
        {fish.tag ? (
          <span className="absolute left-3 top-3 rounded-full bg-[#0D2C54] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            {fish.tag}
          </span>
        ) : null}
        {isAvailable ? (
          <span className="absolute right-3 top-3 rounded-full bg-[#13FD17] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-black">
            Available
          </span>
        ) : null}
      </div>

      <p className="text-xs font-medium text-[#2A2B2A]/60">{fish.category}</p>
      <h3 className="mt-1 text-base font-bold leading-snug text-[#2A2B2A]">{fish.name}</h3>
      <p
        className={`mt-2 text-sm font-bold ${
          isAvailable ? "text-[#1577FF]" : "text-[#2A2B2A]/50"
        }`}
      >
        {fish.availability}
      </p>
      {showInquire ? (
        <Link
          href={`/contact?fish=${encodeURIComponent(fish.name)}`}
          className="mt-3 text-sm font-bold text-[#1577FF] opacity-0 transition group-hover:opacity-100 focus:opacity-100"
        >
          Inquire about this fish →
        </Link>
      ) : null}
    </article>
  );
}
