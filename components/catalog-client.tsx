"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import { Fish } from "@/types/fish";

type Props = {
  fishData: Fish[];
};

export function CatalogClient({ fishData }: Props) {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "All";
  const initialAvailability = searchParams.get("availability") ?? "All";

  const [search, setSearch] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);
  const [availability, setAvailability] = useState(initialAvailability);
  const [view, setView] = useState<"grid" | "list">("grid");

  useEffect(() => {
    setSearch(searchParams.get("q") ?? "");
    setCategory(searchParams.get("category") ?? "All");
    setAvailability(searchParams.get("availability") ?? "All");
  }, [searchParams]);

  const filteredFish = useMemo(() => {
    return fishData.filter((fish) => {
      const matchesSearch =
        !search ||
        fish.name.toLowerCase().includes(search.toLowerCase()) ||
        fish.tag?.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || fish.category === category;
      const matchesAvailability =
        availability === "All" || fish.availability === availability;
      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }, [fishData, search, category, availability]);

  return (
    <section className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#2A2B2A]/15 pb-4">
        <div className="flex flex-wrap gap-4 text-sm font-bold">
          <label className="flex items-center gap-2">
            <span className="text-[#2A2B2A]/60">Filter</span>
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="input-pill max-w-[220px] py-2"
              aria-label="Filter by category"
            >
              <option value="All">All categories</option>
              <option value="Aulonocara (Peacocks)">Peacocks</option>
              <option value="Haplochromines (Haps)">Haps</option>
            </select>
          </label>
          <label className="flex items-center gap-2">
            <span className="text-[#2A2B2A]/60">Availability</span>
            <select
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className="input-pill max-w-[180px] py-2"
              aria-label="Filter by availability"
            >
              <option value="All">All</option>
              <option value="Available">Available</option>
              <option value="Not Available">Not available</option>
            </select>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setView("grid")}
            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
              view === "grid" ? "bg-[#2A2B2A] text-white" : "bg-[#F4F4F4] text-[#2A2B2A]"
            }`}
          >
            Grid
          </button>
          <button
            type="button"
            onClick={() => setView("list")}
            className={`rounded-full px-3 py-1.5 text-xs font-bold ${
              view === "list" ? "bg-[#2A2B2A] text-white" : "bg-[#F4F4F4] text-[#2A2B2A]"
            }`}
          >
            List
          </button>
        </div>
      </div>

      <div className="max-w-md">
        <label htmlFor="catalog-search" className="sr-only">
          Search catalog
        </label>
        <input
          id="catalog-search"
          type="search"
          placeholder="Search by name or tag"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="input-pill"
        />
      </div>

      <p className="text-sm text-[#2A2B2A]/70">
        Showing {filteredFish.length} of {fishData.length} fish
      </p>

      <div
        className={
          view === "grid"
            ? "product-grid"
            : "flex flex-col gap-8 divide-y divide-[#2A2B2A]/10"
        }
      >
        {filteredFish.map((fish) => (
          <div key={fish.name} className={view === "list" ? "grid gap-6 pt-8 md:grid-cols-[200px_1fr] md:pt-8" : ""}>
            <ProductCard fish={fish} />
          </div>
        ))}
      </div>

      {filteredFish.length === 0 ? (
        <div className="rounded-2xl bg-[#F4F4F4] px-6 py-12 text-center">
          <p className="text-lg font-bold">No fish match your filters</p>
          <p className="mt-2 text-sm text-[#2A2B2A]/70">
            Try clearing search or choosing a different category.
          </p>
        </div>
      ) : null}
    </section>
  );
}
