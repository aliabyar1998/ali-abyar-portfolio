"use client";

import Link from "next/link";
import {
  Moon,
  Sun,
  Menu,
  X,
} from "lucide-react";

import {
  useTheme
} from "@/components/providers/theme-provider";

import {
  useEffect,
  useState
} from "react";



const links = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
  name: "Education",
  href: "#education",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];



export default function Navbar() {


  const {
    theme,
    toggleTheme,
  } = useTheme();



  const [mounted, setMounted] = useState(false);

  const [open, setOpen] = useState(false);



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





        {/* Desktop Menu */}

        <div
          className="
            hidden
            items-center
            gap-8
            md:flex
          "
        >

          {links.map((link) => (

            <Link

              key={link.name}

              href={link.href}

              className="
                text-sm
                text-muted-foreground
                transition
                hover:text-foreground
              "

            >

              {link.name}

            </Link>

          ))}


        </div>







        {/* Actions */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >



          <button

            onClick={toggleTheme}

            className="
              rounded-full
              border
              p-2
              transition
              hover:bg-muted
            "

          >

            {mounted && theme === "dark" ? (

              <Sun size={18}/>

            ) : (

              <Moon size={18}/>

            )}


          </button>





          {/* Mobile Menu Button */}


          <button

            onClick={() => setOpen(!open)}

            className="
              rounded-full
              border
              p-2
              md:hidden
            "

          >

            {open ? (

              <X size={18}/>

            ) : (

              <Menu size={18}/>

            )}

          </button>


        </div>



      </nav>






      {/* Mobile Menu */}


      {open && (

        <div
          className="
            border-t
            px-6
            py-5
            md:hidden
          "
        >

          <div
            className="
              flex
              flex-col
              gap-4
            "
          >


            {links.map((link)=>(


              <Link

                key={link.name}

                href={link.href}

                onClick={() => setOpen(false)}

                className="
                  text-muted-foreground
                  hover:text-foreground
                "

              >

                {link.name}

              </Link>


            ))}


          </div>


        </div>

      )}



    </header>

  );

}