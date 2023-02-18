import React from "react";
import "./home.css";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Hero from "../assets/images/stock.jpeg";
import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import BookButton from "../components/BookButton";
import Social from "../components/Social";
import SectionOne from "../components/Sections/SectionOne";
import Lemon from "../components/Lemon";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
const main = {
    initial: {
        x: 100,
        y: 0,
        opacity: 0
    },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: .5,
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: .3
        }
    }
};
export default function Home() {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
      const [show, setShow] = useState(false)
      const changeShow = () => {
        if (window.scrollY >= 3460) {
          setShow(true)
        } else {
          setShow(false)
        }
      }
      window.addEventListener('scroll', changeShow);
    return (
        <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
            <>
            <motion.main 
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit">
            <motion.section
                variants={main}
                initial="initial"
                animate="animate"
                exit="exit"
                className="grid grid-rows-2 z-40">
                    <motion.div className="z-50">
            <ScrollToTop/>
            </motion.div>
              <section
                style={{backgroundImage: `url(${Hero})`}}
                className='w-screen h-screen flex flex-wrap absolute'>
             <div className={show ? "invisible navi" : "navi z-30"}> 
               <Navbar text="Lemon Grove"/> 
               </div> 
              <div className="heroContainer items-center justify-center flex flex-wrap">
              <motion.img
                    className="w-screen h-screen z-10 overflow-hidden"
                  transition={{ ease: "easeIn", duration: 1.6 }}
                  src={Hero}
                />
                <div className="top-2/4 right-2/4 left-2/4">
                    <BookButton />
                </div>
                <div className="top-[7rem] left-[14rem] z-20 absolute ">
                <HeroText />
                </div>
                <div className="z-20 fixed">
                    <Social />
                </div>
              </div>
              <SectionOne />
              <section>
                <Lemon />
              </section>
              </section>  
              </motion.section>
              <section className="grid">
              <Footer/>  
              </section>
              </motion.main>
          </>               
      </AnimatePresence>
    </AnimateSharedLayout>
    );
};