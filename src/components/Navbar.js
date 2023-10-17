import React, {useRef} from 'react'

export default function Navbar(props){

    const navigation = ['MK', 'about', 'skills', 'contacts']
    const colors = ['#32AFFF','#FF30C5','#8AE234','#FFB800']

    const allSpans = []

    function change(id){
        props.change(id); 
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

    for(let i=0;i<navigation.length;i++){
        if(props.value == i){
            allSpans.push(<span onClick={()=>change(i)} style={{borderBottom: '3px solid', paddingBottom: '2px', borderColor: colors[i]}}>{navigation[i]}</span>)
        }else{
            allSpans.push(<span onClick={()=>change(i)}>{navigation[i]}</span>)
        }
    }

    const logo = allSpans[0]
    const nav = allSpans.slice(1)

    return (
        <header>
            {logo}
            <div className='header_navigation'>
                {nav}
            </div>
        </header>
    )
}