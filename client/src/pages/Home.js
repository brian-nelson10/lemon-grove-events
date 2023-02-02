import React from "react";

// import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Hero from "../assets/images/stock.jpeg";
import Navbar from "../components/Navbar";
import Transition from "../components/Transition";
import BookButton from "../components/BookButton";
// import Loader from "../components/Loader";

export default function Home() {

    return (
        <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
            <>
            <Transition/>
              <motion.div 
                style={{backgroundImage: `url(${Hero})`}}
                className='w-screen h-screen flex flex-wrap absolute'>
                <div className="z-20">
              <Navbar className="bg-transparent" text="Lemon Grove"/>
              </div>
              <div className="heroContainer absolute flex flex-wrap">
              <motion.img
                    className=""
                  transition={{ ease: "easeIn", duration: 1.6 }}
                  src={Hero}
                  style={{width: "100vw", zIndex: 1}}
                />
                <div className="top-2/4 right-2/4 left-2/4">
               
                        <BookButton />
                </div>
              </div>
                
                
              </motion.div>
            
          </>               
      </AnimatePresence>
    </AnimateSharedLayout>
    );
};