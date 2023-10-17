import React, {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function AboutMB(){

    const introRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: introRef,
        offset: ["start end", "end start"]
    });

    const position = useTransform(scrollYProgress, (pos) => {
        console.log(pos)
        return pos>0&&pos<1 ? "fixed" : "relative";
    })

    const imgRef = useRef(null);
    const scrollDataImg = useScroll({
        target: imgRef,
        offset: ["start start", "1.56 center"]
    });
    

    const scrollForImg = scrollDataImg.scrollYProgress;

    const visibility = useTransform(scrollYProgress, (pos) => {
        console.log("position "+pos);
        return pos>0&&pos<1 ? "visible" : "hidden";
    })

    const y = useTransform(scrollYProgress, [0, 0.2], ["50%", "0%"]);

    const scale = useTransform(scrollForImg, [0.1, 1], [1, 25]);
    const yImg = useTransform(scrollForImg, [0.1, 0.8], ["0%", "-120%"]);
    const opacityImg = useTransform(scrollForImg, [0, 0.5, 0.8], [1, 1, 0]);
    const opacity = useTransform(scrollForImg, [0, 0.5], [1, 0])

    return (
        <div ref={introRef} className='about-mb'>
            <motion.div style={{position, y}} className='about-mb_inner'>
                <motion.div style={{opacity}} className='about-mb_transition'>

                </motion.div>
                <motion.div style={{opacity}} className='about-mb_title'>
                    <h1>About</h1>
                </motion.div>
                <motion.div ref={imgRef} style={{scale, y: yImg, opacity: opacityImg, visibility}} className='about-mb_img'>
                    <img alt="" className='sky_img-mb' src={require("../imgs/sky.jpeg")} />
                </motion.div>
            </motion.div>
        </div>
    )
}