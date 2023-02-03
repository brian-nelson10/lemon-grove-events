import React from 'react';
import { motion } from "framer-motion";
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
const log = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 6.5,
        duration: 2.5,
        ease: [0.6, -0.05, 0.01, 2.5],
      },
    },
  };
const Social = () => {
    return (
<motion.div 
    variants={log} 
    initial="initial"
    animate="animate"
    className="social flex flex-col absolute gap-8 left-[50px] bottom-[20px] w-50px ">
            <div className="socialIndicator w-50px">
              <p className='text-[1.8rem] text-white tracking-[1rem] rotate-90 -translate-y-[90px] -translate-x-[75px] text-larissa'>Social</p>
              <img className='max-h-6 translate-x-[5px]' src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="socialText text-white inline-block tracking-5px text-[1.6rem] mb-[3rem] -translate-x-[1px]">
              <ul>
                <li>
                  <a
                    href="http://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className='mb-[2rem]'/>
                  </a>
                </li>
                 <li>
                  <a
                    href="http://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className='mb-[2rem]'/>
                  </a>
                </li>
                <li>
                  <a
                    href="http://instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className='mb-[2rem]'/>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
)};
export default Social;