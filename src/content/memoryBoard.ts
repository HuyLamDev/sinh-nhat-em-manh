import { publicAsset } from "./assets";

export type MemoryPolaroid = {
  src: string;
  alt: string;
  caption: string;
  className: string;
};

export const memoryBoard = {
  noteTitle: "Gửi Manh",
  noteParagraphs: [
    "Mỗi năm ta đều lớn hơn một chút, trách nhiệm nhiều hơn, áp lực nhiều hơn. Nhưng cũng vì thế mà ta mạnh mẽ hơn, trưởng thành hơn.",
    "Chúc em Manh tuổi mới có đủ sức mạnh, đủ niềm tin để có thể tỏa sáng như tên của em vậy.",
  ],
  polaroids: [
    {
      src: publicAsset("polaroids/anh.jpg"),
      alt: "Polaroid của anh",
      caption: "anh",
      className: "memory-polaroid--first",
    },
    {
      src: publicAsset("polaroids/iu.jpg"),
      alt: "Polaroid yêu thương",
      caption: "iu",
      className: "memory-polaroid--second",
    },
    {
      src: publicAsset("polaroids/em-manh.jpg"),
      alt: "Polaroid của em Manh",
      caption: "em Manh",
      className: "memory-polaroid--third",
    },
  ] satisfies MemoryPolaroid[],
};
