import Link from "next/link";

export default function Footer() {
  return (
    <div
      data-testid="footer"
      className="border-t w-full h-16 flex flex-col items-center justify-center bg-neutral-100 dark:bg-neutral-900 dark:text-slate-400"
    >
      <Link href="/" className="text-sm hover:underline">
        <p>Back to top</p>
      </Link>
    </div>
  );
}
