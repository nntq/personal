import {React, useRef} from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'

export default function About(props){

    const introRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: introRef,
        offset: ["start end", "center end"]
    });

    //for not having to scrollProgress
    const imgRef = useRef(null);
    const scrollDataImg = useScroll({
        target: imgRef,
        offset: ["start start", "1.56 center"]
    });
    

    const scrollForImg = scrollDataImg.scrollYProgress

    const x = useTransform(scrollYProgress, [0, 0.9],["100%", "0%"] )
    const y = useTransform(scrollYProgress, [0, 0.4], ["0%","-50%"])
    
    
    const scale = useTransform(scrollForImg, [0, 1], [1, 10])
    const position = useTransform(scrollForImg, (pos) => {
        return pos === 1 ? "relative" : "fixed";
    });
    const nav = useTransform(scrollForImg, (pos) => {
        if(pos > 0) props.change(1)
    });
    console.log(nav);
    const yImg = useTransform(scrollForImg, [0, 0.8], ["0%", "-90%"]);
    const opacityImg = useTransform(scrollForImg, [0, 0.9, 1], [1, 1, 0]);



    return (
        <div className='about'>   
        <motion.div ref={introRef} style={{y, position, opacity: opacityImg}} className='about_transition'>
            <motion.div  className='about_intro'>
                <motion.div style={{x}} className='about_intro_inner'>
                    <h1>About<br/>
                        me
                    </h1>
                <motion.div style={{scale, y:yImg}} ref={imgRef} className='about_intro_img'>
                    <img alt="" className='sky_img' src={require("../imgs/sky.jpeg")} />
                </motion.div>
                </motion.div>
            </motion.div>
            
        </motion.div>
        </div>
    );
}