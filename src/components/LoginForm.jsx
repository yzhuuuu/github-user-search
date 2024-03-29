import FormRow from "./FormRow.jsx";
import { useForm } from "react-hook-form";
import { login } from "../supabase/LoginAndSignUp.js";
import useUserStore from "../store.js";
import { useNavigate } from "react-router-dom";

function LoginForm({ setToggleForm }) {
  const setUserName = useUserStore((state) => state.setUserName);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    const userName = await login({ email, password });
    setUserName(userName);
    localStorage.setItem("userName", userName);
    navigate("/");
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={"flex flex-col items-center"}
    >
      <h1 className={"text-2xl text-secondary font-bold font-lato"}>
        Login page
      </h1>
      <FormRow label={"email"} error={errors?.email?.message}>
        <input
          type="text"
          id={"email"}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          className={
            "bg-base-300 px-2 bg-opacity-85 focus:outline-none focus:ring"
          }
        />
      </FormRow>
      <FormRow label={"password"} error={errors?.password?.message}>
        <input
          type="password"
          id={"password"}
          {...register("password", {
            required: "cannot be empty",
            minLength: {
              value: 6,
              message: "password must be at least 6 long",
            },
          })}
          className={
            "bg-base-300 px-2 bg-opacity-85 focus:outline-none focus:ring"
          }
        />
      </FormRow>
      <p className={"font-lato mb-3 "}>
        If you have not signed up yet,{" "}
        <span
          className={"text-primary hover:text-secondary transition-colors"}
          onClick={() => setToggleForm("signup")}
        >
          click here to Sign up
        </span>
      </p>
      <div className={"flex  items-center justify-center gap-x-3"}>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setToggleForm("")}
        >
          back
        </button>

        <button className="btn btn-primary btn-sm">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;
