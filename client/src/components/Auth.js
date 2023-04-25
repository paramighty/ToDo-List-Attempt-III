import { useState } from "react";

//useStates for login, email, password, confirm passwords, and error
const Auth = () => {
  const [isLogin, setIsLogin] =
    useState(true);
  const [email, setEmail] =
    useState(null);
  const [password, setPassword] =
    useState(null);
  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState(null);
  const [error, setError] =
    useState(null);

  console.log(
    email,
    password,
    confirmPassword
  );

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (
    e,
    endpoint
  ) => {
    e.preventDefault();
    if (
      !isLogin &&
      password !== confirmPassword
    ) {
      setError(
        "Make sure your password matches doofus!"
      );
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_SERVERURL}/${endpoint}`,
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );
    const data = await response.json();

    if (data.detail) {
      setError(data.detail);
    } else {
      setCookie("Email", data.email);
      setCookie(
        "AuthToken",
        data.toekn
      );
    }
    console.log(data);
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
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="confirm password"
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
            />
          )}
          <input
            type="submit"
            className="create"
            onClick={(e) =>
              handleSubmit(
                e,
                isLogin
                  ? "login"
                  : "signup"
              )
            }
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
