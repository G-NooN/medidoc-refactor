"use client";
import React from "react";
import KakaoLogo from "@/assets/icons/logo/Kakao.svg";
import { signInWithKakao } from "@/hooks/useSocialLogin";

const KakaoLogin = () => {
  return (
    <div
      className="flex w-full h-[50px] px-5 items-center bg-kakao rounded-lg cursor-pointer"
      onClick={signInWithKakao}
    >
      <figure>
        <KakaoLogo />
      </figure>
      <nav className="flex w-full justify-center medium-14">
        카카오로 계속하기
      </nav>
    </div>
  );
};

export default KakaoLogin;
