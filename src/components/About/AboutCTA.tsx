import { Link } from "react-router-dom";

import AboutFeatureImg from "/img/about-feature-img.png";

export default function AboutCTA() {
    return (
        <section className="pt-10 bg-primary-100">
            <div className="row flex items-center justify-center flex-col lg:flex-row gap-20">
                <div className="flex items-center lg:items-start justify-center flex-col gap-4 text-center lg:text-left">
                    <h2 className="w-full lg:w-[95%] text-4xl font-bold text-secondary-500">
                        Start generating more revenue today
                    </h2>
                    <Link to="/register" className="btn btn-white">
                        Get Started
                    </Link>
                </div>
                <div className="flex items-end justify-center">
                    <img src={AboutFeatureImg} alt="" />
                </div>
            </div>
        </section>
    );
}
