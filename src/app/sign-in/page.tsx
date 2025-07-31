"use client";

import React from "react";
import { signIn } from "next-auth/react";
import SignInPage from "@/features/auth/components/sign-page";
function page() {
  return <SignInPage />;
}

export default page;
