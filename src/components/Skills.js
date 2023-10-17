import React,    {useRef} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function Skills(props){
    
    const skillRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: skillRef,
        offset: ["start end", "end center"]
    });

    const position = useTransform(scrollYProgress, (pos)=>{

        return pos === 1 || pos === 0 ? "relative" : "fixed";
    });

    const visibility = useTransform(scrollYProgress, (pos)=>{

        return pos === 1 || pos === 0 ? "hidden" : "visible";
    });

    const opacity = useTransform(scrollYProgress, [0.6, 1], [1,0]);

    const nav = useTransform(scrollYProgress, (pos) => {
        if(pos > 0) props.change(2)
    });

    console.log(nav)

    const stat1 = useTransform(scrollYProgress, [0, 0.2], ["100%", "20%"]);
    const stat2 = useTransform(scrollYProgress, [0, 0.1], ["100%", "5%"]);
    const stat3 = useTransform(scrollYProgress, [0, 0.3], ["100%", "10%"]);


    return(
        <div ref={skillRef}  className='skills'>
            <motion.div ref={props.skills} style={{position, visibility, opacity}} className='skills_intro'>
                    <motion.div style={{y: stat1}} className='skills_stat_one'>

                    </motion.div>
                    <motion.h1 style={{y: stat2}} className='skills_intro_title'>SKILLS</motion.h1>
                    <motion.div style={{y: stat3}} className='skills_stat_two'>
                        
                    </motion.div>
            </motion.div>
        </div>
    )
}