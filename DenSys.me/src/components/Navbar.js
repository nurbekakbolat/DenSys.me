import React, { useState, useEffect, useContext } from "react";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import authContext from "../Contexts";
import axios from "axios";
axios.defaults.withCredentials = true;

function Navbar() {
    // authentication context to display 'sign in' or 'sign out' depending
    // on whether the user is authenticated or not;
    // also logout functionality
    const { authenticated, setAuthenticated } = useContext(authContext);
    const navigate = useNavigate();
    const logout = async (e) => {
        console.log("clicked");
        e.preventDefault();
        try {
            await axios
                .post(
                    "http://localhost:5000/logout",
                    {},
                    { withCredentials: true }
                )
                .then((response) => {
                    if (response.status === 200) {
                        setAuthenticated(false);
                        navigate("/");
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        WHO care
                        <i class="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/about"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/features"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Features
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/pricing"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/contacts"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                Contacts
                            </Link>
                        </li>
                    </ul>
                    {!authenticated ? (
                        <div className="sign-btns">
                            {button && (
                                <Button
                                    link="/signin"
                                    buttonStyle="btn--outline"
                                >
                                    SIGN IN
                                </Button>
                            )}
                            {/* {button && (
                                <Button
                                    link="/signup"
                                    buttonStyle="btn--outline"
                                >
                                    SIGN UP
                                </Button>
                            )} */}
                        </div>
                    ) : (
                        <div className="sign-btns">
                            {button && (
                                <Button
                                    onClick={logout}
                                    buttonStyle="btn--outline"
                                >
                                    SIGN OUT
                                </Button>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
