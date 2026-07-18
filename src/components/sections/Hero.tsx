"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";


export default function Hero() {

  return (

    <section className="relative overflow-hidden">


      <div className="absolute inset-0 -z-10">

        <div className="
          absolute
          left-1/4
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-500/10
          blur-3xl
        " />


        <div className="
          absolute
          right-1/4
          top-40
          h-72
          w-72
          rounded-full
          bg-cyan-500/10
          blur-3xl
        " />

      </div>





      <div className="
        mx-auto
        flex
        min-h-[calc(100vh-4rem)]
        max-w-7xl
        items-center
        px-6
        py-20
      ">


        <div className="
          grid
          w-full
          gap-16
          md:grid-cols-2
          md:items-center
        ">





          {/* IMAGE */}


          <motion.div

            initial={{
              opacity:0,
              scale:0.9,
            }}

            animate={{
              opacity:1,
              scale:1,
            }}

            transition={{
              delay:0.3,
            }}

            className="
              order-1
              md:order-2
            "

          >


            <div className="
              flex
              flex-col
              items-center
              rounded-3xl
              border
              bg-card/80
              p-8
              shadow-2xl
              backdrop-blur
            ">



              <div className="relative mb-6">


                <div className="
                  absolute
                  inset-0
                  rounded-full
                  bg-black/10
                  blur-3xl
                  dark:bg-white/10
                " />


                <Image

                  src="/profile.jpg"

                  alt="Ali Abyar"

                  width={220}

                  height={220}

                  priority

                  className="
                    relative
                    h-52
                    w-52
                    rounded-full
                    border-4
                    border-white/20
                    object-cover
                    shadow-2xl
                    ring-2
                    ring-blue-500/30
                  "

                />


              </div>





              <h2 className="text-2xl font-bold">

                Ali Abyar

              </h2>




              <p className="
                mt-2
                text-center
                text-sm
                text-muted-foreground
              ">

                Data Analyst | Data Scientist | International Trade Specialist

              </p>





              <div className="
                mt-8
                w-full
                space-y-4
              ">


                <div className="
                  rounded-xl
                  border
                  bg-background
                  p-4
                ">

                  🌍 Import & Export Strategy

                </div>



                <div className="
                  rounded-xl
                  border
                  bg-background
                  p-4
                ">

                  📊 Data Analysis & Visualization

                </div>




                <div className="
                  rounded-xl
                  border
                  bg-background
                  p-4
                ">

                  🤖 Data Science & Business Intelligence

                </div>


              </div>






              <div className="
                mt-8
                flex
                w-full
                items-center
                gap-3
                rounded-xl
                border
                bg-blue-500/5
                p-4
              ">


                <TrendingUp className="text-blue-500"/>


                <div>

                  <p className="text-sm font-medium">

                    Data Driven Decisions

                  </p>


                  <p className="
                    text-xs
                    text-muted-foreground
                  ">

                    Turning information into opportunities

                  </p>


                </div>


              </div>


            </div>


          </motion.div>









          {/* TEXT */}



          <div className="
            order-2
            md:order-1
          ">


            <motion.p

              initial={{
                opacity:0,
                y:10,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:0.05,
              }}

              className="
                mb-4
                text-sm
                font-medium
                uppercase
                tracking-widest
                text-blue-600
                dark:text-blue-400
              "

            >

              Welcome — Data Meets Global Trade

            </motion.p>






            <motion.div

              initial={{
                opacity:0,
                y:20,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              transition={{
                duration:0.5,
              }}

              className="
                mb-6
                flex
                items-center
                gap-3
              "

            >


              <div className="
                rounded-full
                border
                bg-background
                p-2
              ">

                <Globe2 size={18}/>

              </div>



              <span className="
                text-sm
                font-medium
                uppercase
                tracking-widest
                text-muted-foreground
              ">

                International Trade & Data Intelligence

              </span>


            </motion.div>








            <motion.h1

              initial={{
                opacity:0,
                y:30,
              }}

              animate={{
                opacity:1,
                y:0,
              }}

              transition={{
                delay:0.1,
              }}

              className="
                text-4xl
                font-bold
                leading-tight
                md:text-6xl
              "

            >

              Hi, I'm{" "}


              <span className="text-primary">

                {portfolio.name}

              </span>



              <br />


              Turning Trade Data

              <br />

              Into Smart Decisions


            </motion.h1>







            <motion.p

              initial={{
                opacity:0,
              }}

              animate={{
                opacity:1,
              }}

              transition={{
                delay:0.2,
              }}

              className="
                mt-8
                max-w-xl
                text-lg
                leading-relaxed
                text-muted-foreground
              "

            >

              {portfolio.hero.subtitle}

            </motion.p>






            <motion.div

              initial={{
                opacity:0,
              }}

              animate={{
                opacity:1,
              }}

              transition={{
                delay:0.3,
              }}

              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "

            >


              <Button

                size="lg"

                className="
                  bg-blue-600
                  text-white
                  hover:bg-blue-700
                  dark:bg-blue-500
                  dark:hover:bg-blue-600
                "

              >

                Explore Expertise

                <ArrowRight className="
                  ml-2
                  h-4
                  w-4
                "/>


              </Button>






              <Button

                size="lg"

                variant="outline"

                className="
                  border-blue-600
                  text-blue-600
                  hover:bg-blue-50
                  dark:border-blue-400
                  dark:text-blue-400
                  dark:hover:bg-blue-950
                "

              >

                Contact Me

              </Button>



            </motion.div>



          </div>





        </div>


      </div>


    </section>

  );

}