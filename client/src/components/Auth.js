import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] =
    useState(true);
  const [error, setError] =
    useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>
            {isLogin
              ? "Please log in"
              : "Please sign up"}
          </h2>
          <input
            type="email"
            placeholder="Type your Email your"
          />
          <input
            type="password"
            placeholder="password"
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="confirm password"
            />
          )}
          <input
            type="submit"
            className="create"
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() =>
              viewLogin(false)
            }
            style={{
              backgroundColor: !isLogin
                ? "white"
                : "gray",
            }}
          >
            Sign up
          </button>
          <button
            onClick={() =>
              viewLogin(true)
            }
            style={{
              backgroundColor: isLogin
                ? "white"
                : "gray",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
