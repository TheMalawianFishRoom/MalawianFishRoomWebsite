export type FishAvailability = "Available" | "Not Available";

export type FishCategory = "Aulonocara (Peacocks)" | "Haplochromines (Haps)";

export type Fish = {
  name: string;
  availability: FishAvailability;
  category: FishCategory;
  tag?: string;
  image?: string;
  imageSecondary?: string;
};
