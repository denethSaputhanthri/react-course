import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {

  const [mode, setMode] = useState("login");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { SignUp, Login , Logout} =useContext(AuthContext);

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "login") {
      result = Login(data.email, data.password);
    } else {
      result = SignUp(data.email, data.password);
    }

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
    console.log(result);
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <div className="auth-container">
            
            <h1 className="page-title">
              {mode === "signup" ? "Sign Up" : "Login"}
            </h1>
            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
                {error && <div className="error-message">{error}</div>} 
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                   />
                  {errors.email && (
                    <span className="form-error">{errors.email.message}</span>
                  )}
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  id="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 12,
                      message: "Password must be at most 12 characters",
                    },
                  })}
                  />
                {errors.password && (
                  <span className="form-error">{errors.password.message}</span>
                )}
              </div>
                <div className="form-group" >
              <button className="btn btn-primary btn-large" type="submit">
                {mode === "signup" ? "Sign Up" : "Login"}
              </button>
              <button className="btn btn-secondary btn-large" onClick={() => Logout()}>
              Logout
            </button>
            </div>
            </form>
            <div className="auth-switch">
              {mode === "signup" ? (
                <p>
                  Already have an account?{" "}
                  <span className="auth-link" onClick={() => setMode("login")}>
                    Login
                  </span>
                </p>
              ) : (
                <p>
                  Don't have an account?{" "}
                  <span className="auth-link" onClick={() => setMode("signup")}>
                    Sign Up
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
