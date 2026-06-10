import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="relative overflow-hidden border-b border-blue-400/20 bg-gradient-to-r from-[#081225] via-[#1565C0] to-[#081225] text-white shadow-[0_0_30px_rgba(21,119,255,0.25)]">
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-4 px-6 py-3 text-center md:flex-row md:text-left">
        
        {/* left side */}
        <div className="hidden min-w-[220px] md:block">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100/70">
            Ontario Raised
          </p>

          <p className="mt-1 text-sm font-medium text-white/90">
            Premium African Cichlids
          </p>
        </div>

        {/* center content */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
            Grand Opening August 1st
          </p>

          <p className="mt-1 text-xl font-extrabold tracking-tight text-white md:text-2xl">
            All Fish 50% Off
          </p>

          <p className="mt-1 text-sm font-medium text-orange-300">
            No Tax Until 2027
          </p>

          <Link
            href="/contact"
            className="mt-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
          >
            Contact Us Today
          </Link>
        </div>

        {/* right side */}
        <div className="hidden min-w-[220px] text-right md:block">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-100/70">
            Canada Wide
          </p>

          <p className="mt-1 text-sm font-medium text-white/90">
            Local Pickup & Delivery Available
          </p>
        </div>
      </div>
    </div>
  );
}
