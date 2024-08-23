export default function Hero() {
    return (
        <section className="py-12">
            <div className="row flex items-center justify-center flex-col gap-4 text-center py-12">
                <h1 className="text-6xl text-white-200 font-bold">
                    Hi there, we're{" "}
                    <span className="text-primary-100">LabelPlug</span>
                </h1>
                <h3 className="text-xl text-white-200 font-semibold">
                    We're Building the Shipping Platform for 21st Century.
                </h3>
                <p className="lg:w-1/2 font-semibold text-secondary-200">
                    LabelPlug was designed to give every seller access to the
                    best pricing for shipments instead of paying huge amounts to
                    giant companies.
                </p>
            </div>

            <div className="row flex items-center lg:items-start justify-center flex-col gap-20 border-t-1-2rem border-secondary-100 py-8">
                <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                    <h2 className="text-4xl font-semibold text-white-200">
                        Our reach
                    </h2>
                    <p className="font-semibold text-secondary-200">
                        LabelPlug is the leading shipping service for lower
                        shipping costs.
                    </p>
                </div>

                <div className="w-full grid lg:grid-cols-3 gap-8">
                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 border-t-1-2rem border-secondary-100 py-8">
                        <h1 className="text-5xl text-white-200 font-bold">
                            400+
                        </h1>
                        <h6 className="text-sm font-normal text-secondary-200">
                            CUSTOMERS
                        </h6>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 border-t-1-2rem border-secondary-100 py-8">
                        <h1 className="text-5xl text-white-200 font-bold">
                            10K+
                        </h1>
                        <h6 className="text-sm font-normal text-secondary-200">
                            SHIPPED
                        </h6>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 border-t-1-2rem border-secondary-100 py-8">
                        <h1 className="text-5xl text-white-200 font-bold">
                            $500K+
                        </h1>
                        <h6 className="text-sm font-normal text-secondary-200">
                            SAVED
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
