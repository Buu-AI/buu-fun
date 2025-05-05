"use client";
import { useAuthentication } from "@/providers/account.context";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
interface ProtectedRouteProps {
  children: React.ReactNode;
  fallbackUrl?: string;
  Fallback?: ReactNode;
}
export default function ProtectedWrapper({
  children,
  fallbackUrl = "/app",
  Fallback = <div>Loading</div>,
}: ProtectedRouteProps) {
  const { loading, isAuthenticated } = useAuthentication();
  const router = useRouter();

  useEffect(() => {
    // Only redirect after we've checked authentication status
    if (!loading && !isAuthenticated) {
      router.push(fallbackUrl);
    }
  }, [loading, isAuthenticated, router, fallbackUrl]);

  // Show nothing while checking authentication status
  if (loading) {
    return Fallback;
  }

  // If authenticated, render the children
  return isAuthenticated ? <>{children}</> : null;
}
