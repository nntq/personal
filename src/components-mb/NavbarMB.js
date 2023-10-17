import React, {useState} from 'react'
import {motion} from 'framer-motion'

export default function NavbarMB(props){

    const [open, setOpen] = useState(false);

    console.log(open)

    const variants = {
        open: {left: 0, top: 0, width: "100%", height: "100%", borderRadius: 0},
        closed: {left: "20px", top: "20px", width: "50px", height: "50px", borderRadius: "50%"}
    }

    function change(id){
        if(id==1)
            props.about.current?.scrollIntoView({behavior: 'smooth'});
        else if(id==2)
            props.skills.current?.scrollIntoView({behavior: 'smooth'});
        else if(id==0)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
        else if(id==3)
          props.contact.current?.scrollIntoView({behavior: 'smooth'});
            
    }

    return (
        <div className='navbar-mb'>
            <div className='navbar-mb_inner'>
                <div className='navbar-mb_inner_button'>
                    <button onClick={()=>setOpen(!open)}>
                        {!open&&(<svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2,4A1,1,0,0,1,3,3H21a1,1,0,0,1,0,2H3A1,1,0,0,1,2,4Zm1,9H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm0,8H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Z"/>
                       </svg>)}

                       {open&&(<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8L8 16M12 12L16 16M8 8L10 10" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>)}
                       
                    </button>
                </div>

                <motion.div animate={open?"open":"closed"} variants={variants} className='navbar-mb_inner_content'>
                       { open && (<motion.ul initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: .2}} className='navbar-mb_list'>
                            <a onClick={()=>change(0)}>home</a>
                            <a onClick={()=>change(1)}>about</a>
                            <a onClick={()=>change(2)}>skills</a>
                            <a onClick={()=>change(3)}>contact</a>
                        </motion.ul>)}
                </motion.div>
            </div>
        </div>
            

    )
}