import fishCatalog from "@/data/fish-catalog.json";
import { Fish, FishCategory } from "@/types/fish";

export const fishData = fishCatalog as Fish[];

export const featuredFish: Fish[] = fishData.filter((fish) =>
  [
    "Benga Sunshine",
    "Super Red Ruby",
    "Sciaenochromis fryeri \"Iceberg Redfin\"",
    "Protomelas sp. \"Taiwan Reef\"",
    "Eureka Red",
    "Otopharynx Lithobates",
    "Red OB",
    "Albino Sunshine",
  ].includes(fish.name),
);

export const availableFeaturedFish = featuredFish.filter(
  (fish) => fish.availability === "Available" && fish.image,
);

export const heroSlides = [
  {
    title: "Premium African Cichlids",
    subtitle: "Hand-raised peacocks and haps, delivered from our Ontario fish room.",
    fishName: "Benga Sunshine",
    image: "/photos/fish/Benga_Sunshine_Peacock_original.png",
    accentImage: "/photos/fish/bg_Aulonocara_Stuartgranti.png",
  },
  {
    title: "Collector-Quality Color",
    subtitle: "Vivid bloodlines selected for health, pattern, and long-term aquarium success.",
    fishName: "Super Red Ruby",
    image: "/photos/fish/Aulonocara_Rubescens_original.jpg",
    accentImage: "/photos/fish/bg_Aulonocara_Rubescens.png",
  },
  {
    title: "Lake Malawi Heritage",
    subtitle: "Trusted wholesale breeding experience, now available directly to hobbyists across Canada.",
    fishName: "Iceberg Redfin",
    image: "/photos/fish/Iceberg_Redfin_original.jpg",
    accentImage: "/photos/fish/bg_Iceberg_Redfin.png",
  },
] as const;

export type CollectionInfo = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: FishCategory;
  image: string;
  href: string;
};

export const collections: CollectionInfo[] = [
  {
    slug: "peacocks",
    title: "Aulonocara (Peacocks)",
    shortTitle: "Peacocks",
    description:
      "Stunning color, calm temperament, and classic Malawian personality. The centerpiece of many show tanks.",
    category: "Aulonocara (Peacocks)",
    image: "/photos/fish/Aulonocara_Rubescens_original.jpg",
    href: "/catalog?category=Aulonocara+%28Peacocks%29",
  },
  {
    slug: "haps",
    title: "Haplochromines (Haps)",
    shortTitle: "Haps",
    description:
      "Bold profiles and impressive presence. From Taiwan Reef to Iceberg Redfin and beyond.",
    category: "Haplochromines (Haps)",
    image: "/photos/fish/Protomelas_Sp_Steveni_Taiwan_original.jpg",
    href: "/catalog?category=Haplochromines+%28Haps%29",
  },
];

export function countByCategory(category: FishCategory) {
  return fishData.filter((fish) => fish.category === category).length;
}

export function countAvailable(category?: FishCategory) {
  return fishData.filter(
    (fish) =>
      fish.availability === "Available" &&
      (!category || fish.category === category),
  ).length;
}
