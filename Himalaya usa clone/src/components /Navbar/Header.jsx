import React from "react";
import "./Header.css"
import { Link } from 'react-router-dom';
import "boxicons"

function Header() {
   
    return (
        <>
            <h1 style={{ background: "red", marginTop: "0", textAlign: "center", color: "white", fontWeight: "lighter", fontSize: "20px", fontWeight: "lighter", paddingTop: "1%", paddingBottom: "1%" }}> <span style={{ fontSize: "20px", fontWeight: "bold" }}>FREE SHIPPING </span> ON ALL ORDERS ABOVE 35$!</h1>
            

            <div id="nav1"  style={{ display: "flex", justifyContent:"space-between" }}>
                <div style={{ display: "flex", gap: "45px" }}>
                    <Link to="/">
                        <img className="mt-3" style={{  height: "55px", marginLeft: "30px" }} src="https://himalayausa.com/cdn/shop/files/Himalaya_Logo_-_Since_1930_CMYK_-_Reduced_250x.png?v=1673635210" alt="" />
                    </Link>
                    <Link to="/shop" className="shop mt-5 text-[20px] text-gray-400 hover:underline">
                                Shop </Link>
                    {/* ----------------------------Dropdown------------------------- */}



                    <Link to="/about" className="mt-5 text-[20px] text-gray-400  hover:underline" > About </Link> 
                    <Link to="/store" className="mt-5 text-[20px] text-gray-400 hover:underline">Store Locator</Link>
                </div>
                
             {/* ----------------------------------right side------------------------------    */}
                <div className="mr-4" style={{display:"flex" ,gap:"24px",marginTop:"1%"}}>
                    {/* <img style={{ width: "10%",height:"25px", }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0N1gxEdXGqed3SX-SQBPqLJRCHSZ60KiFXA&usqp=CAU" alt="" /> */}
                    < box-icon  name='search'></box-icon>
                    {/* <img style={{ width: "10%", height: "25px", }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtIDhyILJzbIKtGprPHzRQnsB6-Mq4J716FA&usqp=CAU" alt="" /> */}
                    <box-icon name='user' ></box-icon>
                    {/* <img style={{ width: "10%",height:"25px", }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bdDvZMUCYsOTWVLdALHtuBQBte_tZXJzsSA_w_NqGW3Ehp5c3FDXl6QWw1BU7MIztG8&usqp=CAU" alt="" />
                     */}
                    <box-icon name='cart-alt'></box-icon>
                </div>
            </div>

            {/* <div className="dropdown">
               <h1 className="text-[200px]">hello</h1>
            </div>
             */}


            </>
        
    )
}

export default Header;
