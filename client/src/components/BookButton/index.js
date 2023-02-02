import React, { useState, useEffect } from 'react';
import "./bookButton.css";
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const wordVariants = {
  hovered: {
    y: [0, -2, 0, 2, 0],
    transition: { duration: .5, ease: 'easeInOut' }
  }
}
const BookButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const uploadControls = useAnimation();
  const loadingControls = useAnimation();
  const doneControls = useAnimation();
  const loaderControls = useAnimation();
  const loadingBarControls = useAnimation();
  const animate = async () => {
    setIsAnimating(true);
    uploadControls.start({
      zIndex: 1
    });
    await loadingControls.start({
      top: 0,
      transition: { duration: .3 }
    });
    loadingBarControls.start({
      width: '100%',
      transition: { duration: 1.35 }
    });
    uploadControls.start({
      top: '-100%',
      transition: { duration: 0 }
    });
    await doneControls.start({ 
      top: 0,
      transition: { delay: 1.5, duration: .3 }
    });
    loadingControls.start({
      top: '-100%',
      transition: { duration: 0 }
    });
    loadingBarControls.start({
      width: '0%'
    });
    await uploadControls.start({ 
      top: 0,
      zIndex: 4,
      transition: { delay: 2, duration: .3 }
    });
    doneControls.start({
      top: '-100%',
      transition: { duration: 0 }
    });
   
    setIsAnimating(false);
  };
  return (
    <div className="absolute z-50 pt-6 upload-button hover:cursor-pointer justify-center bg-black items-center grid top-96 right-2/4 left-2/4">
      <div className="wrapper overflow-hidden cursor-pointer rounded-lg relative items-center justify-center" onClick={() => !isAnimating && animate()}>
        <motion.div 
          className="container bg-transparent z-10 top-0 cursor-pointer text-white"
          animate={uploadControls}
          whileHover="hovered"
        >
          <motion.div
            variants={wordVariants}
            className="pl-1 font-larissa"
            >
                Book Online
            </motion.div>
        </motion.div>
        <motion.div 
          className="-top-full bg-black z-20 absolute left-0 pt-2 h-full w-full flex justify-center items-center overflow-hidden cursor-pointer text-xl rounded-lg text-white font-larissa"
          animate={loadingControls}
        >
          <div>Setting Up..</div>
          <motion.div className="loading-bar" animate={loadingBarControls}/>
        </motion.div>
        
        <motion.div  
          className="-top-full bg-black z-30 absolute left-0 pt-2 h-full w-full flex justify-center items-center overflow-hidden cursor-pointer text-xl rounded-lg text-white font-larissa"
          animate={doneControls}
        >
          <div>Lets Go!</div>
        </motion.div>
      </div>
    </div>
  )
}

export default BookButton;