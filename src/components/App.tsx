import { Routes, Route } from "react-router-dom";

import Layout from "./Common/Layout.tsx";
import Home from "./Home/Home.tsx";
import Pricing from "./Pricing/Pricing.tsx";
import About from "./About/About.tsx";
import Cookie from "./Cookie/Cookie.tsx";
import Privacy from "./Privacy/Privacy.tsx";
import TOS from "./TOS/TOS.tsx";
import Login from "./Login/Login.tsx";
import NotFound from "./Common/NotFound.tsx";
import Register from "./Register/Register.tsx";
import ForgotPassword from "./ForgotPassword/ForgotPassword.tsx";
import Support from "./Support/Support.tsx";
import Dashboard from "./Dashboard/Dashboard.tsx";

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
