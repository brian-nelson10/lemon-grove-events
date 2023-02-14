import React from "react";
import { motion } from "framer-motion";
export default function Test() {
    const opac = {
        initial: {
            pathLength: 0,
           fillOpacity: 0
        },
        animate: {
           fillOpacity: [0,0,0,0,0,.2,.5,.8,1],
            pathLength: 1,
            transition: {
                duration: 2,
                delay: .5,
                ease: "easeIn"
            }
        }
    }
    return (
        <>
<motion.svg xmlns="http://www.w3.org/2000/svg" width="119.604" height="119.61" viewBox="0 0 119.604 119.61">
  <motion.path 
  initial="initial"
  animate="animate"
  variants={opac}
  strokeWidth="7"
  stroke="black" 
  fill="black"
  id="Up-Arrow-Icon-SVG-0987678" d="M59.8,0a59.8,59.8,0,1,0,59.8,59.8A59.866,59.866,0,0,0,59.8,0m0,113.315a53.51,53.51,0,1,1,53.51-53.51,53.568,53.568,0,0,1-53.51,53.51M80.914,63.872a3.149,3.149,0,1,1-4.457,4.451L59.8,51.665,43.142,68.322a3.147,3.147,0,1,1-4.451-4.451L57.571,44.986a3.157,3.157,0,0,1,4.457,0Z" transform="translate(-0.001)"/>
</motion.svg>


</>
    )
};