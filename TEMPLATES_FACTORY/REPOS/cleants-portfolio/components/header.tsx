import { userName } from "@/app/page";
import Menu from "./menu";
import DarkToggle from "./darkToggle";

export default function Header() {
  return (
    <div
      data-testid="header"
      className="w-screen flex flex-row justify-between items-center h-12 px-4 border-b backdrop-blur fixed dark:text-slate-400"
    >
      <h1 className="font-mono font-bold">{userName}</h1>
      <div className="flex flex-row items-center ">
        <DarkToggle />
        <Menu />
      </div>
    </div>
  );
}
