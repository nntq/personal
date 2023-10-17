import React from 'react'
import {motion} from 'framer-motion'

export default function HomeMB(){
    return (
        <div className='home-mb'>

            <div className='home-mb_logo'>
                <div className='home-mb_logo_content'>
                    <span>MK</span>
                </div>
            </div>
            
                <div className='home-mb_inner'>
                    <div className='home-mb_main'>
                        <div className='home-mb_img_container'>
                            <img src={require("../imgs/home__img.png")} />
                        </div>
                        <div  className='home-mb_title'>  
                            <div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: .6, delay: .3}} className='home-mb_firstmsg_bg'>
                                <h1>Hello World!</h1>
                            </div>
                            <div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: .6, delay: 1.2}} className='home-mb_secondmsg_bg'>
                                <h1>Let me show you<br/> something</h1>
                            </div>
                        </div>
                        
                    </div>
                    <div className='home-mb_footer'>
                        
                    </div>
                </div>

            <motion.div 

            initial={{
                backgroundImage: "radial-gradient(farthest-side at -10% 70%,blue,rgb(236, 236, 236))"
            }}

            animate={{
                backgroundImage: ["radial-gradient(farthest-side at -10% 70%,blue,rgb(236, 236, 236))", "radial-gradient(farthest-side at 10% 50%,blue,rgb(236, 236, 236))", "radial-gradient(farthest-side at 20% 50%,blue,rgb(236, 236, 236))", "radial-gradient(farthest-side at 20% 60%,blue,rgb(236, 236, 236))", "radial-gradient(farthest-side at 10% 60%,blue,rgb(236, 236, 236))", "radial-gradient(farthest-side at -10% 70%,blue,rgb(236, 236, 236))"]
            }} transition={{
                duration: 6, 
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 1],
                repeat: Infinity
                }} className='home-mb_gradient'>
            </motion.div>
        </div>
        )
}