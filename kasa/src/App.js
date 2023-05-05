import React from "react";

import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Home, {locationsLoader} from "./pages/Home/index";
import FicheDetail, { locationLoader }  from "./pages/FicheDetail/index";
import Apropos, { kasaInfo } from "./pages/apropos/index";
import "./index.css";

import Error404 from "./pages/error404/index";
import BaseLayout from "./components/BaseLayout";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/kasa/" element={ <BaseLayout/> } errorElement={<Error404 />}> 
        <Route index element={<Home />} loader={locationsLoader} />
        <Route path="/kasa/fichedetail/:id" element={<FicheDetail />} loader={locationLoader} />
        <Route path="/kasa/apropos" element={<Apropos/>} loader={kasaInfo}  />
    </Route>
)) 

function App() {
    return (
        <RouterProvider router={router} /> 

       


     
    )
}

export default App;