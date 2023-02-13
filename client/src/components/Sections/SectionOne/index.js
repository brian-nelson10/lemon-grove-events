import React from "react";
import "./sectionone.css";
import { motion } from "framer-motion";
import Img from "../../../assets/images/stockTwo.jpeg";
import basket from "../../../assets/images/threeLemons.svg";
import SectionTwo from "../SectionTwo";
import SectionThree from "../SectionThree";
import Footer from "../../Footer";
import SectionFour from "../SectionFour";
import Menu from "../../Menu";
import Contact from "../../Contact";
import Lemon2 from "../../Lemon/lemon2";
const content = {
    offscreen: {
        y:100,
        opacity: 0
    },
    onscreen: {
        y: 50,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2,
            restDelta: 0.001,
            delay: .5
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
            delay: .5,
            ease: "easeIn"
        }
    }
}
const SectionOne = () => {
    
    return(
    <>
<motion.section 
    variants={content}
    initial="offscreen"
    whileInView="onscreen"
    className="w-screen h-[600px] mb-20 m-auto container mx-auto bg-[#efe5dc]">
        <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
  <div 
  
  className="mb-4 ml-12 pl-8 justify-center items-center">
    <div className="font-larissa text-[100px] ml-2">
        Picnic.
        </div>
  <div className="justify-center items-center">
    <img className="w-[180px] h-[200px] justify-center items-center -mt-12 mb-0 ml-20" src={basket}/>
  </div>
  <p className="w-[50%] justify-center items-center text-center ml-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. </p>
    <div className="container mt-8 ml-[105px] justify-center items-center">
    <a className="btn btn-solid btn-white text-black border-black" href="" target="_self">
        <span className="texter">The Picnic.</span>
    </a>
    </div>
    </div>
  <div className="zoomin frame mb-4 h-[500px] w-[800px]">
    <img 
    alt="img"
    className="img w-[1400px] h-[480px] -ml-[5rem]" src={Img} />
  </div>
 </div>
</motion.section>
<br/><br/><br/><br/>
<section className="container flex items-center justify-center h-[30%] m-auto -mb-10 bg-fixed bg-center bg-cover rounded-xl custom-img"
>
  <motion.div 
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa text-[5rem] text-white tracking-widest">
  The Packages.
  </motion.div>
</section>
<br/>
<motion.section
variants={content}
initial="offscreen"
whileInView="onscreen">
    <SectionTwo />
</motion.section>
<motion.section
variants={content}
initial="offscreen"
whileInView="onscreen">
    <SectionThree />
</motion.section>
<motion.section
variants={content}
initial="offscreen"
whileInView="onscreen">
    <SectionFour />
</motion.section>
<section>
    <Menu />
</section>
<br/>
{/* <Lemon2/> */}
<section>
    <Contact/>
</section>
<motion.div 
    variants={content}
    initial="offscreen"
    whileInView="onscreen"
    className="mt-[100px] bottom-0">
 <Footer/>
</motion.div>
    </>
    );
};
export default SectionOne;