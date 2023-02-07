import React from "react";
import "./home.css";
// import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Hero from "../assets/images/stock.jpeg";
import HeroText from "../components/HeroText";
import Navbar from "../components/Navbar";
import Transition from "../components/Transition";
import BookButton from "../components/BookButton";
import Social from "../components/Social";
import SectionOne from "../components/Sections/SectionOne";
// import Loader from "../components/Loader";
export default function Home() {
    React.useState(() => {
        typeof windows !== "undefined" && window.scrollTo(0, 0);
      }, []);
  
    return (
        <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
            <>
            <Transition/>
            <main className="grid grid-rows-2">
              <section
                style={{backgroundImage: `url(${Hero})`}}
                className='w-screen h-screen flex flex-wrap absolute'>
                <div className="z-30 ">
              <Navbar className="bg-transparent" text="Lemon Grove"/>
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
                <div className="z-20">
                    <Social />
                </div>
              </div>
              <SectionOne />
              </section>
              {/* <section className="z-30">
                <SectionOne />
              </section> */}
              </main>
          </>               
      </AnimatePresence>
    </AnimateSharedLayout>
    );
};