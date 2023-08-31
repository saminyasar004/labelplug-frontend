import React from "react";

import {
    LightningFill,
    StarFill,
    BarChart,
    Speedometer,
} from "react-bootstrap-icons";

export default function Feature() {
    return (
        <section className="py-28">
            <div className="row grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="flex items-center lg:items-start justify-start flex-col gap-8">
                    <div className="flex items-start justify-center lg:justify-start">
                        <span className="bg-primary-100 p-4 rounded-full">
                            <LightningFill
                                size={20}
                                className="text-primary-400"
                            />
                        </span>
                    </div>
                    <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col text-center lg:text-left">
                        <h4 className="text-2xl font-semibold">
                            Easy Setup Process
                        </h4>
                        <p className="text-secondary-200">
                            Just signup, top-up, and start shipping!
                        </p>
                    </div>
                </div>

                <div className="flex items-center lg:items-start justify-start flex-col gap-8">
                    <div className="flex items-start justify-center lg:justify-start">
                        <span className="bg-primary-100 p-4 rounded-full">
                            <StarFill size={20} className="text-primary-400" />
                        </span>
                    </div>
                    <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col text-center lg:text-left">
                        <h4 className="text-2xl font-semibold">
                            Quality First
                        </h4>
                        <p className="text-secondary-200">
                            All of our shipments are legit and top quality.
                        </p>
                    </div>
                </div>

                <div className="flex items-center lg:items-start justify-start flex-col gap-8">
                    <div className="flex items-start justify-center lg:justify-start">
                        <span className="bg-primary-100 p-4 rounded-full">
                            <BarChart size={20} className="text-primary-400" />
                        </span>
                    </div>
                    <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col text-center lg:text-left">
                        <h4 className="text-2xl font-semibold">Scalable</h4>
                        <p className="text-secondary-200">
                            If you need only a few shipments, or thousands, we
                            can handle it.
                        </p>
                    </div>
                </div>

                <div className="flex items-center lg:items-start justify-start flex-col gap-8">
                    <div className="flex items-start justify-center lg:justify-start">
                        <span className="bg-primary-100 p-4 rounded-full">
                            <Speedometer
                                size={20}
                                className="text-primary-400"
                            />
                        </span>
                    </div>
                    <div className="flex items-center lg:items-start justify-center lg:justify-start flex-col text-center lg:text-left">
                        <h4 className="text-2xl font-semibold">Fast</h4>
                        <p className="text-secondary-200">
                            Your shipments are created and delivered instantly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
