"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
} from "lucide-react";


const education = [
  {
    degree: "Master's Student in Computer Engineering",
    university: "Azad University",
    period: "Currently Studying",
    description:
      "Continuing advanced studies in Computer Engineering with a focus on technology, programming, and data-driven solutions.",
  },

  {
    degree: "Bachelor of Computer Engineering",
    university: "Azad University",
    period: "Completed",
    description:
      "Built a strong foundation in computer science, software development, algorithms, and engineering principles.",
  },
];



export default function Education() {


  return (

    <section
      id="education"
      className="
        mx-auto
        max-w-7xl
        px-6
        py-10
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
          Education
        </h2>


      </motion.div>





      <div
        className="
          mt-12
          space-y-6
        "
      >

        {education.map((item,index)=>(


          <motion.div

            key={item.degree}

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
                text-orange-500
                dark:text-orange-400
              "
            >

              <GraduationCap size={25}/>

            </div>




            <div>


              <h3
                className="
                  text-xl
                  font-semibold
                "
              >

                {item.degree}

              </h3>



              <p
                className="
                  mt-1
                  text-sm
                  text-blue-600
                  dark:text-blue-400
                "
              >

                {item.university}

              </p>




              <p
                className="
                  mt-1
                  text-sm
                  text-muted-foreground
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


        ))}


      </div>



    </section>

  );

}