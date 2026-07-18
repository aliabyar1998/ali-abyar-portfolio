"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Globe2,
  TrendingUp,
} from "lucide-react";


const experiences = [
  {
    icon: Globe2,
    title: "International Trade Research",
    period: "Import & Export",
    description:
      "Analyzing markets, exploring international opportunities, and understanding global trade flows.",
  },

  {
    icon: BarChart3,
    title: "Data Analysis",
    period: "Business Intelligence",
    description:
      "Working with data to identify patterns, generate insights, and support strategic decisions.",
  },

  {
    icon: TrendingUp,
    title: "Data Driven Strategy",
    period: "Business Growth",
    description:
      "Combining trade knowledge and analytics to create smarter business approaches.",
  },
];



export default function Experience() {

  return (

    <section
      id="experience"
      className="
        mx-auto
        max-w-7xl
        px-6
        py-24
      "
    >


      <motion.div

        initial={{
          opacity:0,
          y:30,
        }}

        whileInView={{
          opacity:1,
          y:0,
        }}

        viewport={{
          once:true,
        }}

      >

        <h2
          className="
            text-3xl
            font-bold
            md:text-4xl
          "
        >
          Professional Experience
        </h2>


        <p
          className="
            mt-5
            max-w-2xl
            text-muted-foreground
          "
        >
          My journey combines international trade knowledge with
          data analytics to solve real business problems.
        </p>


      </motion.div>







      <div
        className="
          mt-12
          space-y-6
        "
      >


        {experiences.map((item,index)=>{


          const Icon=item.icon;


          return (

            <motion.div

              key={item.title}

              initial={{
                opacity:0,
                x:-30,
              }}

              whileInView={{
                opacity:1,
                x:0,
              }}

              transition={{
                delay:index*0.1,
              }}

              viewport={{
                once:true,
              }}

              className="
                flex
                gap-6
                rounded-2xl
                border
                bg-card
                p-6
              "

            >


              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-600
                  dark:text-blue-400
                "
              >

                <Icon size={24}/>

              </div>





              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                  "
                >

                  {item.title}

                </h3>


                <p
                  className="
                    mt-1
                    text-sm
                    text-blue-600
                    dark:text-blue-400
                  "
                >

                  {item.period}

                </p>


                <p
                  className="
                    mt-3
                    text-muted-foreground
                  "
                >

                  {item.description}

                </p>


              </div>


            </motion.div>

          );


        })}



      </div>



    </section>

  );

}