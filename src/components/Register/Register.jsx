import React from "react";
import { Link } from "react-router-dom";

import Logo from "/img/logo.png";

export default function Register() {
    return (
        <section className="py-28">
            <div className="row min-h-[70vh] flex items-center justify-center">
                <div className="w-11/12 lg:w-2/5 flex items-start justify-center flex-col gap-6 px-5 lg:px-10 py-10 rounded-lg bg-secondary-300">
                    <div className="logo">
                        <Link to="/" className="">
                            <img
                                src={Logo}
                                alt="LabelPlug"
                                className="w-80 filter brightness-[0] invert-[1]"
                            />
                        </Link>
                    </div>
                    <div className="w-full flex items-start justify-center flex-col gap-2">
                        <h3 className="text-4xl font-bold text-white-200">
                            Register
                        </h3>
                        <p className="text-secondary-200 text-sm">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-primary-100 transition-all duration-300 hover:text-primary-200"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                    <form
                        id="registerForm"
                        action="#"
                        className="w-full flex items-start justify-center flex-col gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <label
                                className="text-sm font-semibold text-white-300"
                                htmlFor="fullNameBox"
                            >
                                Full Name
                            </label>
                            <input
                                id="fullNameBox"
                                type="name"
                                name="fullName"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label
                                className="text-sm font-semibold text-white-300"
                                htmlFor="emailBox"
                            >
                                Email
                            </label>
                            <input
                                id="emailBox"
                                type="email"
                                name="email"
                                placeholder="Email address here"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label
                                className="text-sm font-semibold text-white-300"
                                htmlFor="passwordBox"
                            >
                                Password
                            </label>
                            <input
                                id="passwordBox"
                                type="password"
                                name="password"
                                placeholder="**********"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label
                                className="text-sm font-semibold text-white-300"
                                htmlFor="companyNameBox"
                            >
                                Company Name
                            </label>
                            <input
                                id="companyNameBox"
                                type="text"
                                name="companyName"
                                placeholder="Company Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label
                                className="text-sm font-semibold text-white-300"
                                htmlFor="phoneBox"
                            >
                                Phone
                            </label>
                            <input
                                id="phoneBox"
                                type="text"
                                name="phoneBox"
                                placeholder="Phone"
                                required
                            />
                        </div>

                        <div className="form-group flex items-center justify-start flex-row gap-2 pl-6 relative">
                            <input
                                id="isAgree"
                                name="isAgree"
                                type="checkbox"
                                className="flex-[0] input-checkbox"
                                required
                            />
                            <label
                                htmlFor="isAgree"
                                className="text-sm text-secondary-200"
                            >
                                I agree to the{" "}
                                <Link
                                    className="text-primary-100 hover:text-primary-200 text-sm transition-all duration-300"
                                    to="/tos"
                                >
                                    Terms of Service{" "}
                                </Link>
                                and{" "}
                                <Link
                                    className="text-primary-100 hover:text-primary-200 text-sm transition-all duration-300"
                                    to="/privacy"
                                >
                                    Privacy Policy.
                                </Link>
                            </label>
                        </div>
                        <div className="form-group">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </form>
                    <div className="w-full flex items-center justify-center">
                        <p className="w-full text-sm text-error-200 bg-error-100 px-4 py-2 rounded text-center">
                            Please fillup all the required information.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
