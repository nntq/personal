import React, {useRef, useEffect} from 'react'
import {motion, useScroll, useTransform} from 'framer-motion'

export default function ContactMB(props){

    

    const FORM = "https://public.herotofu.com/v1/9ec60e80-68ea-11ee-8bcd-4fcc9e7e7286"

    const contactRef = useRef(null);

    const {scrollYProgress} = useScroll({
        target: contactRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [-0.5, 0.45], ["100%", "0%"]);

    const submit = (e) => {
        e.preventDefault();

        const inputs = e.target.elements;
        console.log(inputs)
        const data = {};

        for(let i=0; i< inputs.length; i++){
            if(inputs[i].name){
                data[inputs[i].name] = inputs[i].value;
            }
        }


        fetch(FORM, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then((res) => {
            if(!res.ok){
                throw new Error('Form response was not ok');
            } else {
                props.setSubmit(true);
            }
        }).catch((err)=>{
            e.target.submit();
        });

        props.setSubmit(true)

    }

    useEffect(()=>{
        console.log(props.submitted)
        if(props.submitted){
            setTimeout(()=>{
                props.setSubmit(false)
                console.log(props.submitted)
            }, 1000)
        }
    })

    return (
        <div ref={contactRef} className='contact-mb'>
            {props.submitted && (<motion.div initial className='submitted'>
                    <p>Thank you for your message.</p>
                </motion.div>)
                }
            <motion.div style={{x}} className='contact-mb_inner'>
            <div className='contact_form'>
                            <h3>I'd love to hear from you</h3>
                            <div className='contact_form_inner'>
                                <form action={FORM} onSubmit={submit}>
                                    <div className='form_header'>
                                        <div className='form_header_circle'>

                                        </div>
                                        <div className='form_header_circle'>

                                        </div>
                                        <div className='form_header_circle'>

                                        </div>
                                    </div>
                                    <h3>Send me a message</h3>
                                    <div className='contact_email'>
                                        <p>Insert your email:</p>
                                        <input name='email' type="email" required></input>
                                    </div>
                                    <div className='contact_msg'>
                                        <p>Insert your message:</p>
                                        <textarea name='message' required></textarea>
                                    </div>
                                    <button type='submit'>Submit</button>
                                </form>
                                <div className='contact_other'>
                                    <h3>Or reach me here:</h3>
                                    <a href="https://www.instagram.com/etozhemaksik/">

                                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
                                            <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
                                        </svg>
                                    </a>
                                    <a href='mailto:maxk13996@gmail.com'>

                                        <svg width="50px" height="50px" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <path stroke="#000000" stroke-linejoin="round" stroke-width="12" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"/>
                                        </svg>
                                    </a>
                                    <a href='https://www.linkedin.com/in/maksym-kozlov-62307b297/'>
                                        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#0F0F0F"/>
                                            <path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#0F0F0F"/>
                                            <path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#0F0F0F"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"/>
                                        </svg>
                                    </a>
                                    <p>Thanks for visiting😊</p>
                                </div>
                            </div>
                        </div>
            </motion.div>
        </div>
    )
}