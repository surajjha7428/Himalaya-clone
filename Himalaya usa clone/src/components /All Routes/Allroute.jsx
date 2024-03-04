
import Shop from "../navbarpages/shop";
import About from "../navbarpages/about";
// import Store from "../navbarpages/storelocator";
import Store from "../navbarpages/storelocator";
import Body from "../Main/body";
import INT from "../aboutbuttonpages/initI";
import PROCESS from "../aboutbuttonpages/process";
import SCIENCE from "../aboutbuttonpages/science";
import ROOTS from "../aboutbuttonpages/roots";

import { Routes,Route } from "react-router-dom";


function AllRoutess() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/about" element={<About />} />
                <Route path="/store" element={<Store />} />
                
                <Route path="/roots" element={<ROOTS />} />
                <Route path="/process" element={<PROCESS />} />
                <Route path="/science" element={<SCIENCE />} />
                <Route path="/intil" element={ <INT/>    } />
                
            </Routes>
        </div>
    )
}

export default AllRoutess