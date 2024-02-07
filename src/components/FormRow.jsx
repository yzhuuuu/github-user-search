function FormRow({ label, children, error }) {
  return (
    <div
      className={
        "flex flex-col text-start capitalize gap-y-2 font-lato w-[15rem] mb-4 text-primary"
      }
    >
      <label htmlFor={children.props.id}>{label}</label>
      {children}
      {error && <p className={"text-error"}>{error}</p>}
    </div>
  );
}

export default FormRow;
