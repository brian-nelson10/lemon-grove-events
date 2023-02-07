import React from "react";
import "./sectionone.css";
import { motion } from "framer-motion";
import Img from "../../../assets/images/stockTwo.jpeg";
import basket from "../../../assets/images/threeLemons.svg";
import SectionTwo from "../SectionTwo";
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
const pic = {
    offscreen: {
        y: 100,
        opacity: 0
    },
    onscreen: {
        y: 50,
        opacity: 1,
      transition: {
        duration: 1,
        delay: .4,
        ease: "easeIn"
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
    {/* <section
  className="container flex items-center justify-center h-[20%] m-auto bg-fixed bg-center bg-cover custom-img"
> */}
{/* </section> */}
<motion.section 
    className="w-screen h-[600px] mb-20 m-auto container mx-auto">
        <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
  <motion.div 
  variants={content}
  initial="offscreen"
  whileInView="onscreen"
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
    <a className="btn btn-solid btn-white" href="" target="_self">
        <span className="texter">The Picnic.</span>
    </a>
    </div>
    </motion.div>
  <div className="zoomin frame mb-4 h-[500px] w-[800px]">
    <motion.img 
    variants={pic}
    initial="offscreen"
    whileInView="onscreen"
    alt="img"
    className=" img w-[1400px] h-[480px] " src={Img} />
  </div>
 </div>
</motion.section>
<br/><br/><br/><br/>
<section className="container flex items-center justify-center h-[30%] m-auto mb-20 bg-fixed bg-center bg-cover rounded-xl custom-img"
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
<section>
    <SectionTwo />
</section>
<motion.div 
    variants={content}
    initial="offscreen"
    whileInView="onscreen"
    className="max-w-lg m-auto">
  <p className="mb-4">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
    laoreet sem, semper molestie libero.
  </p>
  <p className="mb-4">
    Ut sagittis lacus consequat accumsan venenatis. Sed sollicitudin, lectus et
    fringilla ultrices, dolor nisi scelerisque tortor, vel finibus magna massa
    non nunc. Phasellus massa quam, egestas a nisl sed, porta volutpat metus.
    Nunc sed elit ac tellus tempor cursus. Suspendisse potenti. Vestibulum
    varius rutrum nisl nec consequat. Suspendisse semper dignissim sem viverra
    semper. Nulla porttitor, purus nec accumsan pharetra, nisi dolor condimentum
    ipsum, id consequat nulla nunc in ligula.
  </p>
  
</motion.div>
    </>
    );
};
export default SectionOne;