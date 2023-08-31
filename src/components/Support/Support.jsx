import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ChevronDown } from "react-bootstrap-icons";

import QuestionImg from "/img/question.svg";

export default function Support() {
    useEffect(() => {
        const faqHeaders = document.querySelectorAll(".faq-header");

        faqHeaders.forEach((faqHeader) => {
            faqHeader.addEventListener("click", (e) => {
                faqHeaders.forEach((el) => {
                    if (
                        e.target !== el &&
                        el.nextElementSibling.classList.contains("h-auto")
                    ) {
                        // shrink
                        el.nextElementSibling.classList.toggle("h-auto");
                        el.nextElementSibling.classList.toggle("h-0");

                        el.querySelector("svg").classList.toggle("rotate-0");
                        el.querySelector("svg").classList.toggle("rotate-180");
                    }
                });

                if (e.target.nextElementSibling.classList.contains("h-auto")) {
                    // shrink
                    e.target.nextElementSibling.classList.toggle("h-auto");
                    e.target.nextElementSibling.classList.toggle("h-0");

                    e.target.querySelector("svg").classList.toggle("rotate-0");
                    e.target
                        .querySelector("svg")
                        .classList.toggle("rotate-180");
                } else {
                    // expand
                    e.target.nextElementSibling.classList.toggle("h-0");
                    e.target.nextElementSibling.classList.toggle("h-auto");

                    e.target.querySelector("svg").classList.toggle("rotate-0");
                    e.target
                        .querySelector("svg")
                        .classList.toggle("rotate-180");
                }
            });
        });
    }, []);

    return (
        <section className="py-28">
            <div className="row flex items-center justify-center flex-col text-center gap-28 pb-6">
                <div className="w-full lg:w-2/3 flex items-start justify-center flex-col gap-4">
                    <h1 className="text-5xl text-white-200 font-semibold">
                        Frequently Asked Questions
                    </h1>
                </div>
            </div>

            <div className="row flex items-center justify-center">
                <div className="w-full lg:w-2/3 border-t-1-2rem border-secondary-100 py-10 flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                    <h1 className="text-3xl text-white-200 font-semibold">
                        Can't find what you're looking for?
                    </h1>
                    <div className="flex items-start justify-center flex-col gap-4 bg-secondary-300 px-8 py-6 rounded-lg border-2 border-secondary-200">
                        <div className="">
                            <img
                                src={QuestionImg}
                                className="text-primary-100"
                                alt=""
                            />
                        </div>
                        <h3 className="text-2xl text-white-200 font-semibold">
                            Contact Us
                        </h3>
                        <p className="w-full lg:w-11/12 text-sm text-secondary-200">
                            LabelPlug is here to help. We can provide you with
                            the support you need. Just contact us and our team
                            will reply quick to you.
                        </p>
                        <div className="flex items-start justify-center flex-col gap-1">
                            <Link
                                to="mailto:support@labelplug.app"
                                target="_blank"
                                className="text-sm transition-all duration-300 text-primary-100 hover:text-primary-200"
                            >
                                support@lableplug.app
                            </Link>

                            <Link
                                to="https://lableplug.t.me"
                                target="_blank"
                                className="text-sm transition-all duration-300 text-primary-100 hover:text-primary-200"
                            >
                                @lableplug
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row flex items-center justify-center">
                <div className="w-full lg:w-2/3 border-t-1-2rem border-secondary-100 py-10 flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                    <h2 className="text-2xl text-white-200 font-semibold">
                        Contacting LabelPlug
                    </h2>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    How do I contact you?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-180 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-auto flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    Chat is the fastest way to contact customer
                                    support{" "}
                                    <Link
                                        to="https://lableplug.t.me"
                                        target="_blank"
                                        className="text-sm transition-all duration-300 text-primary-100 hover:text-primary-200"
                                    >
                                        @lableplug
                                    </Link>
                                </p>
                                <p className="w-full text-sm text-secondary-200">
                                    You can also email us:{" "}
                                    <Link
                                        to="mailto:support@labelplug.app"
                                        target="_blank"
                                        className="text-sm transition-all duration-300 text-primary-100 hover:text-primary-200"
                                    >
                                        support@lableplug.app
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    Does LabelPlug offer phone support?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    For our normal users no. If you are on our
                                    investor plan, a contact number will be
                                    provided.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    What are LabelPlug support hours?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    Support is usually available from 12PM-4PM
                                    EST, we are a small team so please be
                                    patient with us.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row flex items-center justify-center">
                <div className="w-full lg:w-2/3 border-t-1-2rem border-secondary-100 py-10 flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                    <h2 className="text-2xl text-white-200 font-semibold">
                        Getting Started
                    </h2>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    Where can I purchase boxes and mailers?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    Check with your local UPS Stores or on UPS
                                    official website.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    How do I refund my label if I've made a
                                    mistake?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    Do not use the label you generated, send us
                                    an email with the tracking number at the end
                                    of the month and we will refund you the
                                    credits back to your account after
                                    successful verification that the label has
                                    not been used.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    Is insurance included with my postage?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    All labels comes with $100 of carrier
                                    liability, for both domestic and
                                    international shipments. LabelPlug also
                                    offers coverage you can purchase when you
                                    checkout. You can opt for it when you start
                                    making a shipping label.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    How do I display LabelPlug's rates to my
                                    customers?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    We don't currently have a plug-in, but you
                                    can just show them our webpage.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    How do I pay for labels?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    You have to topup your account with credits.
                                    Credits will then be deducted for each
                                    successful label creation. We currently
                                    accept Crypto, Venmo, CashApp, PayPal, Bank
                                    Transfer as well as Credit Card. For credit
                                    cards, you have to pass through KYC before
                                    function is open to your account.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    What size are the labels?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    We offer 4x6 and 8x11.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    What can I do about a missing package?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    Please contact UPS with the sender info and
                                    they will help you submit a case and all you
                                    can do is wait for the investigation
                                    results.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    Is there a free trial?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    At this point, no. But it may in the future.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row flex items-center justify-center">
                <div className="w-full lg:w-2/3 border-t-1-2rem border-secondary-100 py-10 flex items-center lg:items-start justify-center flex-col gap-2 text-center lg:text-left">
                    <h2 className="text-2xl text-white-200 font-semibold">
                        Billing & Account
                    </h2>

                    <div className="w-full flex items-center justify-center flex-col gap-2">
                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    How does your pricing work?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    We have pay-as-you-go pricing with account
                                    balance.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    What are carrier adjustments?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    When you ship something and you did not
                                    input the correct dimensions and weight, UPS
                                    will charge the actual amount from us and we
                                    will pass this charge to you. This only
                                    applies to pay as you go pricing. Our plan
                                    subscribers do not have to worry about this.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    Can I get my account balance refunded to my
                                    payment method?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    If you do not wish to use our service
                                    anymore, we are able to refund you after 30
                                    days confirming all labels have not been
                                    used and there will be a admin fee of 20%
                                    for us to process your refund.
                                </p>
                            </div>
                        </div>

                        <div className="w-full border-2 border-secondary-200 px-4 py-4 rounded-lg flex items-start justify-center flex-col transition-all duration-300">
                            <div className="faq-header w-full flex items-center justify-between flex-row transition-all duration-300 hover:text-primary-100 text-white-200">
                                <h4 className="text-lg font-semibold w-full cursor-pointer pointer-events-none select-none">
                                    How do I cancel my LabelPlug account?
                                </h4>
                                <ChevronDown
                                    size={14}
                                    className="text-secondary-100 pointer-events-none transform rotate-0 transition-all duration-300"
                                />
                            </div>
                            <div className="faq-description w-full h-0 flex items-start justify-center flex-col gap-1 overflow-hidden transition-all duration-300 select-none">
                                <p className="w-full text-sm text-secondary-200 pt-4">
                                    Contact support and we will make sure your
                                    account gets deleted and purged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
