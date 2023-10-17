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
                        Привет, меня зовут Максим Козлов. Я разработчик из Украины проживающий в Италии. Учась в школе я увлекся веб разработкой и начал самостоятельно и постепенно окунаться в мир программирования, так как в интернете нет особо хорошо структурированной информации, а пытаясь обучаться самостоятельно я "прыгал" с одной темы на другую, мною было принято решение после окончания экономической школы с отличием в Италии поступить в университет и поэтому в данный момент я учусь в University of Salerno, на факультете программирования. На этом сайте вы найдете мои работы которые я выполнял для практики и обучения, некоторый из них далеки от идеала, но я не вношу в них поправки чтобы видеть свой прогресс и понимать, что можно было улучшить и как.
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