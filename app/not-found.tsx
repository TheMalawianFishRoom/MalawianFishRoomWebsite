import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#1577FF]">
        404 Error
      </p>

      <h1 className="mt-4 text-4xl font-black text-[#0D2C54]">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-[#2A2B2A]/70">
        The page you are looking for is not currently available.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[#1577FF] px-6 py-3 text-sm font-bold text-white transition hover:scale-[1.03]"
      >
        Return Home
      </Link>
    </main>
  );
}