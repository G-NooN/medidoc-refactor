// 로그인 페이지
import React from "react";
import Logo from "@/assets/icons/logo/Logo.svg";
import KakaoLogin from "@/components/login/KakaoLogin";
import GoogleLogin from "@/components/login/GoogleLogin";

const LoginPage = () => {
  return (
    <section className="flex flex-col items-center justify-between h-full">
      <figure className="flex w-full h-full justify-center items-center">
        <Logo />
      </figure>
      <nav className="flex flex-col gap-2 w-full">
        <KakaoLogin />
        <GoogleLogin />
      </nav>
    </section>
  );
};

export default LoginPage;
