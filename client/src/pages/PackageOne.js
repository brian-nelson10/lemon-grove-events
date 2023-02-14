import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/stock.jpeg";
import Contact from "../components/Contact";
import Lemon from "../components/Lemon";
import Footer from "../components/Footer";
// import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import lemon from "../assets/images/lemonbw.png";
import Button from "../components/Button";
import BookButton from "../components/BookButton";

const main = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: .3
        }
    }
}
const pack = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: .8,
            ease: "easeIn"
        }
    }
}
const PackageOne= () => {
    // const navigate = useNavigate();
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 675) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
        <div className={color ? "z-50 fixed top-0 transition-ease hidden" : "z-50 fixed top-0 transition-ease visible"}>
        <Navbar text="Lemon Grove" className="bg-white"/>
        </div>
        <motion.main 
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-[2rem] mt-[7rem] z-40">
                
        <section className="grid grid-cols-2 mx-[2rem] flex items-center h-[30%] w-vw mb-20 bg-fixed bg-center bg-cover rounded-sm custom-img"
>

  <motion.div 
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white tracking-widest">
  Package One
  </motion.div>
</section>
<section>
<section class="mb-32 text-gray-800">
<div class="container mx-auto xl:px-32 text-center lg:text-left">
  <div class="grid lg:grid-cols-2 flex items-center">
    <div class="mb-12 lg:mb-0">
      <div
        className="block rounded-lg shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14"
        style={{ background: "hsla(0, 0%, 100%, 0.55)", backdropFilter: "blur(30px)"}}
      >
      <h3 class="text-[2rem] font-roboto mb-3">Do you want to plan a perfect date to show your partner how much they mean to you?</h3>
      <h5 class="text-lg font-roboto font-bold mb-12 lg:mb-10 xl:mb-12">Let us deliver your perfect day</h5>

      <p class="font-bold font-larissa text-[3rem] tracking-widest mb-4">Package One</p>
      <ul>
        <li className="flex items-center justify-start">
            <div className="w-[10%] h-[10%] mt-2 mx-2">
            <img src={lemon}/>
            </div><p className="font-roboto text-lg">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start">
            <div className="w-[10%] h-[10%] mt-2 mx-2">
            <img src={lemon}/>
            </div><p className="font-roboto text-lg">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start">
            <div className="w-[10%] h-[10%] mt-2 mx-2">
            <img src={lemon}/>
            </div><p className="font-roboto text-lg">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start">
            <div className="w-[10%] h-[10%] mt-2 mx-2">
            <img src={lemon}/>
            </div><p className="font-roboto text-lg">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start">
            <div className="w-[10%] h-[10%] mt-2 mx-2">
            <img src={lemon}/>
            </div><p className="font-roboto text-lg">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start">
            <div className="w-[10%] h-[10%] mt-2 mx-2">
            <img src={lemon}/>
            </div><p className="font-roboto text-lg">Lorem epsum.</p>
        </li>
        <li className="flex items-center justify-start">
            <p className="font-larissa text-lg">Price $399.</p>
        </li>

      </ul>
      <div className="grid grid-cols-2">
        <div className="grid z-50">
            <Button text="button"/>
        </div>
        <div className="grid z-50">
            <Button text="button"/>
        </div>
      </div>
      </div> 
    </div>

    <div>
      <div
        // src={img1}
        class="w-full rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] h-[50rem] bg-fixed bg-center bg-cover custom-img"
        alt=""
      />
    </div>
  </div>
</div>
</section>
</section>
<section className="grid -mt-[18rem] -ml-[3rem] mb-[9rem] z-50">
    <div className=" z-50" >
    <Contact />
    </div>
    <br/>
    <div className="grid z-40" >
    <Lemon />
    </div>
</section>
<br/>
        </motion.main>
        <Footer/>
        </>
    );
};
export default PackageOne;