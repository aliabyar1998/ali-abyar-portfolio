"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Database,
  Globe2,
} from "lucide-react";


const cards = [
  {
    icon: Globe2,
    title: "International Trade",
    description:
      "Focused on import & export processes, market research, and understanding global business opportunities.",
  },

  {
    icon: Database,
    title: "Data Analytics",
    description:
      "Transforming raw data into meaningful insights to support smarter business decisions.",
  },

  {
    icon: BriefcaseBusiness,
    title: "Business Intelligence",
    description:
      "Combining business knowledge with data-driven strategies to improve performance.",
  },
];



export default function About() {

  return (

    <section
      id="about"
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

        transition={{
          duration: 0.5,
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

          About Me

        </h2>



        <p
          className="
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-muted-foreground
          "
        >

          I am Ali Abyar, a professional interested in international
          trade and data driven business solutions. My focus is on
          connecting market knowledge with data analytics to discover
          opportunities, optimize decisions, and create measurable value.

        </p>




      </motion.div>






      <div
        className="
          mt-12
          grid
          gap-6
          md:grid-cols-3
        "
      >


        {cards.map((card, index) => {


          const Icon = card.icon;


          return (

            <motion.div

              key={card.title}

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
                shadow-sm
                transition
                hover:-translate-y-1
              "

            >


              <div
                className="
                  mb-5
                  inline-flex
                  rounded-xl
                  bg-blue-500/10
                  p-3
                  text-blue-600
                  dark:text-blue-400
                "
              >

                <Icon size={24}/>

              </div>



              <h3
                className="
                  text-xl
                  font-semibold
                "
              >

                {card.title}

              </h3>



              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                "
              >

                {card.description}

              </p>



            </motion.div>

          );

        })}



      </div>



    </section>

  );

}