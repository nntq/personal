import {React, useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function Box(){

    const targetRef = useRef(null)

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start center", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.6, 0])


    return(
    <motion.div style={{opacity}} ref={targetRef} className='box'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      ></motion.div>
    );
}