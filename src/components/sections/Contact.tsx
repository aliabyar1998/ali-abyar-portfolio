"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";


const contactLinks = [

  {
    title: "Email",

    value: "aliabyar1997@gmail.com",

    href: "mailto:aliabyar1997@gmail.com",

    icon: Mail,
  },


  {
    title: "Phone",

    value: "+98 913 445 6180",

    href: "tel:+989134456180",

    icon: Phone,
  },


  {
    title: "GitHub",

    value: "github.com/aliabyar1998",

    href: "https://github.com/aliabyar1998",

    icon: ExternalLink,
  },


  {
    title: "LinkedIn",

    value: "linkedin.com/in/ali-abyar-8040381a1",

    href: "https://www.linkedin.com/in/ali-abyar-8040381a1/",

    icon: ExternalLink,
  },

];



export default function Contact() {


  return (

    <section
      id="contact"
      className="
        mx-auto
        max-w-7xl
        px-6
        py-24
      "
    >


      <motion.div

        initial={{
          opacity: 0,
          y: 30,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

      >

        <h2
          className="
            text-3xl
            font-bold
            md:text-4xl
          "
        >
          Contact
        </h2>


        <p
          className="
            mt-5
            max-w-2xl
            text-muted-foreground
          "
        >
          Interested in working together or discussing
          data analytics, machine learning, technology,
          or business opportunities? Feel free to reach out.
        </p>


      </motion.div>





      <div
        className="
          mt-10
          grid
          gap-5
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >


        {contactLinks.map((item, index) => {


          const Icon = item.icon;


          return (

            <motion.a

              key={item.title}

              href={item.href}

              target={
                item.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }

              rel="noopener noreferrer"


              initial={{
                opacity: 0,
                y: 30,
              }}


              whileInView={{
                opacity: 1,
                y: 0,
              }}


              transition={{
                delay: index * 0.1,
              }}


              viewport={{
                once: true,
              }}


              className="
                rounded-2xl
                border
                bg-card
                p-6
                transition
                hover:-translate-y-1
              "

            >


              <div
                className="
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-600
                  dark:text-blue-400
                "
              >

                <Icon size={25} />

              </div>





              <h3
                className="
                  font-semibold
                "
              >

                {item.title}

              </h3>





              <p
                className="
                  mt-2
                  break-all
                  text-sm
                  text-muted-foreground
                "
              >

                {item.value}

              </p>



            </motion.a>

          );


        })}



      </div>



    </section>

  );

}