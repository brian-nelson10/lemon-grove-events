import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/images/stock.jpeg";


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
            delay: .5,
            ease: "easeIn"
        }
    }
}
const PackageOne = () => {
    return (
        <>
        <motion.main 
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mx-[2rem] pt-[10rem] ">
        <section className="mx-[2rem] flex items-center h-[30%] w-vw mb-20 bg-fixed bg-center bg-cover rounded-sm custom-img"
>
  <motion.div 
    variants={pack}
    initial="initial"
    whileInView="animate"
    className="p-5 font-larissa pt-11 text-[1.8rem] h-[7.5rem] text-white tracking-widest">
  Package One
  </motion.div>
</section>
<section className="grid grid-cols-3 gap-4 mx-[5rem]">
    <div>
        <img className="h-[20rem] w-[40rem]" src={img1} alt=""/>
    </div>
    <div>
        <img className="h-[20rem] w-[40rem]" src={img1} alt=""/>
    </div>
    <div>
        <img className="h-[20rem] w-[40rem]" src={img1} alt=""/>
    </div>    
</section>
<hr className="mt-10"/>
<section>
</section>
<section className="-mt-[14rem] -ml-[3rem] mb-[9rem]">
    
</section>
<br/>
        </motion.main>
        </>
    );
};
export default PackageOne;