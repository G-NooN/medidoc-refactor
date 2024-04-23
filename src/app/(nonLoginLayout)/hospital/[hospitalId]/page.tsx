// 병원 상세페이지
"use client";
import HospitalInfoHeader from "@/components/hospital/HospitalInfoHeader";
import HospitalMainInfo from "@/components/hospital/HospitalMainInfo";
import useDetailTabStore from "@/shared/zustand/detailTabStore";
import React from "react";

const HospitalDetailPage = ({ params }: { params: { hospitalId: string } }) => {
  const { selectedTab, selectTab } = useDetailTabStore();
  return (
    <main>
      <HospitalInfoHeader params={params} />
      <div className="h-[10px] bg-gray-200"></div>
      <nav>
        <button
          className="bg-sky-500 mx-4"
          onClick={(e) => {
            e.preventDefault();
            selectTab("default");
          }}
        >
          기본정보
        </button>{" "}
        |{" "}
        <button
          className="bg-red-100 mx-4"
          onClick={(e) => {
            e.preventDefault();
            selectTab("image");
          }}
        >
          사진
        </button>{" "}
        |{" "}
        <button
          className="bg-amber-100 mx-4"
          onClick={(e) => {
            e.preventDefault();
            selectTab("review");
          }}
        >
          리뷰
        </button>
      </nav>
      <p>--------------------</p>

      <HospitalMainInfo selectedTab={selectedTab} />
    </main>
  );
};

export default HospitalDetailPage;
