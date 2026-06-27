export type Song = {
  title: string;
  artist: string;
  thumbnail: string;
  audioSrc?: string;
};

export const songs: Song[] = [
  {
    title: "Úm Ba La",
    artist: "Tân Binh Toàn Năng, SHOW IT ALL Vietnam",
    thumbnail: "/thumbnails/um-ba-la-cover.png",
    audioSrc:
      "/songs/ÚM BA LA - TÂN BINH THĂNG CẤP Tiết Mục Công Diễn 4 TÂN BINH TOÀN NĂNG 2025 - YEAH1 MUSIC (192k).mp3",
  },
  {
    title: "Tựa Đầu",
    artist: "GREY D",
    thumbnail: "/thumbnails/tua-dau-cover.png",
    audioSrc: "/songs/tựa đầu - GREY D (192k).mp3",
  },
];
