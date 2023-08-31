import React from "react";
import { Link } from "react-router-dom";

import Logo from "/img/logo.png";

export default function ForgotPassword() {
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
                            Forgot Password?
                        </h3>
                        <p className="text-secondary-200 text-sm">
                            Recover your password. Enter your email address
                            below and then you will get an password recovery
                            mail on your inbox. After then follow the
                            instructions.
                        </p>
                    </div>
                    <form
                        id="forgotPasswordForm"
                        action="#"
                        className="w-full flex items-start justify-center flex-col gap-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
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
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Recover Password"
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
