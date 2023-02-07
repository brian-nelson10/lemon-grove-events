import React from "react";
import "./test.css";
// import { motion } from "framer-motion";
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
<img class="mask" src="http://webcreatorbox.com/sample/images/rose.jpg" alt="Rose"/>

<svg>
<clipPath id="svgPath">
	<text x="10" y="150" textLength="600" font-family="Knewave" font-size="100px">She said YES!</text>
</clipPath>
</svg>
</>
    )
};