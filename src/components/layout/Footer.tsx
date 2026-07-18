"use client";

import Link from "next/link";


const footerLinks = [
  {
    name: "About",
    href: "#about",
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
    name: "Contact",
    href: "#contact",
  },
];



export default function Footer() {


  return (

    <footer
      className="
        border-t
        bg-background
      "
    >

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          gap-6
          px-6
          py-10
          md:flex-row
          md:items-center
          md:justify-between
        "
      >


        <div>

          <h3
            className="
              text-xl
              font-bold
            "
          >
            Ali Abyar
          </h3>


          <p
            className="
              mt-2
              text-sm
              text-muted-foreground
            "
          >
            Data Analyst | Data Scientist | Import & Export
          </p>


        </div>





        <nav
          className="
            flex
            flex-wrap
            gap-5
          "
        >

          {footerLinks.map((link)=>(

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


        </nav>





      </div>





      <div
        className="
          border-t
          py-5
          text-center
          text-sm
          text-muted-foreground
        "
      >

        © {new Date().getFullYear()} Ali Abyar. All rights reserved.

      </div>



    </footer>

  );

}