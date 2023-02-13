import { motion } from "framer-motion";
import React from "react";
import "./test.css"
// import { motion } from "framer-motion";
const main = {
    initial: {
        x: 100,
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
export default function Test() {
    // const opac = {
    //     initial: {
    //         pathLength: 0,
    //         fillOpacity: 0
    //     },
    //     animate: {
    //         pathLength: 2,
    //         fillOpacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .1, .1, .2, .3, .4, .5, .6, .8, .9, 1],
    //         transition: {
    //             duration: 3,
    //             delay: .5,
    //             ease: "easeIn"
    //         }
    //     }
    // }
    return (
        <>
        <motion.div
        variants={main}
        initial="initial"
        animate="animate"
        exit="exit">
<img class="mask" src="http://webcreatorbox.com/sample/images/rose.jpg" alt="Rose"/>

<svg>
<clipPath id="svgPath">
	<text x="10" y="150" textLength="600" font-family="Knewave" font-size="100px">She said YES!</text>
</clipPath>
</svg>
</motion.div>
</>
    )
};