import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { MoonFill, SunFill, List, X, Power } from "react-bootstrap-icons";

import Logo from "/img/logo.png";
import Avatar from "/img/avatar.jpg";

export default function Header() {
    const location = useLocation();
    const currentPath = location.pathname;

    const isLoggedin = true;

    const userAdminPanelPaths = [
        "/dashboard",
        "/labels",
        "/deposit",
        "/address-book",
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

        // html title change
        if (currentPath === "/") {
            document.title = "LabelPlug";
        } else if (currentPath === "/about") {
            document.title = "About us | LabelPlug";
        } else if (currentPath === "/pricing") {
            document.title = "Pricing | LabelPlug";
        } else if (currentPath === "/support") {
            document.title = "Support | LabelPlug";
        } else if (currentPath === "/privacy") {
            document.title = "Privacy Policy | LabelPlug";
        } else if (currentPath === "/tos") {
            document.title = "Terms & Condition | LabelPlug";
        } else if (currentPath === "/cookies") {
            document.title = "Cookie Policy | LabelPlug";
        } else if (currentPath === "/login") {
            document.title = "Login | LabelPlug";
        } else if (currentPath === "/register") {
            document.title = "Register | LabelPlug";
        } else if (currentPath === "/forgot-password") {
            document.title = "Password Recover | LabelPlug";
        } else if (userAdminPanelPaths.includes(currentPath)) {
            document.title = "Dashboard | LabelPlug";
        } else {
            document.title = "404 Not Found | LabelPlug";
        }

        const hamburgerContainer =
            document.getElementById("hamburgerContainer");
        const hamburgerShow = document.getElementById("hamburgerShow");
        const hamburgerClose = document.getElementById("hamburgerClose");
        const navigationContainer = document.getElementById(
            "navigationContainer"
        );

        if (navigationContainer.classList.contains("w-full")) {
            navigationContainer.classList.remove("w-full");
            navigationContainer.classList.add("w-0");
            navigationContainer.parentElement.classList.add("w-0");
            navigationContainer.parentElement.classList.remove("w-full");

            hamburgerShow.classList.toggle("hidden");
            hamburgerClose.classList.toggle("hidden");

            document.body.style.overflow = "inherit";
        }
    }, [currentPath]);

    useEffect(() => {
        const hamburgerContainer =
            document.getElementById("hamburgerContainer");
        const hamburgerShow = document.getElementById("hamburgerShow");
        const hamburgerClose = document.getElementById("hamburgerClose");
        const navigationContainer = document.getElementById(
            "navigationContainer"
        );

        hamburgerContainer.addEventListener("click", () => {
            if (navigationContainer.classList.contains("w-0")) {
                navigationContainer.classList.remove("w-0");
                navigationContainer.classList.add("w-full");
                navigationContainer.parentElement.classList.remove("w-0");
                navigationContainer.parentElement.classList.add("w-full");

                hamburgerShow.classList.toggle("hidden");
                hamburgerClose.classList.toggle("hidden");

                document.body.style.overflow = "hidden";
            } else {
                navigationContainer.classList.remove("w-full");
                navigationContainer.classList.add("w-0");
                navigationContainer.parentElement.classList.add("w-0");
                navigationContainer.parentElement.classList.remove("w-full");

                hamburgerShow.classList.toggle("hidden");
                hamburgerClose.classList.toggle("hidden");

                document.body.style.overflow = "inherit";
            }
        });
    }, []);

    return (
        <header className="py-3 bg-secondary-500 lg:bg-secondary-300 relative z-20">
            <div className="row flex items-center justify-between gap-8 lg:relative">
                <div className="logo">
                    <Link to="/" className="">
                        <img
                            src={Logo}
                            alt="LabelPlug"
                            className="w-32 filter brightness-[0] invert-[1]"
                        />
                    </Link>
                </div>
                <span
                    id="hamburgerContainer"
                    className="lg:hidden text-primary-100 bg-transparent border-1-2rem border-primary-100 transition-all duration-300 p-[0.3rem] cursor-pointer rounded-md"
                >
                    <List
                        id="hamburgerShow"
                        size={24}
                        className="font-bold pointer-events-none"
                    />
                    <X
                        id="hamburgerClose"
                        size={24}
                        className="font-bold pointer-events-none hidden"
                    />
                </span>
                <div className="w-0 lg:w-full bg-secondary-500 lg:bg-transparent absolute top-0 left-0 -z-10 lg:z-auto lg:static transition-all duration-300">
                    <ul
                        id="navigationContainer"
                        className="w-0 lg:w-full h-screen lg:h-auto flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-8 lg:gap-4 overflow-hidden transition-all duration-300"
                    >
                        <div className="flex items-center justify-start flex-col lg:flex-row gap-4 text-sm font-medium">
                            <li className="transition-all duration-300 hover:text-primary-100">
                                <Link
                                    to={
                                        isLoggedin &&
                                        userAdminPanelPaths.includes(
                                            currentPath
                                        )
                                            ? "/dashboard"
                                            : "/"
                                    }
                                >
                                    {isLoggedin &&
                                    userAdminPanelPaths.includes(currentPath)
                                        ? "Dashboard"
                                        : "Home"}
                                </Link>
                            </li>

                            <li className="transition-all duration-300 hover:text-primary-100">
                                <Link
                                    to={
                                        isLoggedin &&
                                        userAdminPanelPaths.includes(
                                            currentPath
                                        )
                                            ? "/labels"
                                            : "/pricing"
                                    }
                                >
                                    {isLoggedin &&
                                    userAdminPanelPaths.includes(currentPath)
                                        ? "Labels"
                                        : "Pricing"}
                                </Link>
                            </li>

                            {isLoggedin &&
                            userAdminPanelPaths.includes(currentPath) ? (
                                <li className="transition-all duration-300 hover:text-primary-100">
                                    <Link to="/deposit">Deposit</Link>
                                </li>
                            ) : null}

                            {isLoggedin &&
                            userAdminPanelPaths.includes(currentPath) ? (
                                <li className="transition-all duration-300 hover:text-primary-100">
                                    <Link to="/address-book">Address Book</Link>
                                </li>
                            ) : null}

                            <li className="transition-all duration-300 hover:text-primary-100">
                                <Link to="/support">Support</Link>
                            </li>

                            {!isLoggedin &&
                            !userAdminPanelPaths.includes(currentPath) ? (
                                <li className="transition-all duration-300 hover:text-primary-100">
                                    <Link to="/about">About</Link>
                                </li>
                            ) : null}
                        </div>

                        <div className="flex items-center justify-center flex-row gap-3 flex-wrap">
                            <span className="text-secondary-200 bg-secondary-400 hover:bg-secondary-500 transition-all duration-300 cursor-pointer p-3 rounded-full">
                                <MoonFill
                                    size={18}
                                    className="pointer-events-none"
                                />
                            </span>
                            {isLoggedin &&
                            userAdminPanelPaths.includes(currentPath) ? (
                                <>
                                    <div className="w-10 h-10 flex items-center justify-center object-contain object-center rounded-full relative">
                                        <img
                                            src={Avatar}
                                            alt="Avatar"
                                            className="max-w-full rounded-full"
                                        />

                                        <span className="w-3 h-3 absolute right-0 bottom-0 bg-success rounded-full"></span>
                                    </div>

                                    <div className="w-full lg:w-min flex items-center lg:items-start justify-center flex-col gap-0">
                                        <h4 className="text-white-200 font-semibold text-base">
                                            Sam Joe
                                        </h4>
                                        <h5 className="text-secondary-200 text-sm">
                                            samjoe@gmail.com
                                        </h5>
                                    </div>

                                    <button className="btn btn-primary flex items-center justify-center gap-1">
                                        <Power size={16} className="" />
                                        Logout
                                    </button>
                                </>
                            ) : isLoggedin ? (
                                <>
                                    <Link
                                        to="/dashboard"
                                        className="btn btn-primary"
                                    >
                                        User Panel
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="btn btn-secondary"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="btn btn-primary"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </header>
    );
}
