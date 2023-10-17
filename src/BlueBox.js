import {React, useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function BlueBox(){

    const targetRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })

    const width = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"])
    const height = useTransform(scrollYProgress, [0.1, 0.8], ["50%", "100%"])
    const opacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

    return (
        <div ref={targetRef} className='scaling'>
        <motion.div style={{width, height}} className='blue_box'
      >
        <motion.p style={{opacity}}>lorem</motion.p>
      </motion.div>
      </div>
    )
}