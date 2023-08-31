import React from "react";

import NotFoundImg from "/img/404.svg";

export default function NotFound() {
    return (
        <section className="py-12 bg-secondary-400">
            <div className="row flex items-center justify-center flex-col gap-4">
                <div className="w-3/4 lg:w-1/4">
                    <img src={NotFoundImg} alt="" />
                </div>
                <div className="">
                    <h3 className="text-2xl lg:text-3xl text-white-200 font-semibold text-center">
                        Your Requested Content Couldn't Found.
                    </h3>
                </div>
            </div>
        </section>
    );
}
