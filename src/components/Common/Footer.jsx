import React from "react";
import { Link } from "react-router-dom";

import Logo from "/img/logo.png";
import UpsLogo from "/img/ups.png";
import UspsLogo from "/img/usps.png";

export default function Footer() {
    return (
        <footer className="pt-28 pb-2 bg-secondary-500">
            <div className="row grid grid-cols-1 lg:grid-cols-5 items-start gap-10 lg:gap-20">
                <div className="lg:col-span-2 flex items-center lg:items-start justify-center flex-col gap-8">
                    <div className="logo">
                        <Link to="/" className="">
                            <img
                                src={Logo}
                                alt="LabelPlug"
                                className="w-32 filter brightness-[0] invert-[1]"
                            />
                        </Link>
                    </div>
                    <div className="w-full lg:w-4/5 text-center lg:text-left">
                        <p className="text-sm text-secondary-200">
                            LabelPlug is a shipping service that helps you cut
                            down on shipping costs.
                        </p>
                    </div>
                    <div className="w-full flex items-center lg:items-start justify-center lg:justify-start gap-12">
                        <img
                            src={UpsLogo}
                            alt="UPS"
                            className="w-16 filter brightness-[0] invert-[1]"
                        />
                        <img
                            src={UspsLogo}
                            alt="USPS"
                            className="w-16 filter brightness-[0] invert-[1]"
                        />
                    </div>
                </div>

                <div className="flex items-center lg:items-start justify-center flex-col gap-4">
                    <h4 className="text-xl text-white-200 font-semibold">
                        Company
                    </h4>
                    <ul className="flex items-center lg:items-start justify-center flex-col gap-3">
                        <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                            <Link to="/about">About</Link>
                        </li>

                        <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                            <Link to="/pricing">Pricing</Link>
                        </li>

                        <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center lg:items-start justify-center flex-col gap-4">
                    <h4 className="text-xl text-white-200 font-semibold">
                        Support
                    </h4>
                    <ul className="flex items-center lg:items-start justify-center flex-col gap-3">
                        <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                            <Link to="/support">Help and Support</Link>
                        </li>

                        <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                            <Link to="/support">
                                Frequently Asked Questions
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center lg:items-start justify-center flex-col gap-4">
                    <h4 className="text-xl text-white-200 font-semibold">
                        Get in touch
                    </h4>
                    <ul className="flex items-center lg:items-start justify-center flex-col gap-3">
                        <li className="text-sm text-secondary-200">
                            Email:{" "}
                            <Link
                                to="mailto:support@labelplug.app"
                                target="_blank"
                                className="transition-all duration-300 text-primary-100 hover:text-primary-200"
                            >
                                support@lableplug.app
                            </Link>
                        </li>

                        <li className="text-sm text-secondary-200">
                            Telegram:{" "}
                            <Link
                                to="https://lableplug.t.me"
                                target="_blank"
                                className="transition-all duration-300 text-primary-100 hover:text-primary-200"
                            >
                                @lableplug
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row flex items-center justify-between flex-col lg:flex-row border-t-2rem border-secondary-100 py-3 mt-8 gap-4 lg:gap-0">
                <div className="">
                    <p className="text-sm text-secondary-200">
                        © 2023 LabelPlug. All Rights Reserved
                    </p>
                </div>
                <ul className="flex items-center justify-center gap-3 lg:gap-6">
                    <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                        <Link to="/privacy">Privacy Policy</Link>
                    </li>

                    <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                        <Link to="/cookies">Cookie Notice</Link>
                    </li>

                    <li className="text-sm transition-all duration-300 text-secondary-200 hover:text-primary-100">
                        <Link to="/tos">Term of Use</Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
