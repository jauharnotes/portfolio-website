import './contact.css'
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

const Contact = () => {
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
                <div className='c-right'></div>
            </div>
        </div>
    )
}

export default Contact