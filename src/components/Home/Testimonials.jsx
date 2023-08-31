import React from "react";

export default function Testimonials() {
    return (
        <section className="py-28">
            <div className="row grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-40">
                <div className="flex items-center lg:items-start justify-center gap-8 flex-col">
                    <div className="text-center lg:text-left">
                        <p className="text-xl text-secondary-200">
                            "I am using LabelPlug for my online store. Shipping
                            is so easy now. I click a button, fill in box dims
                            and weight, and print. And it's super cheap too."
                        </p>
                    </div>
                    <div className="flex items-center lg:items-start justify-center gap-1 flex-col">
                        <h5 className="text-base font-semibold">Erik</h5>
                        <span className="text-sm text-secondary-200">
                            LabelPlug Customer
                        </span>
                    </div>
                </div>

                <div className="flex items-center lg:items-start justify-center gap-8 flex-col">
                    <div className="text-center lg:text-left">
                        <p className="text-xl text-secondary-200">
                            "LabelPlug was super easy and cheap. This helped me
                            generate more sales and revenue due to lower
                            shipment costs."
                        </p>
                    </div>
                    <div className="flex items-center lg:items-start justify-center gap-1 flex-col">
                        <h5 className="text-base font-semibold">Chris C.</h5>
                        <span className="text-sm text-secondary-200">
                            LabelPlug Customer
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
