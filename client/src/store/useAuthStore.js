import { create } from "zustand";
import { axiosInstant } from "../lib/axios";

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
}));
