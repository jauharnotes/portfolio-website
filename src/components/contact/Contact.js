import './contact.css'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {

    const styles = {
        fontSize: '45px',
        fontFamily: 'Alex Brush',
        color: "#59b256",
        marginLeft: "20px"
    }

    const [done, setDone] = useState(false)

    const formRef = useRef()

    function handleSubmit(event) {
        event.preventDefault()

        emailjs.sendForm('service_ui25fsd', 'template_e288u65', formRef.current, 'user_YMUJPOLeeQAnXfQuKg7U9')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss your project</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt="phone" className="c-icon" />
                            +62 888 1505 167
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt="phone" className="c-icon" />
                            jauharnotes@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img src={Address} alt="phone" className="c-icon" />
                            Jl. Karya Bakti Depok Indonesia
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        <b>What's your story?</b> Get in touch. Always acailable for freelancing if the right project comes along me
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && '#333' }} type='text' placeholder='Name' name='user_name' />
                        <input style={{ backgroundColor: darkMode && '#333' }} type='text' placeholder='Subject' name='user_subject' />
                        <input style={{ backgroundColor: darkMode && '#333' }} type='text' placeholder='Email' name='user_email' />
                        <textarea style={{ backgroundColor: darkMode && '#333' }} rows='5' placeholder="Message" name='message' />
                        <div className='c-button'>
                            <button>Submit</button>
                            {done && <p style={styles} className='c-success-message'>'Thank you...'</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact