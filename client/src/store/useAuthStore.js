import { create } from "zustand";
import { axiosInstant } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingImg: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstant.get("/check");
      console.log(res);

      set({ authUser: res.data });
    } catch (error) {
      console.error("Auth check failed:", error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false, isSigningUp: false });
    }
  },
  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstant.post("/signup", data);
      toast.success("account crearted succesfully");
      set({ authUser: res.data });
    } catch (error) {
      toast.error(error.message);
    } finally {
      set({ isSigningUp: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstant.post("/logout");
      set({ authUser: null });
      toast.success("Logout successfull");
    } catch (error) {
        console.log(error.message);
        toast.error(error.message);
        
    }
  },
  login:async(data)=>{
    try {
        const res = await axiosInstant.post("/login", data);
      toast.success("Login succesfully");
      set({ authUser: res.data });
    } catch (error) {
         console.log(error.message);
        toast.error(error.message);
    }
  }
}));
