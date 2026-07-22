"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


export default function BackToTop() {

  const [visible, setVisible] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);



  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };



  return (

    <AnimatePresence>

      {visible && (

        <motion.button

          initial={{
            opacity:0,
            scale:0.8,
          }}

          animate={{
            opacity:1,
            scale:1,
          }}

          exit={{
            opacity:0,
            scale:0.8,
          }}

          onClick={scrollToTop}

          className="
            fixed
            bottom-6
            right-6
            z-50
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#60A5FA]
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#3B82F6]
            hover:scale-110
          "

          aria-label="Back to top"

        >

          <ArrowUp size={22}/>


        </motion.button>

      )}

    </AnimatePresence>

  );

}