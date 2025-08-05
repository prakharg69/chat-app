import {create} from "zustand";
import { axiosInstant } from "../lib/axios";

export const useAuthStore = create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingImg:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    checkAuth: async()=>{
        try {
            const res = await axiosInstant.get("/check");
            set({authUser:res.data});

        } catch (error) {
            console.log(error.message);
            
        }
        finally{
            set({isCheckingAuth:false});
        }
    }
}))