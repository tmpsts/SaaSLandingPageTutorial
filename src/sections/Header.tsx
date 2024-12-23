import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        {/* Inline flex */}
        <p className="text-white/60 hidden md:block">
          If you can read this, you must be the goat
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Go forth my goat!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Circles</a>
              <a href="#">Squares</a>
              <a href="#">Pyramids</a>
              <a href="#">Rhombicosidodecahedrons</a>
              <a href="#">The Squircle</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Help...
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
