import { Link } from "react-router-dom";
import { CheckCircle } from "react-bootstrap-icons";

import UpsLogo from "/img/ups-price-card.svg";

export default function PricingCards() {
    return (
        <section className="py-28 bg-secondary-400">
            <div className="row grid grid-cols-1 lg:grid-cols-6 gap-6 flex-wrap">
                <div className="col-span-2 flex items-center justify-center flex-col gap-8 px-6 py-8 rounded-xl bg-secondary-300">
                    <div className="w-full flex items-center justify-center">
                        <img src={UpsLogo} alt="" className="w-1/2" />
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <h4 className="text-2xl text-white-200 font-semibold">
                            Ground
                        </h4>
                        <p className="w-4/5 text-sm text-center text-secondary-200">
                            Standart, affordable shipping. Delivery in 1-5
                            business days.
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1">
                        <span className="text-xs text-white-200 font-semibold">
                            from
                        </span>
                        <span className="text-xl text-white-200 font-semibold">
                            $
                        </span>
                        <span className="text-5xl font-semibold transform">
                            2
                        </span>
                        <span className="px-1 text-secondary-200 align-bottom">
                            /pkg
                        </span>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Link
                            to="/register"
                            className="btn btn-primary-transparent w-full text-center"
                        >
                            Get Started Now
                        </Link>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col gap-6 pt-6 border-t-2rem border-secondary-200">
                        <h4 className="text-lg text-white-200 font-semibold">
                            Detailed Pricing:
                        </h4>
                        <ul className="w-full flex items-start justify-center flex-col gap-3">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Insurance
                                </span>
                                <span className="text-sm text-secondary-200">
                                    available
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    100% legit
                                </span>
                                <span className="text-sm text-secondary-200">
                                    labels guaranteed*
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Quick delivery
                                </span>
                                <span className="text-sm text-secondary-200">
                                    and immediately trackable
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-2 flex items-center justify-center flex-col gap-8 px-6 py-8 rounded-xl bg-secondary-300">
                    <div className="w-full flex items-center justify-center">
                        <img src={UpsLogo} alt="" className="w-1/2" />
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <h4 className="text-2xl text-white-200 font-semibold">
                            2nd Day Air
                        </h4>
                        <p className="w-4/5 text-sm text-center text-secondary-200">
                            For businesses that need a little bit{" "}
                            <span className="font-semibold text-white">
                                more speed
                            </span>
                            , delivery in{" "}
                            <span className="font-semibold text-white">
                                2 business days.
                            </span>
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1">
                        <span className="text-xs text-white-200 font-semibold">
                            from
                        </span>
                        <span className="text-xl text-white-200 font-semibold">
                            $
                        </span>
                        <span className="text-5xl font-semibold transform">
                            4
                        </span>
                        <span className="px-1 text-secondary-200 align-bottom">
                            /pkg
                        </span>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Link
                            to="/register"
                            className="btn btn-primary w-full text-center"
                        >
                            Get Started Now
                        </Link>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col gap-6 pt-6 border-t-2rem border-secondary-200">
                        <h4 className="text-lg text-white-200 font-semibold">
                            Detailed Pricing:
                        </h4>
                        <ul className="w-full flex items-start justify-center flex-col gap-3">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Insurance
                                </span>
                                <span className="text-sm text-secondary-200">
                                    available
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    100% legit
                                </span>
                                <span className="text-sm text-secondary-200">
                                    labels guaranteed*
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Quick delivery
                                </span>
                                <span className="text-sm text-secondary-200">
                                    and immediately trackable
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-2 flex items-center justify-center flex-col gap-8 px-6 py-8 rounded-xl bg-secondary-300">
                    <div className="w-full flex items-center justify-center">
                        <img src={UpsLogo} alt="" className="w-1/2" />
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <h4 className="text-2xl text-white-200 font-semibold">
                            Next Day Air Early
                        </h4>
                        <p className="w-4/5 text-sm text-center text-secondary-200">
                            Best for{" "}
                            <span className="font-semibold text-white-200">
                                time-sensitive
                            </span>{" "}
                            shipments. Delivery{" "}
                            <span className="font-semibold text-white-200">
                                by 8 AM guaranteed
                            </span>{" "}
                            to most addresses.
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1">
                        <span className="text-xs text-white-200 font-semibold">
                            from
                        </span>
                        <span className="text-xl text-white-200 font-semibold">
                            $
                        </span>
                        <span className="text-5xl font-semibold transform">
                            6
                        </span>
                        <span className="px-1 text-secondary-200 align-bottom">
                            /pkg
                        </span>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Link
                            to="/register"
                            className="btn btn-primary-transparent w-full text-center"
                        >
                            Get Started Now
                        </Link>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col gap-6 pt-6 border-t-2rem border-secondary-200">
                        <h4 className="text-lg text-white-200 font-semibold">
                            Detailed Pricing:
                        </h4>
                        <ul className="w-full flex items-start justify-center flex-col gap-3">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Insurance
                                </span>
                                <span className="text-sm text-secondary-200">
                                    available
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    100% legit
                                </span>
                                <span className="text-sm text-secondary-200">
                                    labels guaranteed*
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Quick delivery
                                </span>
                                <span className="text-sm text-secondary-200">
                                    and immediately trackable
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div></div>

                <div className="col-span-2 flex items-center justify-center flex-col gap-8 px-6 py-8 rounded-xl bg-secondary-300">
                    <div className="w-full flex items-center justify-center">
                        <img src={UpsLogo} alt="" className="w-1/2" />
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <h4 className="text-2xl text-white-200 font-semibold">
                            Worldwide Expedited
                        </h4>
                        <p className="w-4/5 text-sm text-center text-secondary-200">
                            Standard international shipping. Ships in 1-5
                            business days.
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1">
                        <span className="text-xs text-white-200 font-semibold">
                            from
                        </span>
                        <span className="text-xl text-white-200 font-semibold">
                            $
                        </span>
                        <span className="text-5xl font-semibold transform">
                            30
                        </span>
                        <span className="px-1 text-secondary-200 align-bottom">
                            /pkg
                        </span>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Link
                            to="/register"
                            className="btn btn-primary-transparent w-full text-center"
                        >
                            Get Started Now
                        </Link>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col gap-6 pt-6 border-t-2rem border-secondary-200">
                        <h4 className="text-lg text-white-200 font-semibold">
                            Detailed Pricing:
                        </h4>
                        <ul className="w-full flex items-start justify-center flex-col gap-3">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Customs prepaid
                                </span>
                                <span className="text-sm text-secondary-200">
                                    available
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    100% legit
                                </span>
                                <span className="text-sm text-secondary-200">
                                    labels guaranteed*
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Quick delivery
                                </span>
                                <span className="text-sm text-secondary-200">
                                    and immediately trackable
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-2 flex items-center justify-center flex-col gap-8 px-6 py-8 rounded-xl bg-secondary-300">
                    <div className="w-full flex items-center justify-center">
                        <img src={UpsLogo} alt="" className="w-1/2" />
                    </div>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <h4 className="text-2xl text-white-200 font-semibold">
                            Worldwide Express
                        </h4>
                        <p className="w-4/5 text-sm text-center text-secondary-200">
                            Fastest international shipping, delivery in 1-3
                            business days.
                        </p>
                    </div>

                    <div className="w-full flex items-center justify-center gap-1">
                        <span className="text-xs text-white-200 font-semibold">
                            from
                        </span>
                        <span className="text-xl text-white-200 font-semibold">
                            $
                        </span>
                        <span className="text-5xl font-semibold transform">
                            40
                        </span>
                        <span className="px-1 text-secondary-200 align-bottom">
                            /pkg
                        </span>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <Link
                            to="/register"
                            className="btn btn-primary-transparent w-full text-center"
                        >
                            Get Started Now
                        </Link>
                    </div>

                    <div className="w-full flex items-start justify-center flex-col gap-6 pt-6 border-t-2rem border-secondary-200">
                        <h4 className="text-lg text-white-200 font-semibold">
                            Detailed Pricing:
                        </h4>
                        <ul className="w-full flex items-start justify-center flex-col gap-3">
                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Customs prepaid
                                </span>
                                <span className="text-sm text-secondary-200">
                                    available
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    100% legit
                                </span>
                                <span className="text-sm text-secondary-200">
                                    labels guaranteed*
                                </span>
                            </li>

                            <li className="flex items-center justify-center gap-2">
                                <CheckCircle
                                    size={15}
                                    className="text-success"
                                />
                                <span className="text-sm font-semibold">
                                    Quick delivery
                                </span>
                                <span className="text-sm text-secondary-200">
                                    and immediately trackable
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div></div>
            </div>

            <div className="row flex items-center justify-center py-8">
                <p className="text-sm text-secondary-200">
                    *Only applies to Digital Access Labels.
                </p>
            </div>
        </section>
    );
}
