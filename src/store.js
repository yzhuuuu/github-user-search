import { create } from "zustand";

const userStore = create((set) => ({
  userName: localStorage.getItem("userName") || "",
  setUserName: (newUserName) =>
    set((state) => {
      userName: newUserName;
    }),
}));
export default userStore;
