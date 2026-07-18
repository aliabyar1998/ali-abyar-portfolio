"use client";

import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Globe2,
  Languages,
} from "lucide-react";


const skillGroups = [

  {
    title: "Data & Technology",

    icon: BrainCircuit,

    skills: [
      "Python",
      "Data Analysis",
      "Data Science",
      "Machine Learning",
      "Big Data",
    ],
  },


  {
    title: "Business & Trade",

    icon: Globe2,

    skills: [
      "Import",
      "Export",
      "International Trade",
    ],
  },


  {
    title: "Development & Automation",

    icon: Code2,

    skills: [
      "Telegram Bots",
    ],
  },


  {
    title: "Languages",

    icon: Languages,

    skills: [
      "English",
      "Persian",
    ],
  },

];



export default function Skills() {


  return (

    <section
      id="skills"
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
          Skills
        </h2>


        <p
          className="
            mt-5
            max-w-2xl
            text-muted-foreground
          "
        >
          A combination of technical expertise,
          data skills, and international business knowledge.
        </p>


      </motion.div>





      <div
        className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
        "
      >


        {skillGroups.map((group,index)=>{


          const Icon = group.icon;


          return (

            <motion.div

              key={group.title}

              initial={{
                opacity:0,
                y:30,
              }}

              whileInView={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:index*0.1,
              }}

              viewport={{
                once:true,
              }}

              className="
                rounded-2xl
                border
                bg-card
                p-6
              "

            >


              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
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

                  {group.title}

                </h3>


              </div>





              <div
                className="
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {group.skills.map(skill=>(


                  <span

                    key={skill}

                    className="
                      rounded-full
                      border
                      px-3
                      py-1
                      text-sm
                    "

                  >

                    {skill}

                  </span>


                ))}


              </div>



            </motion.div>


          );


        })}



      </div>



    </section>

  );

}