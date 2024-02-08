import FormRow from "./FormRow.jsx";
import { useForm } from "react-hook-form";
import { signUp } from "../supabase/LoginAndSignUp.js";
import useUserStore from "../store.js";
import { useNavigate } from "react-router-dom";

function SignUpForm({ setToggleForm }) {
  const setUserName = useUserStore((state) => state.setUserName);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { userName, password, email } = data;

    const resData = await signUp({ userName, password, email });
    const { user_name } = resData[0];
    console.log(user_name);
    setUserName(user_name);
    localStorage.setItem("userName", user_name);
    navigate("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className={"text-accent text-2xl"}>Sign up</h1>
      <FormRow label={"user name"} error={errors?.userName?.message}>
        <input
          type="text"
          {...register("userName", {
            required: "cannot be empty",
          })}
          id={"user name"}
        />
      </FormRow>
      <FormRow label={"email"} error={errors?.email?.message}>
        <input
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
        />
      </FormRow>
      <FormRow label={"password"} error={errors?.password?.message}>
        <input
          type="password"
          {...register("password", {
            required: "cannot be empty",
            minLength: {
              value: 6,
              message: "password must be at least 6 long",
            },
          })}
        />
      </FormRow>
      <div className={"flex  items-center justify-center gap-x-3"}>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => setToggleForm("")}
        >
          back
        </button>

        <button className="btn btn-primary btn-sm">Sign up</button>
      </div>
    </form>
  );
}

export default SignUpForm;
