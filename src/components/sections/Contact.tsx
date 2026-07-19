"use client";

"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const contactLinks = [
  {
    title: "GitHub",

    value: "github.com/aliabyar1998",

    label: "View GitHub Profile",

    href: "https://github.com/aliabyar1998",

    icon: FaGithub,
  },

  {
    title: "LinkedIn",

    value: "linkedin.com/in/ali-abyar-8040381a1",

    label: "Connect on LinkedIn",

    href: "https://www.linkedin.com/in/ali-abyar-8040381a1/",

    icon: FaLinkedin,
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
          Get in Touch
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
          Whether you'd like to discuss data analytics, machine
          learning, international trade, or potential collaboration,
          I'd be happy to connect.
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
        {contactLinks.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
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
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-blue-500/10
                  text-blue-600
                  dark:text-blue-400
                "
              >
                <Icon size={28} />
              </div>

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
                  mt-3
                  text-sm
                  text-muted-foreground
                "
              >
                {item.value}
              </p>

              <span
                className="
                  mt-6
                  inline-flex
                  items-center
                  rounded-lg
                  bg-blue-600
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-blue-700
                  dark:bg-blue-500
                  dark:hover:bg-blue-600
                "
              >
                {item.label}
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}