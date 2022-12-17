import React from "react";
import { Route, Routes } from "react-router-dom"
import ContactPage from "../Pages/ContactPage";
import HomePage from "../Pages/HomePage"
import LoginInPage from "../Pages/LoginInPage";
import PanelPage from "../Pages/PanelPage";
import PricingPage from "../Pages/PricingPage";
import SignUpPage from "../Pages/SignUpPage";
import NotFound from "../Pages/NotFoundPage";

const AllRoutes=()=>{
    return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/getstarted" element={<SignUpPage />}></Route>
            <Route path="/login" element={<LoginInPage />}></Route>
            <Route path="/pricing" element={<PricingPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/panel" element={<PanelPage />}></Route>
            <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
    )
}

export default AllRoutes