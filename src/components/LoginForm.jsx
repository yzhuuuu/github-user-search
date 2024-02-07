import FormRow from "./FormRow.jsx";
import { useForm } from "react-hook-form";

function LoginForm({ setToggleForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
