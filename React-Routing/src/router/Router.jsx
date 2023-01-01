import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";

const Router = ()=>{
    return(
        // <BrowserRouter>
        //     <Routes>
        //         {/* <Route path="/" element={<Home />}></Route> */}
        //     </Routes>
        // </BrowserRouter>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
                {/* <Route path="/mypage" element={<MyPage />} /> */}
                <Route path="/" element={<Home />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;