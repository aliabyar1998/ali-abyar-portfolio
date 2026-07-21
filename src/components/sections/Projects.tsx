"use client";

import { motion } from "framer-motion";
import {
  Database,
  BrainCircuit,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    icon: BrainCircuit,

    title: "Online Retail Sales Forecasting & Business Analytics",

    description:
      "Built a complete machine learning pipeline to forecast monthly sales using more than 541,000 real UK online retail transactions. The project included data cleaning, time-series feature engineering, model comparison, and business analytics to identify seasonal trends, peak sales periods, and customer purchasing behavior.",

    tags: [
      "Python",
      "Machine Learning",
      "Time Series",
      "Random Forest",
      "Gradient Boosting",
      "Business Analytics",
    ],

    github:
      "https://github.com/aliabyar1998/Online-Retail",
  },

  {
    icon: Database,

    title: "E-Commerce Data Analysis",

    description:
      "Performed end-to-end data analysis on e-commerce sales data, including data cleaning, exploratory data analysis (EDA), RFM customer segmentation, and Market Basket Analysis using the Apriori algorithm to generate actionable business insights.",

    tags: [
      "Python",
      "Pandas",
      "EDA",
      "RFM",
      "Apriori",
    ],

    github:
      "https://github.com/aliabyar1998/ecommerce-data-analysis",
  },

  {
    icon: BrainCircuit,

    title: "Airline Passenger Satisfaction Prediction",

    description:
      "Developed a machine learning model using more than 129,000 airline passenger records. The project covered preprocessing, feature engineering, feature selection, model comparison, and business interpretation, achieving over 96% accuracy with Random Forest.",

    tags: [
      "Python",
      "Machine Learning",
      "Random Forest",
      "Scikit-Learn",
      "Business Intelligence",
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
        py-16
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
          Featured Projects
        </h2>

        <p
          className="
            mt-5
            max-w-4xl
            text-lg
            leading-8
            text-muted-foreground
          "
        >
          A selection of projects demonstrating my experience in
          data analytics, machine learning, business intelligence,
          and real-world problem solving.
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
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                h-full
                flex-col
                rounded-2xl
                border
                bg-card
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-blue-500/40
              "
            >
              <div
                className="
                  mb-6
                  inline-flex
                  w-fit
                  rounded-xl
                  bg-blue-500/10
                  p-4
                  text-blue-600
                  dark:text-blue-400
                "
              >
                <Icon size={30} />
              </div>

              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  mt-5
                  flex-1
                  leading-8
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
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      bg-blue-500/5
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      transition-colors
                      hover:border-blue-500
                      hover:text-blue-600
                      dark:hover:text-blue-400
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-2
      rounded-xl
      bg-blue-600
      px-4
      py-2
      text-sm
      font-medium
      text-white
      transition-all
      hover:bg-blue-700
      hover:scale-105
      dark:bg-blue-500
      dark:hover:bg-blue-600
    "
  >
    <ExternalLink size={18} />
    View on GitHub
  </a>
</div>
            </motion.div>
                      );
        })}
      </div>
    </section>
  );
}