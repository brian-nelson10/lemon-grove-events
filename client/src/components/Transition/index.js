import React from "react";
import { motion } from "framer-motion";
import "./transition.css";

const blackBox = {
    initial: {
      height: "100%",
      bottom: 0,
      opacity: .75
    },
    animate: {
      height: 0,
      opacity: .5,
      transition: {
        delay: 4.3,
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
        
      },
    },
  };
  const init = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: "easeIn",
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 1.5,
        when: "afterChildren",
        delay: .5
      },
    },
  };
  
  const text = {
    initial: {
      y: 0,
    },
    animate: {
      y: 1000,
      transition: {
        duration: 1,
        delay: 1.9,
      },
    },
  };

  const Transition = () => {
    // Scroll user to top to avoid showing the footer
    React.useState(() => {
      typeof windows !== "undefined" && window.scrollTo(0, 0);
    }, []);

    return (
       
        <motion.div
        className="absolute z-50 flex items-center justify-center w-full bg-[#242423]"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
          document.body.classList.remove("overflow-hidden")
        }>
             <motion.svg variants={init} className="absolute z-50 flex w-full h-full">
            <motion.svg variants={textContainer} className="absolute z-50 flex w-full h-full ">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={1750}
          height={1800}
          className="text-white"
        >
        
          <rect 
            className="w-full h-full fill-transparent" />
          <motion.rect
            variants={text}
            className="w-full h-full"
            id="rect"
          />
          
        </pattern>  
        <text
          className="back text-xlxl text-justify font-larissa w-full h-full opacity-100"
          textAnchor="middle"
          x="50%"
          y="25%"
          style={{ fill: "url(#pattern)" }}
        >
          Hello, You
        </text>
        <text
          className="back text-xlxl text-justify font-larissa w-full h-full"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Gorgeous
        </text>
        <text
          className="back text-xlxl text-justify font-larissa w-full h-full"
          textAnchor="middle"
          x="50%"
          y="75%"
          style={{ fill: "url(#pattern)" }}
        >
          Picknicker
        </text>
      </motion.svg>
      </motion.svg>
        </motion.div>

    );
  };
  export default Transition;