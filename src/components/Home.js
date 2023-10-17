import {useRef,React} from 'react';
import {motion, useScroll, useTransform} from 'framer-motion'

export default function Home(props){

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.8], [1,0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.2])
    
    const nav = useTransform(scrollYProgress, (pos) => {
        if(pos > 0) props.change(0)
    });

    console.log(nav)

    return(
        <motion.div ref={targetRef} style={{scale,opacity}} className='home'>
            <div className='home_inner'>
                    <div className='home_main'>
                        <div className='home_img_container'>
                            <img alt="" src={require("../imgs/home__img.png")} />
                        </div>
                        <div  className='home_title'>  
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: .6, delay: .3}} className='home_firstmsg_bg'>
                                <h1>Hello World!</h1>
                            </motion.div>
                            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: .6, delay: 1.2}} className='home_secondmsg_bg'>
                                <h1>Let me show you<br/> something</h1>
                            </motion.div>
                        </div>
                    </div> 
            </div>
            <div className='home_gradient'>
                
            </div>
        </motion.div>
    )
}