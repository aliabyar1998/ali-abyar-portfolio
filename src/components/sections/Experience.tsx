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
    title: "International Trade",
    period: "Import & Export",
    description:
      "Focused on import & export operations, market research, and identifying global business opportunities.",
  },

  {
    icon: BarChart3,
    title: "Data Analytics",
    period: "Business Intelligence",
    description:
      "Transforming raw data into meaningful insights to support strategic and data-driven business decisions.",
  },

  {
    icon: TrendingUp,
    title: "Data Driven Strategy",
    period: "Business Growth",
    description:
      "Combining international trade knowledge with analytics to optimize performance and create measurable value.",
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
          Areas of Expertise
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
          My expertise combines international trade, data analytics,
          and business intelligence to transform data into actionable
          insights and support smarter business decisions.
        </p>
      </motion.div>

      <div
        className="
          mt-12
          space-y-6
        "
      >
        {experiences.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
              }}
              viewport={{
                once: true,
              }}
              className="
                flex
                gap-6
                rounded-2xl
                border
                bg-card
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
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
                <Icon size={24} />
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
                    font-medium
                    text-blue-600
                    dark:text-blue-400
                  "
                >
                  {item.period}
                </p>

                <p
                  className="
                    mt-3
                    leading-7
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