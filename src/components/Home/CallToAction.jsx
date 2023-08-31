import React from "react";
import { Link } from "react-router-dom";

export default function CallToAction() {
    return (
        <section className="py-28 bg-secondary-400">
            <div className="row flex items-center justify-center gap-8 flex-col">
                <h5 className="text-base font-semibold text-warning-300 tracking-widest">
                    START SHIPPING
                </h5>
                <h1 className="text-5xl text-white-200 font-semibold">
                    Try it out now!
                </h1>
                <Link to="/register" className="btn btn-primary">
                    Get started
                </Link>
            </div>
        </section>
    );
}
