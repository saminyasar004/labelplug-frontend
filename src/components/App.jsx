import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Common/Layout";
import Home from "./Home/Home";
import Pricing from "./Pricing/Pricing";
import About from "./About/About";
import Cookie from "./Cookie/Cookie";
import Privacy from "./Privacy/Privacy";
import TOS from "./TOS/TOS";
import Login from "./Login/Login";
import NotFound from "./Common/NotFound";
import Register from "./Register/Register";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import Support from "./Support/Support";
import Dashboard from "./Dashboard/Dashboard";

export default function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cookies" element={<Cookie />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/tos" element={<TOS />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Layout>
        </>
    );
}
