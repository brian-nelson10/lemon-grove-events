import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";

export default function Navbar({text}) {
  const [isOpen, setIsOpen] = useState(false);
  const letters = Array.from(text);
  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };
  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  const lineTop = {
    opened: {
      rotate: 45,
      translateY: 10
    },
    closed: {
       rotate: 0,
       translateY: 0    
    },
  }
  const lineMiddle = {
    opened: {
      opacity: 0
    },
    closed: {
      opacity: 1
    },
  }
  const lineBottom = {
    opened: {
      rotate: -45,
      translateY: -8
    },
    closed: {
       rotate: 0,
       traslateY: 0
    },
  }
// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {  staggerChildren: .09, delayChildren: 3.6 * i },
    }),
  };
// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  const child1 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 3.5,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  const child2 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 3.75,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  const child3 = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: 4,
        duration: 2,
      },
    },
    hidden: {
      opacity: 0,
      x: 0,
      y: -50,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 2,
        timing: [2, 1, 1, 1]        
      },
    },
  };
  return (
      <>
      <motion.nav className="relative flex flex-wrap bg-transparent w-screen p-1 pt-2 z-50 hover:cursor-pointer md:p-4">
        <div className="grid grid-cols-2 w-screen ">
      <motion.div
     className="text-xl justify-start text-start items-center pl-4 pt-5 md:text-4xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span className="font-larissa text-black font-normal hover:text-[#d6d6d6]" variants={child} key={index} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
        <motion.div className="container-fluid flex flex-wrap justify-end pr-6">
        
      <motion.div
        //   variants={iconVariants}
        className="container-fluid md:pr-6"
        animate={isOpen ? "opened" : "closed"}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.svg 
            className="w-14 h-15 sm:w-20 h-20" 
             viewBox="0 0 90 90" id="emoji" xmlns="http://www.w3.org/2000/svg">
          <g id="color" />
          <g id="hair" />
          <g id="skin" />
          <g id="skin-shadow" />
          <motion.g 
            animate={isOpen ? "opened" : "closed"}
            initial={false}
            id="line">
              <motion.g 
          variants={child3} 
          initial="hidden"
          animate="visible">
            <motion.line className="line top" animate={isOpen ? "opened" : "closed"}
            initial={false} variants={lineTop} transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="26" y2="26" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
            </motion.g>
            <motion.g 
          variants={child2} 
          initial="hidden"
          animate="visible">
            <motion.line className="line middle" animate={isOpen ? "opened" : "closed"}
            initial={false} variants={lineMiddle}  transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="36" y2="36" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
            </motion.g>
            <motion.g 
          variants={child1} 
          initial="hidden"
          animate="visible">
            <motion.line className="line bottom" animate={isOpen ? "opened" : "closed"}
            initial={false} variants={lineBottom}  transition={{ type: "spring", stiffness: 260, damping: 20 }} x1="16" x2="76" y1="46" y2="46" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" />
            </motion.g>
          </motion.g>
        </motion.svg>
        </motion.div>
        <motion.div>
        
        </motion.div>
        
      </motion.div>
      </div>
    </motion.nav>
    
    <motion.nav
      className="bg-transparent h-96 w-screen fixed top-0 flex flex-col items-center justify-center align-center z-10"
      initial={false}
      variants={menuVariants}
      animate={isOpen ? "opened" : "closed"}
    >
        <motion.li className="link text-white font-larissa mb-7 text-2xl" variants={linkVariants}><a href="">home</a></motion.li>
        <motion.li className="link text-white font-larissa mb-7 text-2xl" variants={linkVariants}><a href="">about</a></motion.li>
        <motion.li className="link text-white font-larissa mb-7 text-2xl" variants={linkVariants}><a href="">gallery</a></motion.li>
      </motion.nav>
      </>
    

    );
};