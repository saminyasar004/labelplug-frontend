import React from "react";
import { Link } from "react-router-dom";

import { CheckCircleFill } from "react-bootstrap-icons";
import HeroImg from "/img/home-hero-img.svg";
import HimsLogo from "/img/hims-logo.svg";
import JaggadLogo from "/img/jaggad_logo.svg";
import BirdiesLogo from "/img/birdies_logo.svg";
import ViivvLogo from "/img/viivv-logo.svg";
import AesopLogo from "/img/aesop-logo.svg";

export default function Hero() {
    return (
        <section className="pt-28 pb-16 bg-hero-gradiant bg-cover bg-no-repeat">
            <div className="row flex items-center justify-between lg:flex-row flex-col-reverse">
                <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col gap-9">
                    <h1 className="w-full lg:w-10/12 text-5xl lg:text-6xl text-center lg:text-left font-semibold text-white-200 leading-[1.2em]">
                        Best Shipping Service to Save Money
                    </h1>
                    <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col gap-4">
                        <div className="flex items-center justify-start gap-2">
                            <CheckCircleFill
                                size={18}
                                className="text-success"
                            />
                            <h4 className="text-lg font-semibold">
                                Simple to use for thousand shipments
                            </h4>
                        </div>

                        <div className="flex items-center justify-start gap-2">
                            <CheckCircleFill
                                size={18}
                                className="text-success"
                            />
                            <h4 className="text-lg font-semibold">
                                Best pricing guaranteed
                            </h4>
                        </div>

                        <div className="flex items-center justify-start gap-2">
                            <CheckCircleFill
                                size={18}
                                className="text-success"
                            />
                            <h4 className="text-lg font-semibold">
                                API access for developers
                            </h4>
                        </div>
                    </div>
                    <Link to="/register" className="btn btn-primary">
                        Get started now
                    </Link>
                </div>
                <div className="flex items-center justify-center w-full lg:w-4/5">
                    <img src={HeroImg} alt="" />
                </div>
            </div>

            <div className="row flex items-center justify-center flex-col gap-10 pt-20 lg:py-24">
                <div className="text-center lg:text-left">
                    <h5 className="text-sm text-secondary-200 tracking-widest">
                        OUR PARTNERS WHO ARE SAVING MONEY ON THEIR SHIPMENTS
                    </h5>
                </div>
                <div className="w-full flex items-center justify-center flex-wrap gap-8 lg:gap-20">
                    <img
                        src={HimsLogo}
                        alt=""
                        className="filter invert-[0.5] brightness-100"
                    />
                    <img
                        src={JaggadLogo}
                        alt=""
                        className="filter invert-[0.5] brightness-100"
                    />
                    <img
                        src={BirdiesLogo}
                        alt=""
                        className="filter invert-[0.5] brightness-100"
                    />
                    <img
                        src={ViivvLogo}
                        alt=""
                        className="filter invert-[0.5] brightness-100"
                    />
                    <img
                        src={AesopLogo}
                        alt=""
                        className="filter invert-[0.5] brightness-100"
                    />
                </div>
            </div>
        </section>
    );
}
