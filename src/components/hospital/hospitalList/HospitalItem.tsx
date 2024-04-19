// 제휴 병원 간단 정보 div
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { getTime, removeTimeSecond } from "@/utils/changeTimeFormat";
import { checkHospitalOpen } from "@/utils/checkHospitalOpen";

const HospitalItem = ({ hospital }) => {
  const router = useRouter();

  // 시간 출력 타입 변경
  const secondRemovedStartTime = removeTimeSecond(hospital.opentime);
  const secondRemovedEndTime = removeTimeSecond(hospital.closetime);

  // 운영 여부
  const currentTime = getTime();
  const isHospitalOpen = checkHospitalOpen(
    currentTime,
    secondRemovedStartTime,
    secondRemovedEndTime
  );

  return (
    <section
      className="flex gap-4 cursor-pointer"
      onClick={() => router.push(`/hospital/${hospital.id}`)}
    >
      {/* 왼쪽 - 병원 이미지 */}
      <figure>
        <img
          src={hospital.image}
          alt="병원 이미지"
          className="w-24 h-24 rounded-[10px]"
        />
      </figure>
      {/* 오른쪽 - 병원 정보 */}
      <article>
        <h2 className="semibold-18">{hospital.name}</h2>
        {/* 진료 여부 */}
        {isHospitalOpen === "진료 종료" ? (
          <>
            <span className="regular-16">진료 전 </span>
            <span className="regular-14"> - </span>
            <span className="regular-14">
              {secondRemovedStartTime}에 진료 시작
            </span>
          </>
        ) : (
          <>
            <span className="regular-16">진료 중</span>
            <span className="regular-14"> - </span>
            <span className="regular-14">
              {secondRemovedEndTime}에 진료 종료
            </span>
          </>
        )}
        {/* 병원 주소 */}
        <p className="regular-14">{hospital.address}</p>
        {/* 평균 별점 & 후기 개수 */}
        {/* <p>(별icon) 5.0 (40개)</p> */}
      </article>
    </section>
  );
};

export default HospitalItem;
