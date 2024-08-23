export default function Cookie() {
    return (
        <section className="py-28">
            <div className="row flex items-center justify-center flex-col text-center gap-28 pb-6">
                <div className="w-full lg:w-2/3 flex items-center justify-center flex-col gap-4">
                    <h1 className="text-5xl text-white-200 font-bold">
                        Cookie Notice
                    </h1>
                    <h4 className="font-semibold text-secondary-200">
                        Read our terms below to learn more about our cookie
                        usage.
                    </h4>
                </div>

                <div className="w-full lg:w-2/3 flex items-center">
                    <h3 className="font-semibold text-xl text-white-200">
                        Last updated:{" "}
                        <span className="text-primary-100">
                            4th of January, 2023
                        </span>
                    </h3>
                </div>
            </div>

            <div className="row flex items-center justify-center">
                <div className="w-full lg:w-2/3 border-t-1-2rem border-secondary-100 py-10 flex items-center lg:items-start justify-center flex-col gap-4 text-center lg:text-left">
                    <h1 className="text-3xl text-white-200 font-semibold">
                        Cookies used
                    </h1>
                    <p className="text-secondary-200">
                        We do not store any cookies except for functionality.
                        More specifically, we only use cookies for dark theme
                        preference, and user login.
                    </p>
                </div>
            </div>
        </section>
    );
}
