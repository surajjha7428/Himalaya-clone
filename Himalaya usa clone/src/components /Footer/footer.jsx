import React from "react";
import "./footer.css"


function Footer() {
    return (
        <>
            <div className="foot">
                <div className="FOOT">
                <div className="foot1">
                    <h4>Info</h4>
                    <p>Contact Us</p>
                    <p>FAQ</p>
                    <p>BLOG</p>
                    <p>Store Locator</p>
                </div>



                <div className="foot1">
                    <h4>Policies</h4>
                    <p>Shipping & Returns</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy</p>
                    <p>CCPA</p>
                    <p>Accessibility</p>
                </div>




                <div className="foot1">
                    <h4>Contact Us</h4>
                    <h5>Email:</h5>
                    <h6>writetous@himalayausa.com</h6>


                    <h5 style={{ }}>Phone:</h5>
                    <h6>1-800-869-4640</h6>
                    <p style={{ color: "black" }}>Mon-Fri, 8am-5pm CT</p>
                    

                    <h5>Mail:</h5>
                    <p style={{ color: "black" }}>Himalaya Wellness</p>
                    <h6 style={{ }}>1101 Gillingham Lane <br />
                    Sugar Land, TX 77478</h6>

                </div>



                <div className="foot1">
                    <h4>Subscribe to Our Newsletter!</h4>
                    <input className="ml-6 mt-3" type="text" placeholder="Enter your e-mail id ✉️" />
                    <p className="mt-4 ">By entering your email,  you <br />agree to our <span className="text-gray-950  hover:text-gray-600 "> Terms & Conditions .</span > and  <span className="text-gray-950  hover:text-gray-600 " >Privacy Policy </span></p>

                    <div className="foot2">
                        <div className="foott22">
                            <h3>Follow us</h3>
                        </div>
                        <div className="foott2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ODfcOwzkuxv73CGQPuJocro8eaLStfTB_w&usqp=CAU" alt="" />
                        </div>
                        <div className="foott2">
                            <img src="https://w7.pngwing.com/pngs/265/840/png-transparent-twitter-social-icons-grey-icon.png" alt="" />
                        </div>
                        <div className="foott2">
                            <img src="https://static.vecteezy.com/system/resources/previews/022/227/304/original/instagram-logo-icon-free-png.png" alt="" />
                        </div>
                        <div className="foott2">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0h3cLR9TwxNatYqhHBwrvG1XDVzDEgtwFFg&usqp=CAU" alt="" />
                        </div>
                    </div>
                </div>


                </div>

                <div className="copyright">
                    <p>© 2022 Himalaya Wellness. All rights reserved.</p>
                </div>
                    
                <div className="statement">
                    <p>*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</p>
                </div>
            </div>
        </>
    )
}

export default Footer