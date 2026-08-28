import { Link } from "react-router-dom";
import { Logo, Container } from "../index";

const Footer = () => {
    return (
        <footer className="w-full border-t border-gray-800 bg-[#080b12]">
            <Container>

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link to="/" className="inline-block">
                            <Logo width="90px" />
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-6 text-gray-500">
                            Write, share and discover amazing stories with BlogApp.
                        </p>

                        <p className="mt-6 text-xs text-gray-600">
                            © 2026 BlogApp. All rights reserved.
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Company
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Features
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Pricing
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Affiliate Program
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Press Kit
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Support
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Account
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Help
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Contact Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Customer Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-500 transition-colors duration-200 hover:text-white"
                                >
                                    Licensing
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 py-5">
                    <p className="text-center text-xs text-gray-600">
                        Built with React, Redux Toolkit & Appwrite.
                    </p>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;