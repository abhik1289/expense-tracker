"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

function AuthenticationProvider({ children }: { children: React.ReactNode }) {
  const { status, data } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/sign-in");
    }else if (status === "authenticated" && pathname === "/sign-in") {
        router.back();
    }
  }, [status, data, pathname]);

  return <div>{children}</div>;
}

export default AuthenticationProvider;
