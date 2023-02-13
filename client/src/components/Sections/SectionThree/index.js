import React from "react";
import { motion } from "framer-motion";
import img from "../../../assets/images/stockTwo.jpeg";
import icon from "../../../assets/images/lemonbw2.png";

const SectionThree = () => {
    return (
        <>
        <br/><br/>
            <section className="container flex ml-20 mx-auto w-screen textImage right parallax-elements-anim">
                    <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="grid-cols-1 gap-4 ml-[4rem] justify-start items-start text-start col-md-6 col-lg-5 offset-lg-1 textImage__content parallax-text">
                            <div className="font-larissa text-[100px] ml-2">Package 2</div>
                            <div className="text-xl font-larissa justify-start items-start text-start mb-4"><p>A curated amenity for a beach lifestyle.</p>
                            </div>
                            <div className="justify-start items-start text-start mt-[3rem] mb-[1rem] ml-[31rem]">
                            <img className="icon w-[200px] h-[180px] justify-start items-start text-start -mt-[2rem] mb-0 -ml-[16rem] mr-2" alt="" src={icon} />
                            </div>
                            <a className="btn btn-solid btn-white ml-[2rem] -mt-[15rem]" href="" target="_self">
                                <span className="texter">Package 2</span>
                            </a>
                    </div>
                    <div className="mb-4 pl-8 justify-center items-center">
                            <motion.div className="zoomin frame flex flex-wrap container justify-center items-center -ml-[4rem]">
                                <img className="img w-[1400px] h-[480px]" alt="" src={img} />
                            </motion.div>
                        </div>
                </div>
        </section>
                </>
                )
};

export default SectionThree;
