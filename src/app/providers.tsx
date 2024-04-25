"use client";

import React, { createContext, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/api/supabase";
import { Session } from "@supabase/supabase-js";
import useAuthStore from "@/shared/zustand/authStore";

export default function Providers({
  children
}: React.PropsWithChildren<NonNullable<unknown>>) {
  const queryClient = new QueryClient();
  const SessionContext = createContext<Session | null>(null);
  const { session, setSession } = useAuthStore();

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        setSession(null);
      } else if (session) {
        setSession(session);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [setSession]);

  return (
    <QueryClientProvider client={queryClient}>
      <SessionContext.Provider value={session}>
        {children}
      </SessionContext.Provider>
    </QueryClientProvider>
  );
}
