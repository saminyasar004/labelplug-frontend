import { Plus, FolderPlus, CurrencyDollar, Truck } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <section className="py-12">
            <div className="row flex items-center justify-center flex-col gap-2 pb-8">
                <div className="w-full flex items-start justify-start flex-col gap-6 p-4 rounded bg-info-100 text-info-200">
                    <p className="text-sm">
                        Labels page is updated! Track shipments and view more
                        details about bulk shipments
                    </p>
                </div>

                <div className="w-full flex items-start justify-start flex-col gap-6 p-4 rounded bg-warning-100 text-warning-200">
                    <p className="text-sm">
                        UPS uninsured is temporarily unavailable.
                    </p>
                </div>
            </div>

            <div className="row flex items-center justify-between flex-col lg:flex-row gap-6 lg:gap-0 border-b-1-2rem border-secondary-200 pb-8">
                <div className="flex items-start justify-center">
                    <h2 className="text-white-200 font-semibold text-2xl">
                        Dashboard
                    </h2>
                </div>
                <div className="flex items-start justify-center gap-4">
                    <Link
                        to="/labels"
                        className="btn btn-primary flex items-center justify-center flex-row gap-1 lg:gap-2 flex-wrap"
                    >
                        <Plus size={18} />
                        Create New Label
                    </Link>

                    <Link
                        to="/labels"
                        className="btn btn-secondary flex items-center justify-center flex-row gap-1 lg:gap-2 flex-wrap"
                    >
                        <FolderPlus size={18} />
                        Create Bulk Label
                    </Link>
                </div>
            </div>

            <div className="row pt-8">
                <div className="w-full lg:w-1/4 flex items-center justify-center flex-col gap-8 px-6 py-6 bg-secondary-300 rounded-lg">
                    <div className="w-full flex items-center justify-between">
                        <span className="text-sm text-secondary-100">
                            Balance
                        </span>
                        <CurrencyDollar
                            size={25}
                            className="text-primary-100"
                        />
                    </div>

                    <div className="w-full flex items-center lg:items-start justify-center flex-col gap-2">
                        <h4 className="text-3xl font-semibold text-white-200">
                            $0
                        </h4>
                        <Link
                            to="/deposit"
                            className="btn btn-primary-transparent"
                        >
                            + Add Balance
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row pt-8">
                <div className="w-full lg:w-3/4 flex items-center justify-center flex-col gap-8 px-6 py-6 bg-secondary-300 rounded-lg">
                    <div className="w-full flex items-center justify-between border-b-1-2rem border-secondary-200 pb-6">
                        <h5 className="flex items-center justify-between gap-2 text-white-200 font-semibold">
                            <Truck size={18} />
                            Recent Labels
                        </h5>
                        <Link
                            to="/labels"
                            className="btn btn-secondary-transparent"
                        >
                            View All
                        </Link>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <ul className="w-full flex items-start justify-start flex-col gap-4">
                            <li className="text-white-200 font-semibold text-sm">
                                No Labels Found
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
