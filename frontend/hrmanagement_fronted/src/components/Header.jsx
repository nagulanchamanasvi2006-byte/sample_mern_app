import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const currentuser = JSON.parse(localStorage.getItem("currentuser") || "null");

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem("currentuser");
        navigate("/login");
    };

    const closeMenu = () => setMenuOpen(false);
    const navLinkClass = (path) =>
        `nav-link${location.pathname === path ? " active" : ""}`;

    return (
        <nav className="navbar navbar-expand-lg custom-navbar">
            <div className="container">
                <Link className="navbar-brand brand-logo" to="/" onClick={closeMenu}>
                    <span className="brand-mark">H</span>
                    <span>People<span className="brand-accent">First</span></span>
                </Link>
                <button
                    className="navbar-toggler custom-toggler"
                    type="button"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}>
                    <div className="navbar-nav ms-auto align-items-lg-center">
                        <Link className={navLinkClass("/")} to="/" onClick={closeMenu}>Home</Link>
                        <Link className={navLinkClass("/about")} to="/about" onClick={closeMenu}>About</Link>
                        <Link className={navLinkClass("/contact")} to="/contact" onClick={closeMenu}>Contact</Link>
                        {currentuser ? (
                            <>
                                {currentuser.role === "HR" && (
                                    <Link className={navLinkClass("/hrhome")} to="/hrhome" onClick={closeMenu}>HR dashboard</Link>
                                )}
                                {currentuser.role === "EMPLOYEE" && (
                                    <Link className={navLinkClass("/emphome")} to="/emphome" onClick={closeMenu}>My dashboard</Link>
                                )}
                                {currentuser.role === "Admin" && (
                                    <Link className={navLinkClass("/adminhome")} to="/adminhome" onClick={closeMenu}>Admin dashboard</Link>
                                )}
                                <span className="navbar-user">Hi, {currentuser.name}</span>
                                <button className="btn btn-logout" type="button" onClick={handleLogout}>Log out</button>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" to="/login" onClick={closeMenu}>Log in</Link>
                                <Link className="btn btn-register" to="/register" onClick={closeMenu}>Get started</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
