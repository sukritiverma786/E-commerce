import React, { ChangeEvent, useState } from "react";
import "./VendorLogin.css";

const LoginSignup: React.FC = () => {
  const [state, setState] = useState("Vendor Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("Login Function Executed", formData);

    try {
      const response = await fetch("http://localhost:5000/loginvendor", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);
        localStorage.setItem("userName", responseData.userName);

        // setFormData({ ...formData, username: responseData.user.username });
        window.location.replace("/Vendor");
      } else {
        console.log("Unsuccessful response:", responseData);
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  const signup = async () => {
    console.log("Signup Function Executed", formData);

    try {
      const response = await fetch("http://localhost:5000/signupvendor", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem("auth-token", responseData.token);

        window.location.replace("/VendorLogin");
      } else {
        console.log("Unsuccessful response:", responseData);
        alert(responseData.errors);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  return (
    <>
      <div className="loginSignup">
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <form>
            <div className="loginsignup-fields">
              {state === "Vendor Sign Up" ? (
                <input
                  name="username"
                  value={formData.username}
                  type="text"
                  placeholder="Your Name"
                  onChange={changeHandler}
                />
              ) : (
                <></>
              )}
              <input
                name="email"
                value={formData.email}
                type="email"
                placeholder="Email Address"
                onChange={changeHandler}
              />
              <input
                name="password"
                value={formData.password}
                type="password"
                placeholder="Password"
                onChange={changeHandler}
              />
            </div>
          </form>
          <button
            onClick={() => (state === "Vendor Login" ? login() : signup())}
          >
            Continue
          </button>

          {state === "Sign Up" ? (
            <p className="loginsignup-login">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setState("Vendor Login");
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="loginsignup-login">
              Create an account?{" "}
              <span
                onClick={() => {
                  setState("Vendor Sign Up");
                }}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                Click here
              </span>
            </p>
          )}

          <div className="loginsign-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, i agree to terms of use & privacy policy</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
