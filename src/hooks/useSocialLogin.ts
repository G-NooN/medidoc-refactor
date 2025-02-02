import { supabase } from "@/api/supabase";

// 카카오 로그인
export const signInWithKakao = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: {
        redirectTo: "http://localhost:3000/home", // 리다이렉션
        queryParams: {
          prompt: "select_account"
        }
      }
    });

    if (error) {
      alert("로그인 중에 에러가 발생했습니다.");
      console.error("로그인 에러 => ", error);
      throw error;
    }
  } catch (error) {
    alert("카카오 로그인 에러 발생 => " + error);
    console.error("카카오 로그인 에러 발생 => ", error);
  }
};

// 구글 로그인
export const signInWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:3000/home", // 리다이렉션
        queryParams: {
          access_type: "offline", // refresh token
          prompt: "select_account" // 사용자에게 동의를 구하는 prompt 표시
        }
      }
    });

    if (error) {
      alert("로그인 중에 에러가 발생했습니다.");
      console.error("로그인 에러 => ", error);
      throw error;
    }
  } catch (error) {
    alert("구글 로그인 에러 발생 => " + error);
    console.error("구글 로그인 에러 발생 => ", error);
  }
};

// 로그아웃
export const signOutCurrentAccount = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("로그아웃 중에 에러가 발생했습니다.");
      console.error("로그아웃 에러 => ", error);
      throw error;
    }
  } catch (error) {
    alert("로그아웃 에러 발생 => " + error);
    console.error("로그아웃 에러 발생 => ", error);
  }
};
