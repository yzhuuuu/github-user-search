import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: localStorage.getItem("userName") || "",
  setUserName: (newUserName) =>
    set((state) => ({
      userName: newUserName,
    })),
}));
export default useUserStore;
