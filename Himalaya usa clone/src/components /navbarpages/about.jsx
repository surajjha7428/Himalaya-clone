import React from "react"
import "./about.css"
import { Link } from "react-router-dom"

function About() {
    return (
        <>
            {/* <h1>about is under the process</h1> */}
            <div className="about">
                <h1>Our <span> Story </span></h1>
                <p>Founded in 1930, Himalaya remains family owned with <br /> products offered in over 100 count</p>
            </div>

            <div className="story">
                {/* <div className="Btn">
                    <button>OUR STORY</button>
                    
                </div>

             <div className="Btn">
                    <button>OUR ROOTS</button>
                </div>
                <div className="Btn">
                    <button>OUR PROCESS</button>
                </div>
                <div className="Btn">
                    <button>OUR SCIENCE</button>
                </div>
                <div className="Btn">
                    <button>OUR INITIATIVES</button>
                </div> */}
                <Link to="" className="Btn hover:bg-[#006666]">  OUR STORY </Link>
                <Link to="/roots" className="Btn hover:bg-[#006666]">  OUR ROOTS </Link>
                <Link to="/process" className="Btn  hover:bg-[#006666]">  OUR PROCESS </Link>
                <Link to="/science" className="Btn  hover:bg-[#006666]">  OUR SCIENCE </Link>
                <Link to="/intil" className="Btn  hover:bg-[#006666]">  OUR INITIATIVE </Link>
               
                
            </div>
            <div className="our">
                <div className="our1">
                    <img src="https://i.shgcdn.com/4075e3a0-9129-48bd-bfe7-42fc93fe2397/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                </div>
                <div className="our1">
                    <h1>From Humble Beginnings</h1>
                    <p>While riding through the forests of Burma, our founder, Mr. M. Manal, saw a  <br />villager pacify a restless elephant by feeding it the root of the plant Rauwolfia <br />serpentina.</p>


                    <p>Fascinated by the plant's effect on the elephant, he returned home to India to <br /> seek scientific evidence for why this particular plant would have such a <br /> beneficial, calming effect. Young Manal's mother gave him her bangles to sell <br /> so he could pursue his work, and Himalaya was born.</p>


                    <p>Once he fully understood the science behind this special botanical, Mr. Manal <br />bought a hand-operated, tablet-compressing machine and began his work. <br /> At night, his shoulders would ache from producing a few hundred tablets, one <br />small tablet at a time. But his hard work paid off. This remarkable plant would <br />later become Serpina, the world’s first anti-hypertensive drug in 1934.</p>

                    <p>We remain in awe of the man who began our company, and the grandfather <br />of our current CEO, Nabeel Manal. Himalaya’s legacy has always been one of <br /> researching nature and using the tools of modern science to develop and <br />produce Ayurveda-based, pharmaceutical-grade herbal medicine products. <br /> And today, that legacy continues.</p>

                    <p>Mr. Manal had a vision of helping people be well. Today, Himalaya Herbal <br /> Healthcare has turned a time-honored herbal tradition into a complete <br /> range of contemporary, proprietary formulas and single herbs products.</p>
                </div>
            </div>

            <div className="years">
                <div className="years1">
                    <h1>The Himalaya Legacy Now Spans Over 90 <br /> Years</h1>

                    <p>Founded in 1930, the Himalaya legacy now spans over 90 years, stretching <br /> from one man, to his son, to his grandson. From our humble beginnings in <br /> India, our products are now offered in over 100 countries, yet we’re still family <br /> owned.</p>


                    <p>Himalaya offers a full line of clinically-studied herbal formulations, certified <br /> USDA organic Single herbs, and a full line of body care products. Integrating <br />the principles of traditional medicine with modern science, Himalaya is a <br />worldwide pioneer in the field of scientifically validated herbal healthcare.</p>


                    <p>Himalaya's North American LEED® Gold-Certified eco-friendly corporate office <br />and warehouse facility are located in Sugar Land, Texas, a community <br /> neighboring Houston.</p>
                </div>
                <div className="years1">
                    <img src="https://i.shgcdn.com/59ff8391-0e4c-47df-9848-556c4521753e/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
                </div>
            </div>
        </>
    )
}

export default About