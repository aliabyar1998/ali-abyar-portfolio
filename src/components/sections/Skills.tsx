"use client";

import { motion } from "framer-motion";

import {
  Database,
  BrainCircuit,
  BarChart3,
  Globe2,
} from "lucide-react";

const skillCategories = [
  {
    icon: Database,

    title: "Data Analytics",

    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Excel",
    ],
  },

  {
    icon: BrainCircuit,

    title: "Machine Learning",

    skills: [
      "Scikit-Learn",
      "Random Forest",
      "Logistic Regression",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },

  {
    icon: BarChart3,

    title: "Business Intelligence",

    skills: [
      "Power BI",
      "Tableau",
      "Data Visualization",
      "Dashboard Design",
    ],
  },

  {
    icon: Globe2,

    title: "International Trade",

    skills: [
      "Import & Export",
      "Market Research",
      "Trade Analysis",
      "Business Strategy",
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
          Technical Skills
        </h2>

        <p
          className="
            mt-5
            max-w-3xl
            text-lg
            leading-8
            text-muted-foreground
          "
        >
          A combination of technical expertise, analytical thinking,
          and international trade knowledge used to solve real-world
          business challenges.
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
        {skillCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <motion.div
              key={category.title}
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
                rounded-2xl
                border
                bg-card
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
                hover:border-blue-500/40
              "
            >
              <div
                className="
                  mb-6
                  inline-flex
                  rounded-xl
                  bg-blue-500/10
                  p-4
                  text-blue-600
                  dark:text-blue-400
                "
              >
                <Icon size={28} />
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                "
              >
                {category.title}
              </h3>

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      bg-blue-500/5
                      px-4
                      py-2
                      text-sm
                      font-medium
                      transition-colors
                      hover:border-blue-500
                      hover:text-blue-600
                      dark:hover:text-blue-400
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