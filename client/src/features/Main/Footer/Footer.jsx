import React from "react";
import './Footer.css'

function Footer() {

    return (
        <>
            <div className="foot1">
                <div>About us</div>
                <div>Business</div>
                <div>Partnerships</div>
                <div>Privacy</div>
                <div>Terms and Conditions</div>
            </div>
            <div className="icons">
                <div>
                <img src={process.env.PUBLIC_URL+'/icons/icons8-facebook-50.png'}></img>
                <img src={process.env.PUBLIC_URL+'/icons/icons8-twitter-50.png'}></img>
                <img src={process.env.PUBLIC_URL+'/icons/icons8-instagram-50.png'}></img>
                </div>
            </div>
            <div className="divider"></div>
            <div className="foot2">
                <div>c 2023 NetStoneGlobal</div>
                <div>netstoneglobal@gmail.com</div>
            </div>
        </>
    )
}

export default Footer;