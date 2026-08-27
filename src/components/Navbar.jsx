import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-container ">
                    <Link to="/" className="navbar-brand">ShopHub</Link>
                    <div className="navbar-links">
                        <Link to="/">Home</Link>
                        <Link to="/checkout" >Cart</Link>
                    </div>
                    <div className="navbar-auth">
                        <div className="navbar-auth-links">
                        <Link to="/auth"  className="btn btn-secondary">Login</Link>
                        <Link to="/auth" className="btn btn-primary" >SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
            