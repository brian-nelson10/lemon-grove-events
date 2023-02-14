import React, { useState } from "react";
import "./navbar.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar({text}) {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate('/book')
  };
  function handleHome() {
    navigate('/home')
  };
  function handlePackage() {
    navigate('/packageone')
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 968) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  let drop={
    visibility: "hidden"
  };
  if(isHover){
    drop.visibility="visible"
  }
  else{
    drop.visibility="hidden"
  }

  window.addEventListener('scroll', changeColor)

  const letters = Array.from(text);

  const dropDown = {
    opened: {
      backgroundColor: "transparent",
      opacity: .8,
     top: -20,
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
      y: 1,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
  const links = {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4,
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 1.5],
      },
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
      translateY: -8,
      backgroundColor: "white"
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
      transition: {  staggerChildren: .09, delayChildren: 1.6 * i },
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
        delay: 2.5,
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
        delay: 2.75,
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
        delay: 3,
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
      <motion.nav className={color ? 'navbar z-60 bg-white opacity-[80%] fixed flex flex-wrap h-[5.5rem] w-screen -mt-6 p-1 pt-2 z-50 hover:cursor-pointer md:p-4' : 'navbar z-60 bg-transparent fixed flex flex-wrap w-screen p-1 pt-2 z-50 hover:cursor-pointer md:p-4'}>
        <div className="grid grid-cols-3 w-screen ">
          {/* {color ?  */}
       <motion.div
     className="text-xl justify-start text-start items-center pl-4 pt-5 md:text-4xl"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span className="font-larissa text-black hover:text-[#d6d6d6]" variants={child} key={index} >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div> 
    <motion.div 
      variants={links}
      className="font-larissa text-black text-center text-xl items-center pt-6 justify-center md:text-3xl">
      <motion.span onClick={handleHome} className="mx-4 links">Home</motion.span>
      <motion.button
        onClick={()=>setIsHover(!isHover)}
        className="mx-4 links"
        >Packages</motion.button>
      <motion.span onClick={handleNavigate} className="mx-4 links">Book Online</motion.span>
      </motion.div>
      

    {/* :
    <motion.div 
      className="justify-start text-start items-center -ml-3 -mt-3"
      variants={container}
      initial="hidden"
      animate="visible">
        <img className="h-[12rem]" src={logo}/>
      </motion.div>} */}
        <motion.div className="container-fluid flex flex-wrap justify-end pr-6">
        
      <motion.div
        //   variants={iconVariants}
        className="container-fluid md:pr-6"
        animate={isOpen ? "opened" : "closed"}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(!isOpen)}
        data-drawer-target="drawer-contact" data-drawer-show="drawer-contact" aria-controls="drawer-contact"
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
      </motion.div>

      </div>
      <div className="container mx-auto ">
      <motion.div variants={dropDown} initial={false} animate={isHover ? "opened" : "closed"} id="package" style={drop} className="ml-[39rem] relative z-70 bg-transparent divide-y divide-gray-100 text-center rounded-lg shadow-black shadow-sm w-44">
    <ul className="py-2 mt-2 text-sm ">
      <motion.li variants={linkVariants}>
        <div onClick={handlePackage} className="px-4 py-2 text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Package 1</div>
      </motion.li>
      <motion.li variants={linkVariants}>
        <div href="#" className="px-4 py-2 text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Package 2</div>
      </motion.li>
      <motion.li variants={linkVariants}>
        <div href="#" className="px-4 py-2 text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Package 3</div>
      </motion.li>
      <motion.li variants={linkVariants}>
        <div href="#" className="px-4 py-2 text-[#efe5dc] font-larissa text-sm hover:bg-[#efe5dc] hover:text-black">Add-Ons</div>
      </motion.li>
    </ul>
</motion.div>
</div>

    </motion.nav>
    <motion.nav
      className="h-96 w-screen fixed right-0 flex flex-col items-center justify-center align-center z-60"
      initial={false}
      
      animate={isOpen ? "opened" : "closed"}
    >
        {/* <motion.li className="link text-white font-larissa mb-7 text-2xl" variants={linkVariants}><a href="/">home</a></motion.li>
        <motion.li className="link text-white font-larissa mb-7 text-2xl" variants={linkVariants}><a href="">about</a></motion.li>
        <motion.li className="link text-white font-larissa mb-7 text-2xl" variants={linkVariants}><a href="">gallery</a></motion.li> */}
        <motion.div id="drawer-contact" variants={linkVariants} className="fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform -translate-x-full w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-contact-label">
   <h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"><svg class="w-5 h-5 mr-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>Contact us</h5>
   {/* <button type="button" data-drawer-hide="drawer-contact" aria-controls="drawer-contact" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      <span class="sr-only">Close menu</span>
   </button> */}
   <form action="#" class="mb-6">
      <div class="mb-6">
         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
         <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
      </div>
      <div class="mb-6">
         <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
         <input type="text" id="subject" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required/>
      </div>
      <div class="mb-6">
         <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
         <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
      </div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
   </form>
   <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <a href="#" class="hover:underline">info@company.com</a>
   </p>
   <p class="text-sm text-gray-500 dark:text-gray-400">
      <a href="#" class="hover:underline">212-456-7890</a>
   </p>
</motion.div>
      </motion.nav>
      </>
    

    );
};