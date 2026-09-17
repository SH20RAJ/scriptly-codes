import Link from "next/link";

export default function MenuList(props: { closeMenu: () => void }) {
  const { closeMenu } = props;
  return (
    <div
      data-testid="menu-list"
      className="absolute flex flex-col right-0 border top-[38px] rounded bg-neutral-50 dark:bg-neutral-900 dark:text-slate-400"
    >
      <Link
        onClick={() => closeMenu()}
        href="/#about"
        className="p-4 w-48 hover:underline"
      >
        About
      </Link>
      <Link
        onClick={() => closeMenu()}
        href="/#projects"
        className="p-4 w-48 hover:underline"
      >
        Projects
      </Link>
      <Link
        onClick={() => closeMenu()}
        href="/#contact"
        className="p-4 w-48 hover:underline"
      >
        Contact
      </Link>
    </div>
  );
}
