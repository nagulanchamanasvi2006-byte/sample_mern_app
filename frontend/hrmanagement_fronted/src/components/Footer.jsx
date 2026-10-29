import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <footer className="custom-footer">
            <div className="container">
                <div className="row align-items-center gy-3">
                    <div className="col-md-5">
                        <Link className="footer-brand" to="/">
                            People<span>First</span>
                        </Link>
                        <p className="footer-tagline">A better workplace starts with people.</p>
                    </div>
                    <div className="col-md-4">
                        <nav className="footer-links" aria-label="Footer navigation">
                            <Link to="/about">About</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/login">Log in</Link>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <p className="footer-copyright">
                            &copy; {new Date().getFullYear()} Manasvi. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
