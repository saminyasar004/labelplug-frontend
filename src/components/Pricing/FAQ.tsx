import { Link } from "react-router-dom";

export default function FAQ() {
    return (
        <section className="py-28 bg-secondary-400">
            <div className="row flex items-center justify-center flex-col gap-14">
                <div className="w-full flex items-center justify-center">
                    <h2 className="text-4xl font-semibold text-white-200 text-center">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="w-full grid grid-cols-1 lg:grid-cols-3 items-start justify-center gap-8">
                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                        <h3 className="text-base text-white-200 font-semibold">
                            Are there any other hidden fees?
                        </h3>
                        <p className="text-sm text-secondary-200">
                            None at all!
                        </p>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                        <h3 className="text-base text-white-200 font-semibold">
                            How does insurance pricing work?
                        </h3>
                        <p className="text-sm text-secondary-200">
                            If you wish, you can add insurance to your package
                            on supported providers. Insurance cost is around 10%
                            of the package value.
                        </p>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                        <h3 className="text-base text-white-200 font-semibold">
                            Can I cancel anytime?
                        </h3>
                        <p className="text-sm text-secondary-200">
                            We do not have a subscription model. You top-up your
                            account, then create shipments or buy shipment
                            plans. You can just stop using our service at any
                            time, however we can not offer refunds in this case.
                        </p>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                        <h3 className="text-base text-white-200 font-semibold">
                            Why is it so cheap?
                        </h3>
                        <p className="text-sm text-secondary-200">
                            We have negotiated rates, we are selling with a very
                            small margin. Instead of paying for marketing, we
                            are giving you a discounted prices and hope you will
                            tell your friends about us.
                        </p>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                        <h3 className="text-base text-white-200 font-semibold">
                            There are other cheaper sellers on some forums. Why
                            is that?
                        </h3>
                        <p className="text-sm text-secondary-200">
                            Their labels are usually not trackable, have a high
                            seizure chance, not insured and not reliable in most
                            cases.
                        </p>
                    </div>

                    <div className="flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                        <h3 className="text-base text-white-200 font-semibold">
                            What about refunds?
                        </h3>
                        <p className="text-sm text-secondary-200">
                            If you have a problem with your shipment caused by
                            our service, we will try to help you resolve it and
                            refund if necessary, but in most cases we can not
                            offer refunds.
                        </p>
                    </div>
                </div>

                <div className="w-full flex items-center lg:items-start justify-between flex-col lg:flex-row gap-2 lg:gap-0 bg-secondary-300 px-8 py-5 rounded-lg mt-20 text-center lg:text-left">
                    <h3 className="text-base font-semibold text-white-200">
                        Have other questions?
                    </h3>
                    <p className="text-sm text-secondary-200">
                        Send us a message via Telegram:{" "}
                        <Link
                            to="https://lableplug.t.me"
                            target="_blank"
                            className="transition-all duration-300 text-primary-100 hover:text-primary-200"
                        >
                            @lableplug
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
