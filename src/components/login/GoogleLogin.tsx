"use client";
import React from "react";
import GoogleLogo from "@/assets/icons/logo/Google.svg";
import { signInWithGoogle } from "@/hooks/useSocialLogin";

const GoogleLogin = () => {
  return (
    <div
      className="flex w-full h-[50px] px-5 items-center bg-white rounded-lg cursor-pointer"
      onClick={signInWithGoogle}
    >
      <figure>
        <GoogleLogo />
      </figure>
      <div className="flex w-full justify-center medium-14">
        구글로 계속하기
      </div>
    </div>
  );
};

export default GoogleLogin;
