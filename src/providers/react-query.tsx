"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/lib/react-query/query-client";

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools client={queryClient} initialIsOpen={false} />
    </QueryClientProvider>
  );
}
