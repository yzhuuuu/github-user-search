import { useState } from "react";
import LoginForm from "../components/LoginForm.jsx";
function Login() {
  const [toggleForm, setToggleForm] = useState("");
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://cdn.midjourney.com/5b1d7fe0-9bd7-4b52-8b40-8611be771c3c/0_3.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        {toggleForm === "" && (
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setToggleForm("login")}
            >
              Get Started
            </button>
          </div>
        )}
        {toggleForm === "login" && <LoginForm setToggleForm={setToggleForm} />}
      </div>
    </div>
  );
}

export default Login;
