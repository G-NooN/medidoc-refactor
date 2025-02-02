import { Session } from "@supabase/supabase-js";

// 세션 정보
export interface SessionState {
  session: Session | null;
}

export interface SessionAction {
  setSession: (session: Session | null) => void;
}

export type TabState = {
  selectedTab: "default" | "image" | "review";
  selectTab: (tab: "default" | "image" | "review") => void;
};

export type TabList = Pick<TabState, "selectedTab">;

export interface TabsProps {
  handleCategoryChange: (bodypart: string) => void; // bodypart 타입으로 변경
}

export interface ConsultRequest {
  consult_id: string; // DB 등록 UUID
  consult_title: string;
  consult_content: string;
  user_email: string;
  user_name: string;
  bodyParts: string;
  // consult_photos: string[];
  hashtags: string[];
}

export interface ConsultResponse {
  postId: string;
  consultTitle: string;
  consultContent: string;
  user_name: string;
  bodyparts: string;
  // consult_photos: string[];
  created_at: string;
}

export interface HashtagButtonsProps {
  hashtags: { [key: string]: string };
}

export interface UploadedFileUrlProps {
  uploadedFileUrl: string[];
  setUploadedFileUrl: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

export interface ConsultInfoType {
  consult_id: string;
  user_name: string;
  consult_title: string;
  consult_content: string;
  bodyparts: string;
  hashtags: string[];
}

export interface ReservationInfo {
  apply_date: string | null;
  apply_time: string | null;
  hospital_id: string | null;
  hospital_name: string | null;
  program_id: string;
  reservation_id: string;
  status: string | null;
  subject_birth_date: string | null;
  subject_name: string | null;
  subject_phone_number: string | null;
  user_email: string;
  user_name: string | null;
}

export interface UserInfo {
  provider: string | null;
  user_avatar: string | null;
  user_birth_date: string | null;
  user_email: string;
  user_id: string | null;
  user_name: string;
  user_phone_number: string | null;
  user_type: string | null;
}

export interface ScrappedList {
  hospital_id: string;
  // hospital_image: string | null;
  // hospital_name: string;
  scrap_id: string;
  user_id: string;
}

// 리뷰 -----------------
export type Tab = "starRating" | "latest";

export type Review = {
  id: number;
  user_id: string;
  rating: number;
  content: string;
  created_at: string;
};

export type ReviewsProps = {
  selectedTab: "starRating" | "latest";
};
