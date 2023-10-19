import { useScroll, useTransform, motion } from 'framer-motion';
import React, {useRef} from 'react'


export default function AboutContentMB(props){

    const aboutContentRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: aboutContentRef,
        offset: ["start end", "end start"]
    });

    const position = useTransform(scrollYProgress, (pos) => {
        return pos>0&&pos<1 ? "fixed" : "relative";
    })

    const visibility = useTransform(scrollYProgress, (vis) => {
        return vis === 1 || vis === 0 ? "hidden" : "visible";
    })

    const yWave = useTransform(scrollYProgress, [0.3, 0.5], ["30%", "-100%"])

    return (
        <div ref={aboutContentRef} className='about_content-mb'>
            <motion.div ref={props.about} style={{position, visibility}} className='about_content-mb_inner'>
                <div className='about_content-mb_main'>
                    <div className='about_content-mb_photo'>
                        <img alt="" src={require('../imgs/about__img.png')} />
                    </div>
                    <div className='about_content-mb_text'>
                        <p>
                        Hello, my name is Maksym Kozlov. I am a developer from Ukraine currently living in Italy, where I moved when I was 14 years old. I quickly learned the Italian language from scratch and completed my economics school with honors. During the last years of school, I developed a passion for web development and began diving into the world of programming on my own. Initially, I used to jump from one topic to another, but I eventually decided to enroll in the university's computer science faculty to gain more structured knowledge.
During my university years, I participated in the ERASMUS program in Sweden for six months, where I successfully passed all the exams. Currently, I have finished my thesis and only need to present it, already achieving the maximum points. In addition to web development, I am interested in developing my skills in machine learning, the basics of which I learned in Sweden.
                        </p>
                    </div>
                </div>

                <motion.div style={{y:yWave}} className='about_outro'>
                        <img alt="" src={require('../imgs/skills__wave.png')} />
                        <div className='about_outro_footer'>
                            
                        </div>
                    </motion.div>
                
            </motion.div>
        </div>
    )

}