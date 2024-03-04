import React from "react";
import "./body.css"
 import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react";


function Body() {
     const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      thumbInstanceRef.current.moveToIdx(slider.track.details.rel);
    },
  });
  const [thumbSliderRef, thumbInstanceRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 15,
    },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
      instanceRef.current.moveToIdx(slider.track.details.rel);
    },
  });
    return (
      <>
        {/* ---------------------------------Dropdown menu------------------------------- */}
        <div className="dropdown"></div>

        {/* --------------------------------------background-Image---------------------------------   */}
        <div className="bg mt-4">
          {/* < img style={{width:"100%",height:"650px",marginTop:"1%"}} src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/Berberine_2.jpg?v=1689623874%27" alt="" />  */}
          <div className="box1">
            <div className="box2">
              <h1>BERBERINE</h1>
            </div>
            <p>
              Potent Plant-Based Support <br /> for Daily Wellness.
            </p>

            <button className="ml-[150px] mt-10 bg-cyan-400 hover:text-white hover:bg-zinc-700 transition-all">
              SHOP NOW
            </button>
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            color: "black",
            fontWeight: "lighter",
          }}
          className="text-[30px] font-sans-serif"
        >
          Shop By Category
        </h2>
        <div
          style={{
            border: "1px solid black",
            height: "700px",
            width: "86%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            id="div1"
            style={{ height: "600px", width: "30%", marginTop: "20px" }}
          >
            <img
              className="imghover"
              style={{ width: "100%" }}
              src="https://himalayausa.com/cdn/shop/products/berberine-828786_1024x1024.png?v=1676344125"
              alt=""
            />
            <h4 style={{ textAlign: "center" }}>Supplements</h4>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              {" "}
              <a
                style={{ textDecoration: "none", color: "gray" }}
                href="https://himalayausa.com/collections/herbal-supplements"
              >
                See All Supplements
              </a>
            </p>
            {/* <a href="https://himalayausa.com/collections/herbal-supplements" style={{textDecoration:"none",textAlign:"center",color:"gray",fontWeight:"bold"}}>
        See All Supplements
      </a> */}
          </div>
          <div style={{ height: "600px", width: "30%", marginTop: "20px" }}>
            <img
              className="imghover"
              style={{ width: "100%" }}
              src="https://5.imimg.com/data5/ECOM/Default/2023/11/357792829/CJ/RN/UF/201985168/81gdcb1rkbl-sl1500.jpg"
              alt=""
            />
            <h4 style={{ textAlign: "center" }} className="mt-2">
              Oral care
            </h4>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              {" "}
              <a
                style={{ textDecoration: "none", color: "gray" }}
                href="https://himalayausa.com/collections/oral-care"
              >
                See All Oral Care
              </a>
            </p>
          </div>
          <div style={{ height: "600px", width: "30%", marginTop: "20px" }}>
            <img
              className="imghover"
              style={{ width: "100%" }}
              src="https://images-cdn.ubuy.co.in/633ae2446f74fd39d07dc83f-himalaya-botanique-face-wash-enriched.jpg"
              alt=""
            />
            <h4 style={{ textAlign: "center" }} className="mt-2">
              {" "}
              Personal care
            </h4>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              {" "}
              <a
                style={{ textDecoration: "none", color: "gray" }}
                href="https://himalayausa.com/collections/personal-care"
              >
                See All Personal Care
              </a>
            </p>
          </div>
        </div>

        {/* ---------------------- Best Sellers------------------------------ */}

        <h2
          style={{
            textAlign: "center",
            fontFamily: "sans-serif",
            color: "black",
            fontWeight: "lighter",
          }}
          className="text-[30px]"
        >
          Best Sellers
        </h2>

        <div
          style={{
            backgroundColor: "#eef2f0",
            border: "1px solid black",
            height: "300px",
            width: "86%",
            margin: "auto",
            display: "flex",
          }}
        >
          <div style={{ width: "20%", height: "90%", margin: "1%" }}>
            <img
              style={{ width: "72%" }}
              src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475"
              alt=""
            />
          </div>
          <div style={{ width: "75%", height: "90%", margin: "1%" }}>
            <h1
              style={{
                fontWeight: "bold",
                color: "#777777",
                fontFamily: "Poppins, sans-serif",
                marginLeft: "15px",
              }}
            >
              Unlock the Wisdom of Herbs
            </h1>
            <h2
              style={{
                fontWeight: "lighter",
                color: "#333333",
                fontFamily: "Poppins, sans-serif",
                marginLeft: "15px",
              }}
            >
              with Herbal Supplements, Toothpaste & More!
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "#777777",
                marginLeft: "15px",
                fontWeight: "lighter",
              }}
            >
              Since 1930, Himalaya has been passionate about the healing wisdom
              of herbs. We offer a wide range of clinically-
            </p>
            <p
              style={{ fontSize: "18px", color: "#777777", marginLeft: "15px" }}
            >
              studied herbal supplements, toothpaste and personal care products
              that unlock the powerful healing benefits of
            </p>
            <p
              style={{ fontSize: "18px", color: "#777777", marginLeft: "15px" }}
            >
              herbs.
            </p>
          </div>
        </div>

        {/* ----------------------------------------Slider part----------------------------------- */}

        {/* <div style={{ border: "1px solid black", width: "90%", height: "300px", margin: "auto", marginTop: "1%", display: "flex", justifyContent: "space-between" }}>
                 <div ref={sliderRef} className="keen-slider">
                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                        
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    <p>Botanqie Neem & Pomegranate Toothpasta</p>
                </div>

                <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                </div>

                <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div>

                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div>
                    
                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div>
                    
                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div>
                    
                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div> 
                    
                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div>
                    
                    <div style={{ border: "1px solid black", width: "30%", height: "200px" }} className="keen-slider__slide">
                    <h4>I will never use another toothpaste as long as i can get this</h4>
                    </div>
                    

                </div>
                
            </div>

            <div  ref={sliderRef} className="keen-slider">
                <button className="Button1  keen-slider__slide" ></button>
                <button className="Button1  keen-slider__slide"></button>
                <button className="Button1  keen-slider__slide"></button>
                <button className="Button1  keen-slider__slide"></button>
            </div> */}

        {/* -------------------------------------------- */}

        <div className="w-10/12 mx-auto mt-10">
          <div ref={sliderRef} className="keen-slider ">
            <div className="border-gray-300 border-[1px] p-6 keen-slider__slide">
              <div className="h-1 bg-cyan-300 w-6"></div>
              <div>
                <p className="text-left mt-3">
                  “We've tried countless fluoride-free toothpaste,and this is
                  our favorite.!“
                </p>
                <p className="text-left text-[14px] text-gray-600 mt-2">
                  Botanique Complete Care Toothpaste- Peppermint
                </p>
              </div>
            </div>
            <div className="border-gray-300 border-[1px] p-6 keen-slider__slide">
              <div className="h-1 bg-cyan-300 w-6"></div>
              <div>
                <p className="text-left mt-3">
                  ““I'm amazed. I'm less irritable and tired, and more calm and
                  centered.".“
                </p>
                <p className="text-left text-[14px] text-gray-600 mt-2">
                  Ashwagandha
                </p>
              </div>
            </div>
            <div className="border-gray-300 border-[1px] p-6 keen-slider__slide">
              <div className="h-1 bg-cyan-300 w-6"></div>
              <div>
                <p className="text-left mt-3">
                  “Recommenend to me by my local health food store. This product
                  is godsend.“
                </p>
                <p className="text-left text-[14px] text-gray-600 mt-2">
                  Livecare
                </p>
              </div>
            </div>
            <div className="border-gray-300 border-[1px] p-6 keen-slider__slide">
              <div className="h-1 bg-cyan-300 w-6"></div>
              <div>
                <p className="text-left mt-3">
                  “I will never use another toothpaste as long as I can get this
                  one.“
                </p>
                <p className="text-left text-[14px] text-gray-600 mt-2">
                  Botanique Neem & Pomegranate Toothpaste
                </p>
              </div>
            </div>
          </div>
          <div
            ref={thumbSliderRef}
            className="keen-slider mx-auto max-w-[200px] mt-6"
          >
            <button
              className={`keen-slider__slide  w-[20px] bg-black h-1 ${
                currentSlide == 0 && "bg-cyan-400"
              }`}
              onClick={() => {
                thumbInstanceRef.current.moveToIdx(0);
              }}
            ></button>
            <button
              className={`keen-slider__slide  w-[20px] bg-black h-1 ${
                currentSlide == 1 && "bg-cyan-400"
              }`}
              onClick={() => {
                thumbInstanceRef.current.moveToIdx(1);
              }}
            ></button>
            <button
              className={`keen-slider__slide  w-[20px] bg-black h-1 ${
                currentSlide == 2 && "bg-cyan-400"
              }`}
              onClick={() => {
                thumbInstanceRef.current.moveToIdx(2);
              }}
            ></button>
            <button
              className={`keen-slider__slide  w-[20px] bg-black h-1 ${
                currentSlide == 3 && "bg-cyan-400"
              }`}
              onClick={() => {
                thumbInstanceRef.current.moveToIdx(3);
              }}
            ></button>
          </div>
        </div>

        {/* ---------------------------------Himalaya social media ------------------------------ */}
        <div
          className="media"
          style={{ border: "1px solid black", width: "90%", height: "450px" }}
        >
          <div
            className="social"
            style={{
              border: "1px solid black",
              width: "98%",
              height: "50px",
              display: "flex",
            }}
          >
            <div style={{ width: "90%", height: "70px" }}>
              <h3>Follow us @himalayausa</h3>
            </div>
            <div
              style={{
                width: "10%",
                height: "50px",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                style={{
                  height: "40px",
                  width: "23%",
                  border: "1px solid green",
                }}
              >
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg"
                  alt=""
                />
              </div>
              {/* <img  src="https://i.pinimg.com/564x/e0/fc/a0/e0fca0dd47becbf0dbf7152dcb15c1b4.jpg" alt="" /> */}
              <div
                style={{
                  height: "40px",
                  width: "23%",
                  border: "1px solid green",
                }}
              >
                <img
                  style={{ height: "100%", width: "100%" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ODfcOwzkuxv73CGQPuJocro8eaLStfTB_w&usqp=CAU"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* ----------------------------------Instagram--------------------------------- */}

          <div className="instagram">
            <div className="insta">
              <img
                src="https://scontent.cdninstagram.com/v/t51.2885-15/430316406_1510659279850047_5524715494704862621_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=zOt-W1hT7kkAX-F-S-J&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCrjt7nLZHpbNiduYCShlE2IgZki5lX8yf5vHmVbBdxPA&oe=65E6450B"
                alt=""
              />
            </div>
            <div className="insta">
              <img
                src="https://scontent.cdninstagram.com/v/t51.2885-15/429795532_284157358042354_3913678036693151726_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=18de74&_nc_ohc=euMPWqJG9SgAX9jBNrX&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBvYDT_4gYPJ7FW9xONjY9T_DgzRHgJeWaOZfpT2V940g&oe=65EB0725"
                alt=""
              />
            </div>
            <div className="insta">
              <img
                src="https://scontent.cdninstagram.com/v/t51.2885-15/429158374_1768006243709006_8408121225215381780_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=18de74&_nc_ohc=K5IThgzZc-0AX_CiZNx&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBExv_byvc7S4pafhoqAeNddLZf3kSo2jaNdRpcJu_aHw&oe=65EAF106"
                alt=""
              />
            </div>
            <div className="insta">
              <img
                src="https://scontent.cdninstagram.com/v/t51.2885-15/428717890_329371486203402_7889029039762987906_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=ic_m84t7dXsAX8NF_ng&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCIS3eYuXnCrf_bsG21e72GRy12YM1aBbLmQDcnQPuKaA&oe=65E654D3"
                alt=""
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default Body;