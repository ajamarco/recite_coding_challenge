"use client";
//provider component that will wrap the entire app

//import libraries
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

//export the provider component
export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [queryClient] = useState(new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
