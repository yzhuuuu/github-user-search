import { create } from "zustand";

const useUserStore = create((set) => ({
  userName: localStorage.getItem("userName") || "",
  setUserName: (newUserName) =>
    set(() => ({
      userName: newUserName,
    })),
  searchUser: "",
  setSearchUser: (user) => set(() => ({ searchUser: user })),
}));
export default useUserStore;
