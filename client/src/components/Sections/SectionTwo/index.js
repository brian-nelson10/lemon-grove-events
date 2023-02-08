import React from "react";
import { motion } from "framer-motion";
import img from "../../../assets/images/stockTwo.jpeg";
import icon from "../../../assets/images/lemonbw.png";

const SectionTwo = () => {
    return (
        <>
        <br/><br/>
            <section className="container flex ml-20 mx-auto w-screen textImage right parallax-elements-anim">
                    <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div className="zoomin frame flex flex-wrap container ml-[4rem] justify-center items-center">
                                <img className="img w-[1400px] h-[480px] z-10" alt="" src={img} />
                                
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-2 mr-[4rem] justify-end items-end text-end -mt-16">
                            <div className="font-larissa text-[100px] -mb-4 ml-2">Package 1 </div>
                            <div className="text-xl font-larissa justify-end items-end text-end mb-4"><p>A curated amenity for a beach lifestyle.</p>
                            </div>
                            <div className="justify-end items-end text-end mt-[3rem] -mb-[1.5rem] ml-[18rem]">
                            <div >
                            <a className="btn btn-solid btn-white text-black border-black mr-[rem]" href="" target="_self">
                                <span className="texter">Package 1</span>
                            </a>
                            </div>
                            <div >
                            <img className="icon w-[200px] h-[180px] justify-end items-end text-end -mt-[6rem] mb-0 ml-6" alt="" src={icon} />
                            </div>
                            </div>
                    </div>
                </div>
        </section>
                </>
                )
};

export default SectionTwo;
