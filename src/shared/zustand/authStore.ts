import { SessionAction, SessionState } from "@/types";
import { Session } from "@supabase/supabase-js";
import { create } from "zustand";

const useAuthStore = create<SessionState & SessionAction>()((set) => ({
  session: null,
  setSession: (session: Session | null) => set({ session })
}));

export default useAuthStore;
