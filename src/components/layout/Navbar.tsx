"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { useEffect, useState } from "react";


export default function Navbar() {


  const { theme, toggleTheme } = useTheme();


  const [mounted, setMounted] = useState(false);


  useEffect(() => {

    setMounted(true);

  }, []);



  return (

    <header
      className="
        sticky
        top-0
        z-50
        border-b
        bg-background/80
        backdrop-blur
      "
    >

      <nav
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
      >


        {/* Logo */}

        <Link
          href="/"
          className="
            text-xl
            font-bold
            tracking-tight
          "
        >

          Ali Abyar

        </Link>





        {/* Menu */}

        <div
          className="
            hidden
            gap-8
            md:flex
          "
        >

          <Link href="#about">
            About
          </Link>


          <Link href="#experience">
            Experience
          </Link>


          <Link href="#projects">
            Projects
          </Link>


          <Link href="#skills">
            Skills
          </Link>


          <Link href="#contact">
            Contact
          </Link>


        </div>






        {/* Theme Button */}

        <button

          onClick={toggleTheme}

          className="
            rounded-full
            border
            p-2
            transition
            hover:bg-muted
          "

          aria-label="Toggle theme"

        >

          {mounted && theme === "dark" ? (

            <Sun
              size={20}
            />

          ) : (

            <Moon
              size={20}
            />

          )}

        </button>



      </nav>


    </header>

  );

}