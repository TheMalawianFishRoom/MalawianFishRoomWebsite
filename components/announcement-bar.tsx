import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#1577FF] py-2.5 text-center text-sm text-white">
      <p>
        Premium African cichlids raised in Ontario. {" "}
        <Link href="/contact" className="font-bold underline underline-offset-2 hover:text-white/90">
          contact us for pricing &amp; availability
        </Link>
      </p>
    </div>
  );
}
