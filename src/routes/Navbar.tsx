import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(!open);
    const closeMenu = () => setOpen(false);

    return (
        <React.Fragment>
            <header className="navbar">
                <nav className="nav">
                    <Link 
                        to={"/"}
                        className="nav__logo"
                        onClick={closeMenu}
                    >
                        Shop
                    </Link>

                    {/* NAV MENU BUTTON */}
                    <button 
                        className="nav__button"
                        type="button"
                        aria-labelledby="toggle"
                        aria-expanded={open}
                        onClick={handleClick}
                    >
                        <aside className={`
                            nav__burger ${open ? "open" : ""}`
                        }>
                            <span className="nav__line" />
                            <span className="nav__line" />
                            <span className="nav__line" />
                        </aside>
                    </button>

                    {/* SIDEBAR AND CONTAINER QUERIES */}
                    <menu className={open ? 
                        "nav__menu active" : 
                        "nav__menu"
                    }>
                        <li className="nav__item">
                            <Link to={"/products"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Products
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"/category"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Categories
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link to={"/cart"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Cart
                            </Link>
                        </li>
                    </menu>
                </nav>
            </header>
            <Outlet />
        </React.Fragment>
    );
};


