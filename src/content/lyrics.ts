export type LyricLine = {
  time: number;
  text: string;
};

export type LyricTrack = {
  songTitle: string;
  duration: number;
  lines: LyricLine[];
};

export const lyricTracks: LyricTrack[] = [
  {
    songTitle: "Úm Ba La",
    duration: 266,
    lines: [
      { time: 18, text: "Ladies and gentlemen, welcome to the show" },
      { time: 22, text: "Và sau đây là một màn ảo thuật" },
      { time: 25, text: "Em cứ bước đến thật gần" },
      { time: 27, text: "Thả tâm tư vào tâm trí anh" },
      { time: 29, text: "Rồi chớp mắt, ơ kìa em biến mất (rất là ly kì á)" },
      {
        time: 33,
        text: "Và hô biến anh thành chàng trai hay nhớ nhung (it's you)",
      },
      { time: 37, text: "Bài anh bốc quân nào thì em cũng đoán trúng" },
      { time: 40, text: "Rồi em lấy đi một đồ vật hình trái tim" },
      { time: 43, text: "Làm anh loay hoay cứ mãi đi tìm" },
      { time: 46, text: "Baby you, từng lời anh nói ra nghe như là thần chú" },
      { time: 51, text: "Đẩy nồng độ tối đa Oxytocin" },
      {
        time: 54,
        text: "Mắt nhắm, tai nghe, môi anh sao lại ấp úng luyên thuyên?",
      },
      { time: 57, text: "Ừ em thôi miên, thôi miên anh rồi đấy" },
      { time: 61, text: "Úm ba la, ba la, em là ảo thuật gia" },
      { time: 64, text: "Làm cả thế giới bao la, bao la" },
      { time: 66, text: "Bỗng dưng tàng hình, còn thấy mỗi đôi mình" },
      { time: 69, text: "Úm ba la, ba la, phải lòng ảo thuật gia" },
      { time: 71, text: "Để rồi tâm trí bay lên, bay lên" },
      { time: 73, text: "Lửng lơ trên trần nhà" },
      { time: 76, text: "Giờ anh cứ nghĩ đi nghĩ lại về em" },
      { time: 78, text: "Nghĩ mãi nghĩ hoài ngày đêm" },
      { time: 79, text: "Nghĩ đứng nghĩ ngồi quên nghỉ ngơi" },
      { time: 82, text: "Baby, baby, úm ba la, ba la, em là ảo thuật gia" },
      { time: 86, text: "Làm cả thế giới bao la, bao la" },
      { time: 88, text: "Bỗng dưng tàng hình, còn thấy mỗi đôi mình" },
      { time: 90, text: "Hmm... vậy là rốt cuộc bằng cách nào?" },
      { time: 93, text: "Em làm gì cũng khiến anh bị cuốn vào?" },
      { time: 95, text: "Phải gật gù mà thốt lên là rất wow" },
      { time: 98, text: "Hmm... tim đánh trống như là đi trên dây" },
      { time: 100, text: "Em bên đó rồi lại vòng bên đây" },
      { time: 102, text: "Trong suy nghĩ anh cả ngày hôm nay yah" },
      { time: 104, text: "Baby girl, có nhiều bí mật? Ồ, không sao hết" },
      { time: 108, text: "Cứ để anh trau dồi kĩ thuật lần theo dấu vết" },
      { time: 110, text: "Hint chất lượng như thế" },
      { time: 111, text: "Không phần anh thì phần ai?" },
      { time: 113, text: "Mỗi ngày nhinh nhích thêm vài phân" },
      { time: 115, text: "Vẫn đều đặn phát đủ mọi tín hiệu kiểu đó" },
      { time: 116, text: "Là em cũng đang thinh thích rồi phải không?" },
      { time: 118, text: "Baby you, từng lời em nói ra nghe như là thần chú" },
      { time: 122, text: "Đẩy nồng độ tối đa Oxytocin" },
      {
        time: 125,
        text: "Mắt nhắm, tai nghe, môi anh sao lại ấp úng luyên thuyên?",
      },
      { time: 128, text: "Ừ em thôi miên, thôi miên anh rồi đấy" },
      { time: 132, text: "Úm ba la, ba la, em là ảo thuật gia" },
      { time: 135, text: "Làm cả thế giới bao la, bao la" },
      { time: 137, text: "Bỗng dưng tàng hình, còn thấy mỗi đôi mình" },
      { time: 139, text: "Úm ba la, ba la, phải lòng ảo thuật gia" },
      { time: 142, text: "Để rồi tâm trí bay lên, bay lên" },
      { time: 144, text: "Lửng lơ trên trần nhà" },
      { time: 146, text: "Giờ anh cứ nghĩ đi nghĩ lại về em" },
      { time: 148, text: "Nghĩ mãi nghĩ hoài ngày đêm" },
      { time: 150, text: "Nghĩ đứng nghĩ ngồi quên nghỉ ngơi" },
      { time: 153, text: "Baby, baby, úm ba la, ba la, em là ảo thuật gia" },
      { time: 156, text: "Làm cả thế giới bao la, bao la" },
      { time: 158, text: "Bỗng dưng tàng hình, còn thấy mỗi đôi mình" },
      { time: 162, text: "Đôi khi anh muốn hỏi em một câu" },
      { time: 164, text: "Rằng từ bấy lâu trong tim em vị trí anh ở đâu?" },
      { time: 168, text: "Nhưng mà thôi, nếu mà sớm quá chưa phải vội" },
      {
        time: 170,
        text: "Cứ để hai ta tiếp tục chơi những trò chơi rất là vui (dui dui dui dui)",
      },
      { time: 175, text: "Úm ba la, ba la em" },
      { time: 177, text: "Úm ba la, ba la em" },
      { time: 179, text: "Úm ba la, ba la bỗng dưng tàng hình" },
      { time: 181, text: "Còn thấy mỗi đôi mình" },
      { time: 183, text: "Úm ba la, ba la, phải lòng ảo thuật gia" },
      { time: 185, text: "Để rồi tâm trí bay lên, bay lên" },
      { time: 187, text: "Lửng lơ trên trần nhà" },
      { time: 189, text: "Giờ anh cứ nghĩ đi nghĩ lại về em" },
      { time: 191, text: "Nghĩ mãi nghĩ hoài ngày đêm" },
      { time: 193, text: "Nghĩ đứng nghĩ ngồi quên nghỉ ngơi" },
      { time: 195, text: "Baby, baby, úm ba la, ba la, em là ảo thuật gia" },
      { time: 199, text: "Làm cả thế giới bao la, bao la" },
      { time: 201, text: "Bỗng dưng tàng hình, còn thấy mỗi đôi mình" },
    ],
  },
  {
    songTitle: "Tựa Đầu",
    duration: 214,
    lines: [
      { time: 39, text: "Uh, này em người yêu nhỏ bé" },
      { time: 41, text: "Người đang ngồi suy tư gì thế?" },
      { time: 43, text: "Sao mà đôi mắt người ướt nhoè?" },
      { time: 45, text: "Ai làm? Mau nói anh nghe" },
      { time: 48, text: "Lại đây nào, thôi đừng che mặt" },
      { time: 50, text: "Cho anh được thơm lên rồi ôm em một chút" },
      {
        time: 52,
        text: "Để anh lấy bút màu tình yêu tô vẽ lên nụ cười của em",
      },
      {
        time: 58,
        text: "Thế gian không ngừng xoay, còn trái tim anh thì mãi luôn luôn nằm ở đây này",
      },
      {
        time: 63,
        text: "Nếu như đang cần ai thì biết đâu là bờ vai của em rồi đấy",
      },
      { time: 68, text: "Dẫu có khi mưa rơi, dẫu có khi chơi vơi" },
      { time: 71, text: "Nhưng rồi em thấy khi ngày mai tới" },
      {
        time: 73,
        text: "Thảo nguyên vẫy chào ngày mới cùng ngàn hoa dưới ánh mặt trời",
      },
      { time: 78, text: "Biết là rất khó để mình chạy thoát khỏi tâm trí" },
      {
        time: 82,
        text: "Ngày tháng dài tăm tối chưa bao giờ dễ trôi sạch hết đi",
      },
      {
        time: 87,
        text: "Biết là em đã luôn ôm một mình, chỉ là tới đây thôi ta sẽ cùng nhau",
      },
      {
        time: 94,
        text: "Tựa đầu xuống, thả vào trời mọi nghĩ suy theo mây cuốn (Woah-oh-woah)",
      },
      {
        time: 104,
        text: "Thả từng cảm xúc từ lâu em vẫn chưa có dịp tuôn (Woah-oh-woah-oh-woah-oh-woah-oh)",
      },
      { time: 115, text: "Xuôi theo thời gian" },
      { time: 116, text: "Nhìn hoàng hôn buông rơi trên trời cam" },
      { time: 119, text: "Baby, cho em nghe lời ca" },
      {
        time: 122,
        text: "Từng thanh âm anh phát ra bằng năng lượng tình yêu",
      },
      { time: 125, text: "Khẽ rung chạm vào nỗi buồn này" },
      { time: 127, text: "Rồi từ từ mang đi mãi" },
      { time: 131, text: "Em sẽ thấy ở trong em chỉ còn bình yên ở lại" },
      { time: 135, text: "Biết là rất khó để mình chạy thoát khỏi tâm trí" },
      {
        time: 139,
        text: "Ngày tháng dài tăm tối chưa bao giờ dễ trôi sạch hết đi",
      },
      {
        time: 144,
        text: "Biết là em đã luôn ôm một mình, chỉ là tới đây thôi ta sẽ cùng nhau",
      },
      {
        time: 151,
        text: "Tựa đầu xuống, thả vào trời mọi nghĩ suy theo mây cuốn (Woah-oh-woah)",
      },
      {
        time: 160,
        text: "Thả từng cảm xúc từ lâu em vẫn chưa có dịp tuôn (Woah-oh-woah-oh-woah-oh-woah-oh)",
      },
      { time: 192, text: "Biết là rất khó để mình chạy thoát khỏi tâm trí" },
      {
        time: 196,
        text: "Ngày tháng dài tăm tối chưa bao giờ dễ trôi sạch hết đi",
      },
      {
        time: 201,
        text: "Biết là em đã luôn ôm một mình, chỉ là tới đây thôi",
      },
    ],
  },
  {
    songTitle: "Đêm biển dễ thương",
    duration: 184,
    lines: [
      { time: 0, text: "Đêm biển có một chút lung linh" },
      { time: 13, text: "Có bạn cá nhỏ bơi ngang lời chúc" },
      { time: 30, text: "Có chiếc bánh sinh nhật thơm mùi gió" },
      { time: 49, text: "Có Manh, là điều dễ thương nhất hôm nay" },
    ],
  },
  {
    songTitle: "Ngày của Manh",
    duration: 178,
    lines: [
      { time: 0, text: "Hôm nay là ngày của Manh" },
      { time: 11, text: "Một ngày xanh như mặt biển buổi sáng" },
      { time: 26, text: "Mong mọi điều tốt đẹp sẽ ghé lại" },
      { time: 43, text: "Và ở lại thật lâu bên cạnh em" },
    ],
  },
];

export function getLyricTrack(songTitle: string) {
  return (
    lyricTracks.find((track) => track.songTitle === songTitle) ?? lyricTracks[0]
  );
}

export function getActiveLyricIndex(lines: LyricLine[], currentTime: number) {
  return lines.reduce((activeIndex, line, index) => {
    return currentTime >= line.time ? index : activeIndex;
  }, -1);
}
