import React from "react";
import { motion } from "framer-motion";
import img from "../../../assets/images/stockTwo.jpeg";
import icon from "../../../assets/images/basket.svg";

const SectionTwo = () => {
    return (
        <>
        <br/><br/>
            <section className="container flex ml-20 mx-auto w-screen textImage right parallax-elements-anim">
                    <div className="grid grid-cols-2 w-full gap-4 items-center justify-center">
                        <div className="mb-4 pl-8 justify-center items-center textImage__image parallax-img">
                            <motion.div className="zoomin frame">
                                <img className="img w-[1400px] h-[480px]" alt="" src={img} />
                            </motion.div>
                        </div>
                        <div className="grid-cols-1 gap-4 ml-2 justify-end items-end text-end col-md-6 col-lg-5 offset-lg-1 textImage__content parallax-text">
                            <div className="font-larissa text-[100px] ml-2">Package 1 </div>
                            <div className="text justify-end items-end text-end mb-4"><p>A curated amenity for a beach lifestyle.</p>
                            </div>
                            <div className="justify-end items-end text-end mt-[3rem] mb-[1rem] ml-[31rem]">
                            <img className="icon w-[80px] h-[100px] justify-end items-end text-end -mt-12 mb-0 ml-20" alt="" src={icon} />
                            </div>
                            <a className="btn btn-solid btn-white mr-[70px]" href="" target="_self">
                                <span className="texter">Package 1</span>
                            </a>
                    </div>
                </div>
        </section>
                </>
                )
};

export default SectionTwo;
