import React, {useRef} from 'react'
import {useScroll, useTransform, motion} from 'framer-motion'

export default function SkillsMB(){

    const skillRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: skillRef,
        offset: ["start end", "2.05 start"]
    });

    const position = useTransform(scrollYProgress, (pos)=>{

        return pos === 1 || pos === 0 ? "relative" : "fixed";
    });

    const opacity = useTransform(scrollYProgress, [0.6, 0.8], [1,0]);


    const stat1 = useTransform(scrollYProgress, [0, 0.2], ["100%", "20%"]);
    const stat2 = useTransform(scrollYProgress, [0, 0.1], ["100%", "5%"]);
    const stat3 = useTransform(scrollYProgress, [0, 0.3], ["100%", "10%"]);

    return (
        <div ref={skillRef} className='skills-mb'>
            <motion.div style={{position, opacity}} className='skills_intro'>
                    <motion.div style={{y: stat1}} className='skills_stat_one'>

                    </motion.div>
                    <motion.h1 style={{y: stat2}} className='skills_intro_title'>SKILLS</motion.h1>
                    <motion.div style={{y: stat3}} className='skills_stat_two'>
                        
                    </motion.div>
            </motion.div>
        </div>
    )
}