import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function Navbar() {
    const { user, Logout } = useAuth();

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
                        {!user ? (
                        <div className="navbar-auth-links">
                        <Link to="/auth"  className="btn btn-secondary">Login</Link>
                        <Link to="/auth" className="btn btn-primary" >SignUp</Link>
                        </div>
                        ) : (
                        <div className="navbar-user">
                            <span className="navbar-greeting">Welcome, {user.email}</span> 
                            <button className="btn btn-secondary" onClick={Logout}>Logout</button>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
            