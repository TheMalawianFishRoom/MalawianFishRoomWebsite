import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="bg-[#1577FF] py-2.5 text-center text-lg font-bold text-white">
      <p>
        Grand Opening August 1st! {" "}
        <br />
        <span className="text-orange-400">
        All fish 50% off! No tax until 2027! 
        </span>
        <br />
        <Link href="/contact" className="font-bold underline underline-offset-2 hover:text-white/90">
        Contact us today!
        </Link>
      </p>
    </div>
  );
}
