import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <header className={"bg-base-300 p-4 font-lato "}>
        <div className={"mx-auto w-[85vw] flex  items-center justify-around"}>
          <NavLink to={"/"}>
            <h1 className={"text-xl font-bold"}>
              Welcome <span>XXX</span>
            </h1>
          </NavLink>
          <button className="btn btn-outline btn-accent btn-sm">Log out</button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
