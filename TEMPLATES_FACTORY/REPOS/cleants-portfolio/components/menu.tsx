"use client";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import MenuList from "./menuList";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      data-testid="menu"
      className="relative flex flex-col items-center justify-center"
    >
      <button
        data-testid="menu-btn"
        className=" cursor-pointer hover:text-slate-400"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoMenu size={24} />
        <p className="hidden">Menu</p>
      </button>
      {showMenu && (
        <MenuList closeMenu={() => setTimeout(() => setShowMenu(false), 500)} />
      )}
    </div>
  );
}
