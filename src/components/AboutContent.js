import React, {useRef} from 'react'
import {motion, useAnimation, useScroll, useTransform} from 'framer-motion'

export default function AboutContent(props){

    const conRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: conRef,
        offset: ["0.35 1", "0.9 0"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.03], [0, 1]);

    const position = useTransform(scrollYProgress, (pos) => {
        return pos === 1 || pos === 0 ? "relative" : "fixed";
    });

    const visibility = useTransform(scrollYProgress, (vis) => {
        return vis === 1 || vis === 0 ? "hidden" : "visible";
    })

    const x = useTransform(scrollYProgress, [0.1,0.6], ["-100%", "350%"]);
    const y = useTransform(scrollYProgress, [0.1, 0.6], ["100%", "-350%"]);
    const yWave = useTransform(scrollYProgress, [0.3, 1], ["100%", "-120%"])


    const animationContent=useAnimation()

    async function content(){
        await animationContent.start({x: 20, transition: {duration: 2, delay: 1}})
        animationContent.start({
            rotate: [0,360],
            transition: {
                duration: 3.5, 
                repeat: Infinity
            }
        } )
    }

    React.useEffect(() => {
        content()
    }, [])

    return(
        <div ref={conRef} className='about_content'>
            <div ref={props.about} className='about_gradient'>
            <motion.div style={{position,opacity,visibility}} className='about_content_inner'>
                <div   className='about_content_main'>
                    <div className='about_content_card'>
                        <div className='about_content_card_inner'>
                        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 2.5,duration: .5}} className="about__img" src={require('../imgs/about__img.png')} />
                        <motion.div initial={{x: '-100vw', y: '100vh'}} animate={{x:0,y:0}} transition={{duration: 2, delay: 1}} className="about__text">
                        <div className="about__text__inner">
                         Привет, меня зовут Максим Козлов. Я разработчик из Украины проживающий в Италии. Учась в школе я увлекся веб разработкой и начал самостоятельно и постепенно окунаться в мир программирования, так как в интернете нет особо хорошо структурированной информации, а пытаясь обучаться самостоятельно я "прыгал" с одной темы на другую, мною было принято решение после окончания экономической школы с отличием в Италии поступить в университет и поэтому в данный момент я учусь в University of Salerno, на факультете программирования. На этом сайте вы найдете мои работы которые я выполнял для практики и обучения, некоторый из них далеки от идеала, но я не вношу в них поправки чтобы видеть свой прогресс и понимать, что можно было улучшить и как.
                        </div>
                        </motion.div>

                        <motion.div initial={{x: '-100vw'}} animate={animationContent} className="about__circle">
                            <div className="about__circle__inner">

                            </div>
                        </motion.div>
                        </div>
                        
                    </div>
                    <motion.div style={{x, y}} className='about_rocket'>
                            <img src='https://www.svgrepo.com/show/434246/rocket.svg' />
                    </motion.div>
                    <div className='about_planet'>
                    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" fill="#1C274C"/>
                    <path d="M17.7124 5.45331C18.7593 5.25995 19.7184 5.19444 20.5094 5.30066C21.2797 5.40411 22.0451 5.69443 22.4649 6.36546C22.9112 7.07875 22.7767 7.90702 22.4527 8.62306C22.1234 9.35067 21.5345 10.1218 20.7806 10.8912C19.2652 12.4379 16.9446 14.1173 14.1835 15.5883C11.4214 17.0599 8.68924 18.0721 6.49015 18.5079C5.39463 18.7249 4.39197 18.807 3.56745 18.709C2.76731 18.614 1.96779 18.3262 1.53503 17.6345C1.06423 16.882 1.23859 16.0043 1.60462 15.2551C1.97963 14.4875 2.63744 13.6693 3.47686 12.8522L4 12.4165C4 12.6349 4.08336 13.1257 4.16811 13.5624C4.21263 13.7918 4.25753 14.0062 4.29093 14.1584C3.6391 14.8237 3.19304 15.421 2.95236 15.9136C2.67513 16.481 2.74418 16.7391 2.80665 16.8389C2.87948 16.9553 3.1117 17.1443 3.74441 17.2195C4.35275 17.2918 5.18406 17.2375 6.1986 17.0365C8.21962 16.636 10.8118 15.685 13.4782 14.2644C16.1457 12.8433 18.3298 11.2493 19.7092 9.84143C20.4027 9.13359 20.8587 8.50726 21.0861 8.00467C21.3187 7.4905 21.2526 7.25586 21.1933 7.16105C21.1231 7.04882 20.9042 6.86715 20.3097 6.78731C19.7683 6.7146 19.0378 6.74602 18.1466 6.89948L16.8697 5.65597C17.2085 5.55454 17.5278 5.48526 17.7124 5.45331Z" fill="#1C274C"/>
                    </svg>
                    </div>

                    <motion.div style={{y:yWave}} className='about_outro'>
                        <img src={require('../imgs/skills__wave.png')} />
                        <div className='about_outro_footer'>
                            
                        </div>
                    </motion.div>

                </div>
            </motion.div>
        
            </div>
        </div>
    )
}