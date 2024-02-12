import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import useUserStore from "../store.js";
import { logOut } from "../supabase/LoginAndSignUp.js";

function AppLayout() {
  const userName = useUserStore((state) => state.userName);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await logOut();
    localStorage.removeItem("userName");
    navigate("/login");
  };
  if (userName === "") {
    return <Navigate to={"/login"} />;
  }
  return (
    <>
      <header className={"bg-base-300 p-4 font-lato "}>
        <div className={"mx-auto w-[85vw] flex  items-center justify-around"}>
          <NavLink to={"/"}>
            <h1 className={"text-xl font-bold"}>
              Welcome <span className={"text-primary"}>{userName}</span>
            </h1>
          </NavLink>
          <button
            className="btn btn-outline btn-accent btn-sm"
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </header>
      <main className={"p-4 mx-auto w-[95vw] grid"}>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
