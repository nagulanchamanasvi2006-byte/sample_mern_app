import { Link } from "react-router-dom";
import './Header.css'
function Header() {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/adminlogin">AdminLogin</Link>
            <Link to="/adminhome">AdminHome</Link>

        </div>
    )
}
export default Header;