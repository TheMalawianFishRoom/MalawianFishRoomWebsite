"use client";

import { useState } from "react";
import { FaqSection } from "@/data/faqs";

type Props = {
  sections: FaqSection[];
};

export function FaqAccordion({ sections }: Props) {
  const [openId, setOpenId] = useState<string | null>(
    sections[0]?.items[0]
      ? `${sections[0].id}-${sections[0].items[0].question}`
      : null,
  );

  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-[#1577FF] md:text-3xl">{section.title}</h2>
          {section.description ? (
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#2A2B2A]/75">
              {section.description}
            </p>
          ) : null}

          <div className="mt-6 divide-y divide-[#2A2B2A]/10 border-y border-[#2A2B2A]/10">
            {section.items.map((item) => {
              const itemId = `${section.id}-${item.question}`;
              const isOpen = openId === itemId;

              return (
                <div key={itemId}>
                  <button
                    type="button"
                    id={`${itemId}-button`}
                    aria-expanded={isOpen}
                    aria-controls={`${itemId}-panel`}
                    onClick={() => setOpenId(isOpen ? null : itemId)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left transition hover:text-[#1577FF]"
                  >
                    <span className="text-base font-bold text-[#2A2B2A] md:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`mt-1 shrink-0 text-xl font-light leading-none text-[#1577FF] transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`${itemId}-panel`}
                    role="region"
                    aria-labelledby={`${itemId}-button`}
                    hidden={!isOpen}
                    className={isOpen ? "pb-5" : "hidden"}
                  >
                    <p className="max-w-3xl text-sm leading-relaxed text-[#2A2B2A]/80">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
