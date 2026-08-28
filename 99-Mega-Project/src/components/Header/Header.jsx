import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status);

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];

    return (
        <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 shadow-lg backdrop-blur">
            <Container>
                <nav className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link
                        to="/"
                        className="shrink-0 transition-transform duration-200 hover:scale-105"
                    >
                        <Logo width="90px" />
                    </Link>

                    {/* Navigation */}
                    <div className="flex items-center gap-2">
                        <ul className="flex items-center gap-1">
                            {navItems.map(
                                (item) =>
                                    item.active && (
                                        <li key={item.name}>
                                            <Link
                                                to={item.slug}
                                                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-200 hover:bg-gray-800 hover:text-white"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    )
                            )}
                        </ul>

                        {/* Logout */}
                        {authStatus && (
                            <div className="ml-2 border-l border-gray-700 pl-3">
                                <LogoutBtn />
                            </div>
                        )}
                    </div>
                </nav>
            </Container>
        </header>
    );
};

export default Header;