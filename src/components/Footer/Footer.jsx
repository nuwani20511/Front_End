import React from 'react'
import './Footer.css'
const Footer = () => {
    return(
        <section className="f-wrapper">
            <div className="padding innerWidth flexCenter f-container">
                {/* left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />

                    <span className="secondaryText">
                        Our Vision is to make all people <br/>
                    the best places to spend their vacation
                    </span>
                </div>

                {/* right side */}
                <div className="flexColStart f-right">
                    <span className="primaryText">Information</span>
                    <span className="secondaryText">No.03,TB Jaya Mawatha,Colombo,Sri Lanka</span>

                    <div className="flexCenter f-menu">
                        <span>Hotels</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>

    )

    
}
export default Footer