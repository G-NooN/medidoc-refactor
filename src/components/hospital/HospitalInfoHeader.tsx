// 병원 정보 공통 출력 section
"use client";
import { fetchHospitalData } from "@/hooks/getHospitalData";
import { removeTimeSecond, getTime } from "@/utils/changeTimeFormat";
import { checkHospitalOpen } from "@/utils/checkHospitalOpen";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Map from "./Map";

const HospitalInfoHeader = ({ params }: { params: { hospitalId: string } }) => {
  const [isTimeToggleOpen, setTimeToggleOpen] = useState(false); // 진료시간 toggle
  const [isIntroductionToggleOpen, setIntroductionToggleOpen] = useState(false); // 소개글 toggle
  // 병원 데이터 가져오기
  const {
    isLoading,
    isError,
    data: hospitalData
  } = useQuery({
    queryKey: ["hospitalInfo", params.hospitalId],
    queryFn: () => fetchHospitalData(params.hospitalId)
  });

  if (isLoading) return <p>병원 데이터를 가져오는 중입니다.</p>;
  if (isError) return <p>병원 데이터를 가져오는 동안 에러가 발생했습니다</p>;

  // 시간 출력 타입 변경
  const secondRemovedStartTime = removeTimeSecond(hospitalData!.opentime);
  const secondRemovedEndTime = removeTimeSecond(hospitalData!.closetime);

  // 운영 여부
  const currentTime = getTime();
  const isHospitalOpen = checkHospitalOpen(
    currentTime,
    secondRemovedStartTime,
    secondRemovedEndTime
  );

  return (
    <>
      {/* 병원 위치(지도) */}
      <section>
        {/* <Map
          name={hospitalData!.name}
          latitude={hospitalData.hospital_latitude}
          longitude={hospitalData.hospital_longitude}
        /> */}
      </section>
      {/* 병원 기본정보 */}
      <section className="px-4 pt-[22px] pb-6 border-2 rounded-t-[20px]">
        {/* 이름&주소 & 스크랩 버튼 */}
        <div className="mb-[42px] flex justify-between">
          <div>
            <h1 className="semibold-20">{hospitalData!.name}</h1>
            <p className="regular-13">{hospitalData!.address}</p>
          </div>
          <span>(스크랩icon)</span>
        </div>
        {/* 진료시간 */}
        <div>
          {/* 시간에 따라 운영 여부 다르게 출력 */}
          <span>(진료시간icon)</span>
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
          <button
            onClick={(e) => {
              e.preventDefault();
              isTimeToggleOpen
                ? setTimeToggleOpen(false)
                : setTimeToggleOpen(true);
            }}
          >
            {isTimeToggleOpen ? "^" : "V"}
          </button>
          {/* 요일에 따라 요일&시간 다르게 출력 */}
          <div>
            {isTimeToggleOpen && (
              <div className="regular-14">
                <p>
                  월요일 : {secondRemovedStartTime} ~ {secondRemovedEndTime}
                </p>
                <p>
                  화요일 : {secondRemovedStartTime} ~ {secondRemovedEndTime}
                </p>
                <p>
                  수요일 : {secondRemovedStartTime} ~ {secondRemovedEndTime}
                </p>
                <p>
                  목요일 : {secondRemovedStartTime} ~ {secondRemovedEndTime}
                </p>
                <p>
                  금요일 : {secondRemovedStartTime} ~ {secondRemovedEndTime}
                </p>
              </div>
            )}
          </div>
        </div>
        {/* 전화번호 */}
        <div>
          <span>(전화번호icon)</span>
          <span className="regular-14">{hospitalData!.contact}</span>
        </div>
        {/* 소개글 */}
        <div>
          <span className="regular-14">소개글</span>{" "}
          <button
            onClick={(e) => {
              e.preventDefault();
              isIntroductionToggleOpen
                ? setIntroductionToggleOpen(false)
                : setIntroductionToggleOpen(true);
            }}
          >
            {isIntroductionToggleOpen ? "^" : "V"}
          </button>
          <div>
            {isIntroductionToggleOpen && (
              <span className="regular-14">{hospitalData!.introduction}</span>
            )}
          </div>
        </div>
        <button>예약하기</button>
      </section>
    </>
  );
};

export default HospitalInfoHeader;
