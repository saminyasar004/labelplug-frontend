import React from "react";

import { CheckCircleFill } from "react-bootstrap-icons";
import FeaturedImg from "/img/featured-img-1.svg";

export default function ShippingDetails() {
    return (
        <section className="py-28">
            <div className="row grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex items-center justify-center bg-secondary-400 px-4 py-8 rounded-3xl">
                    <img src={FeaturedImg} alt="" />
                </div>
                <div className="flex items-center lg:items-start justify-center gap-6 flex-col text-center lg:text-left">
                    <div className="">
                        <h6 className="text-base text-primary-300 font-semibold tracking-wide">
                            AFFORABLE SHIPPING, NOW
                        </h6>
                    </div>
                    <div className="w-full lg:w-10/12">
                        <h3 className="text-4xl lg:text-[2.4rem] leading-[1.2em] text-white-200 font-semibold">
                            Cheapest shipping service that helps you save money
                        </h3>
                    </div>
                    <div className="">
                        <h4 className="text-lg text-white-200 font-semibold">
                            Our services has the best pricing while being top
                            quality.
                        </h4>
                    </div>
                    <div className="w-full flex items-center justify-between lg:justify-start lg:gap-40">
                        <ul className="flex items-start justify-start gap-4 flex-col">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircleFill
                                    size={15}
                                    className="text-success"
                                />
                                <h6 className="text-base text-secondary-200 font-semibold">
                                    Legit
                                </h6>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircleFill
                                    size={15}
                                    className="text-success"
                                />
                                <h6 className="text-base text-secondary-200 font-semibold">
                                    Cheap
                                </h6>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircleFill
                                    size={15}
                                    className="text-success"
                                />
                                <h6 className="text-base text-secondary-200 font-semibold">
                                    No hidden fees
                                </h6>
                            </li>
                        </ul>

                        <ul className="flex items-start justify-start gap-4 flex-col">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircleFill
                                    size={15}
                                    className="text-success"
                                />
                                <h6 className="text-base text-secondary-200 font-semibold">
                                    Fast
                                </h6>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircleFill
                                    size={15}
                                    className="text-success"
                                />
                                <h6 className="text-base text-secondary-200 font-semibold">
                                    Easy to use
                                </h6>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircleFill
                                    size={15}
                                    className="text-success"
                                />
                                <h6 className="text-base text-secondary-200 font-semibold">
                                    Scalable
                                </h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
