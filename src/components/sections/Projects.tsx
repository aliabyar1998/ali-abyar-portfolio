"use client";

import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";


const projects = [

  {
    icon: Database,

    title: "E-Commerce Data Analysis",

    description:
      "A complete data analysis project focused on cleaning and analyzing online store sales data. The project includes Exploratory Data Analysis (EDA), RFM customer segmentation, and Apriori algorithm to discover customer behavior and product purchase patterns.",

    tags: [
      "Python",
      "Pandas",
      "EDA",
      "RFM Analysis",
      "Apriori",
    ],

    github:
      "https://github.com/aliabyar1998/ecommerce-data-analysis",
  },



  {
    icon: BrainCircuit,

    title: "Airline Passenger Satisfaction Prediction",

    description:
      "A machine learning project to predict airline passenger satisfaction using a dataset of 129K+ records. The pipeline includes data preprocessing, encoding, feature selection, and comparison of Logistic Regression, Random Forest, and Gradient Boosting models. Random Forest achieved the best performance with 96% accuracy. Business analysis was also performed to identify the key factors affecting passenger satisfaction.",

    tags: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Feature Selection",
      "Business Analysis",
    ],

    github:
      "https://github.com/aliabyar1998/airline-passenger-satisfaction-prediction",
  },

];




export default function Projects() {


  return (

    <section
      id="projects"
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
          Projects
        </h2>


        <p
          className="
            mt-5
            max-w-2xl
            text-muted-foreground
          "
        >
          Real world projects combining data analytics,
          machine learning, and business intelligence.
        </p>


      </motion.div>







      <div
        className="
          mt-12
          grid
          gap-8
          md:grid-cols-2
        "
      >



        {projects.map((project, index) => {


          const Icon = project.icon;



          return (

            <motion.div


              key={project.title}


              initial={{
                opacity: 0,
                y: 40,
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
                p-8
                shadow-sm
                transition
                hover:-translate-y-1
              "

            >




              <div
                className="
                  mb-6
                  inline-flex
                  rounded-xl
                  bg-blue-500/10
                  p-3
                  text-blue-600
                  dark:text-blue-400
                "
              >

                <Icon size={28}/>

              </div>






              <h3
                className="
                  text-2xl
                  font-semibold
                "
              >

                {project.title}

              </h3>






              <p
                className="
                  mt-4
                  leading-relaxed
                  text-muted-foreground
                "
              >

                {project.description}

              </p>







              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                "
              >

                {project.tags.map((tag)=>(


                  <span

                    key={tag}

                    className="
                      rounded-full
                      border
                      px-3
                      py-1
                      text-xs
                    "

                  >

                    {tag}

                  </span>


                ))}


              </div>







              <a

                href={project.github}

                target="_blank"

                rel="noopener noreferrer"


                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-blue-600
                  hover:underline
                  dark:text-blue-400
                "

              >

                <ExternalLink size={18}/>

                View GitHub Repository


              </a>





            </motion.div>


          );


        })}



      </div>



    </section>

  );

}