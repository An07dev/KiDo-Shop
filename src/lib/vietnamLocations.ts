export interface LocationDistrict {
  name: string;
  wards?: string[];
}

export interface LocationProvince {
  name: string;
  districts: LocationDistrict[];
}

export const vietnamProvinces: LocationProvince[] = [
  {
    name: "Hà Nội",
    districts: [
      {
        name: "Quận Ba Đình",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Hoàn Kiếm",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Tây Hồ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Long Biên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Cầu Giấy",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Đống Đa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Hai Bà Trưng",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Hoàng Mai",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Thanh Xuân",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Nam Từ Liêm",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Bắc Từ Liêm",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Hà Đông",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Sơn Tây",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ba Vì",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chương Mỹ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đan Phượng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đông Anh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gia Lâm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hoài Đức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mê Linh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mỹ Đức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Xuyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phúc Thọ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quốc Oai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sóc Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạch Thất",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Oai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Trì",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thường Tín",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ứng Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "TP. Hồ Chí Minh",
    districts: [
      {
        name: "Quận 1",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 3",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 4",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 5",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 6",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 7",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 8",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 10",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 11",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận 12",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Thủ Đức",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Bình Tân",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Bình Thạnh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Gò Vấp",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Phú Nhuận",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Tân Bình",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Tân Phú",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Chánh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cần Giờ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Củ Chi",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hóc Môn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nhà Bè",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hải Phòng",
    districts: [
      {
        name: "Quận Hồng Bàng",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Ngô Quyền",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Lê Chân",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Hải An",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Kiến An",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Đồ Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Dương Kinh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thủy Nguyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện An Dương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện An Lão",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kiến Thụy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiên Lãng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Bảo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cát Hải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bạch Long Vĩ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Đà Nẵng",
    districts: [
      {
        name: "Quận Hải Châu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Thanh Khê",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Sơn Trà",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Ngũ Hành Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Liên Chiểu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Cẩm Lệ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hòa Vang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hoàng Sa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Cần Thơ",
    districts: [
      {
        name: "Quận Ninh Kiều",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Bình Thủy",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Cái Răng",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Ô Môn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Quận Thốt Nốt",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phong Điền",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cờ Đỏ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thới Lai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Thạnh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "An Giang",
    districts: [
      {
        name: "TP. Long Xuyên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Châu Đốc",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Tân Châu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Tịnh Biên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện An Phú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Phú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chợ Mới",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Tân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thoại Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tri Tôn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bà Rịa - Vũng Tàu",
    districts: [
      {
        name: "TP. Vũng Tàu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Bà Rịa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Phú Mỹ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Đức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Côn Đảo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đất Đỏ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Long Điền",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Xuyên Mộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bắc Giang",
    districts: [
      {
        name: "TP. Bắc Giang",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Việt Yên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Chũ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hiệp Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lạng Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lục Nam",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lục Ngạn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sơn Động",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Dũng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Thế",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bắc Kạn",
    districts: [
      {
        name: "TP. Bắc Kạn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ba Bể",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bạch Thông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chợ Đồn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chợ Mới",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Na Rì",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ngân Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Pác Nặm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bạc Liêu",
    districts: [
      {
        name: "TP. Bạc Liêu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Giá Rai",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đông Hải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hòa Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hồng Dân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phước Long",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Lợi",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bắc Ninh",
    districts: [
      {
        name: "TP. Bắc Ninh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Từ Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Quế Võ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Thuận Thành",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gia Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lương Tài",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiên Du",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Phong",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bến Tre",
    districts: [
      {
        name: "TP. Bến Tre",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ba Tri",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Đại",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chợ Lách",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Giồng Trôm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mỏ Cày Bắc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mỏ Cày Nam",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạnh Phú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bình Định",
    districts: [
      {
        name: "TP. Quy Nhơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã An Nhơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Hoài Nhơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện An Lão",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hoài Ân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phù Cát",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phù Mỹ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tây Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tuy Phước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vân Canh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Thạnh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bình Dương",
    districts: [
      {
        name: "TP. Thủ Dầu Một",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Dĩ An",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Thuận An",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Tân Uyên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Bến Cát",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bàu Bàng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Tân Uyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Dầu Tiếng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Giáo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bình Phước",
    districts: [
      {
        name: "TP. Đồng Xoài",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Bình Long",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Phước Long",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Chơn Thành",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bù Đăng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bù Đốp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bù Gia Mập",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đồng Phú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hớn Quản",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lộc Ninh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Riềng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Bình Thuận",
    districts: [
      {
        name: "TP. Phan Thiết",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã La Gi",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đức Linh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hàm Tân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hàm Thuận Bắc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hàm Thuận Nam",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Quý",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tánh Linh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tuy Phong",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Cà Mau",
    districts: [
      {
        name: "TP. Cà Mau",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cái Nước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đầm Dơi",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Năm Căn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ngọc Hiển",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Tân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thới Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trần Văn Thời",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện U Minh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Cao Bằng",
    districts: [
      {
        name: "TP. Cao Bằng",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bảo Lạc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bảo Lâm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hạ Lang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hà Quảng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hòa An",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nguyên Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quảng Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạch An",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trùng Khánh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Đắk Lắk",
    districts: [
      {
        name: "TP. Buôn Ma Thuột",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Buôn Hồ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Buôn Đôn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cư Kuin",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cư M'gar",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ea H'leo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ea Kar",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ea Súp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Ana",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Bông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Búk",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Năng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Pắc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lắk",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện M'Drắk",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Đắk Nông",
    districts: [
      {
        name: "TP. Gia Nghĩa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cư Jút",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Glong",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Mil",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk R'lấp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Song",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Nô",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tuy Đức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Điện Biên",
    districts: [
      {
        name: "TP. Điện Biên Phủ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Mường Lay",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Điện Biên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Điện Biên Đông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường Ảng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường Chà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường Nhé",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nậm Pồ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tủa Chùa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tuần Giáo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Đồng Nai",
    districts: [
      {
        name: "TP. Biên Hòa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Long Khánh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cẩm Mỹ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Định Quán",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Long Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nhơn Trạch",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Phú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thống Nhất",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trảng Bom",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Cửu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Xuân Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Đồng Tháp",
    districts: [
      {
        name: "TP. Cao Lãnh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Sa Đéc",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Hồng Ngự",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cao Lãnh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hồng Ngự",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lai Vung",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lấp Vò",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tam Nông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Hồng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tháp Mười",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Gia Lai",
    districts: [
      {
        name: "TP. Pleiku",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã An Khê",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Ayun Pa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chư Păh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chư Prông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chư Pưh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chư Sê",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Đoa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Pơ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đức Cơ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ia Grai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ia Pa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện K'Bang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kông Chro",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Krông Pa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mang Yang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Thiện",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hà Giang",
    districts: [
      {
        name: "TP. Hà Giang",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Mê",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Quang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đồng Văn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hoàng Su Phì",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mèo Vạc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quang Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vị Xuyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Xín Mần",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Minh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hà Nam",
    districts: [
      {
        name: "TP. Phủ Lý",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Duy Tiên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Lục",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kim Bảng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lý Nhân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Liêm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hà Tĩnh",
    districts: [
      {
        name: "TP. Hà Tĩnh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Hồng Lĩnh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Kỳ Anh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cẩm Xuyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Can Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đức Thọ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hương Khê",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hương Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kỳ Anh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lộc Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nghi Xuân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạch Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vũ Quang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hải Dương",
    districts: [
      {
        name: "TP. Hải Dương",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Chí Linh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Kinh Môn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cẩm Giàng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gia Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kim Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nam Sách",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ninh Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Miện",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tứ Kỳ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hậu Giang",
    districts: [
      {
        name: "TP. Vị Thanh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Ngã Bảy",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Long Mỹ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành A",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phụng Hiệp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vị Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Long Mỹ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hòa Bình",
    districts: [
      {
        name: "TP. Hòa Bình",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cao Phong",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đà Bắc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kim Bôi",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lạc Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lạc Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lương Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mai Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Lạc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Hưng Yên",
    districts: [
      {
        name: "TP. Hưng Yên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Mỹ Hào",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ân Thi",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Khoái Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kim Động",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phù Cừ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiên Lữ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Lâm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Mỹ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Khánh Hòa",
    districts: [
      {
        name: "TP. Nha Trang",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Cam Ranh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Ninh Hòa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cam Lâm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Diên Khánh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Khánh Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Khánh Vĩnh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trường Sa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vạn Ninh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Kiên Giang",
    districts: [
      {
        name: "TP. Rạch Giá",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Hà Tiên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Phú Quốc",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện An Biên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện An Minh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Giang Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Giồng Riềng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gò Quao",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hòn Đất",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kiên Hải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kiên Lương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Hiệp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện U Minh Thượng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Thuận",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Kon Tum",
    districts: [
      {
        name: "TP. Kon Tum",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Glei",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đắk Tô",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ia H'Drai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kon Plông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kon Rẫy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ngọc Hồi",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sa Thầy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tu Mơ Rông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Lai Châu",
    districts: [
      {
        name: "TP. Lai Châu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường Tè",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nậm Nhùn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phong Thổ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sìn Hồ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tam Đường",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Uyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Than Uyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Lâm Đồng",
    districts: [
      {
        name: "TP. Đà Lạt",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Bảo Lộc",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bảo Lâm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cát Tiên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Di Linh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đạ Huoai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đạ Tẻh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đam Rông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đơn Dương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đức Trọng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lạc Dương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lâm Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Lạng Sơn",
    districts: [
      {
        name: "TP. Lạng Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Gia",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cao Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chi Lăng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đình Lập",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hữu Lũng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lộc Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tràng Định",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Lãng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Quan",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Lào Cai",
    districts: [
      {
        name: "TP. Lào Cai",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Sa Pa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bát Xát",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bảo Thắng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bảo Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường Khương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Si Ma Cai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Bàn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Long An",
    districts: [
      {
        name: "TP. Tân An",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Kiến Tường",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bến Lức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cần Đước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cần Giuộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đức Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đức Huệ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mộc Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Hưng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Thạnh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Trụ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạnh Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thủ Thừa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Hưng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Nam Định",
    districts: [
      {
        name: "TP. Nam Định",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Giao Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hải Hậu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mỹ Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nam Trực",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nghĩa Hưng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trực Ninh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vụ Bản",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Xuân Trường",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ý Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Nghệ An",
    districts: [
      {
        name: "TP. Vinh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Cửa Lò",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Thái Hòa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Hoàng Mai",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Anh Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Con Cuông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Diễn Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đô Lương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hưng Nguyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kỳ Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nam Đàn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nghi Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nghĩa Đàn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quế Phong",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quỳ Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quỳ Hợp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quỳnh Lưu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Kỳ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Chương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tương Dương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Ninh Bình",
    districts: [
      {
        name: "TP. Ninh Bình",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Tam Điệp",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gia Viễn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hoa Lư",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kim Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nho Quan",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Khánh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Mô",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Ninh Thuận",
    districts: [
      {
        name: "TP. Phan Rang - Tháp Chàm",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bác Ái",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ninh Hải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ninh Phước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ninh Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thuận Bắc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thuận Nam",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Phú Thọ",
    districts: [
      {
        name: "TP. Việt Trì",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Phú Thọ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cẩm Khê",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đoan Hùng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hạ Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lâm Thao",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phù Ninh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tam Nông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Ba",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thanh Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Lập",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Phú Yên",
    districts: [
      {
        name: "TP. Tuy Hòa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Sông Cầu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Đông Hòa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đồng Xuân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sơn Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sông Hinh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tây Hòa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tuy An",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Quảng Bình",
    districts: [
      {
        name: "TP. Đồng Hới",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Ba Đồn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bố Trạch",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lệ Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Minh Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quảng Ninh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quảng Trạch",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tuyên Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Quảng Nam",
    districts: [
      {
        name: "TP. Tam Kỳ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Hội An",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Điện Bàn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Trà My",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đại Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đông Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Duy Xuyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hiệp Đức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nam Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nam Trà My",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nông Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Núi Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Ninh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phước Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quế Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tây Giang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thăng Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiên Phước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Quảng Ngãi",
    districts: [
      {
        name: "TP. Quảng Ngãi",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Đức Phổ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ba Tơ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lý Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Minh Long",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mộ Đức",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nghĩa Hành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sơn Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sơn Tây",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sơn Tịnh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trà Bồng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tư Nghĩa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Quảng Ninh",
    districts: [
      {
        name: "TP. Hạ Long",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Cẩm Phả",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Móng Cái",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Uông Bí",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Quảng Yên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Đông Triều",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ba Chẽ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Liêu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cô Tô",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đầm Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hải Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiên Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vân Đồn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Quảng Trị",
    districts: [
      {
        name: "TP. Đông Hà",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Quảng Trị",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cam Lộ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cồn Cỏ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đakrông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gio Linh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hải Lăng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hướng Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Triệu Phong",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Linh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Sóc Trăng",
    districts: [
      {
        name: "TP. Sóc Trăng",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Ngã Năm",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Vĩnh Châu",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cù Lao Dung",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kế Sách",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Long Phú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mỹ Tú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mỹ Xuyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạnh Trị",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trần Đề",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Sơn La",
    districts: [
      {
        name: "TP. Sơn La",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bắc Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mai Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mộc Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường La",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phù Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quỳnh Nhai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sông Mã",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sốp Cộp",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thuận Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vân Hồ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Tây Ninh",
    districts: [
      {
        name: "TP. Tây Ninh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Hòa Thành",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Trảng Bàng",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bến Cầu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Dương Minh Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gò Dầu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Biên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Châu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Thái Bình",
    districts: [
      {
        name: "TP. Thái Bình",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đông Hưng",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hưng Hà",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Kiến Xương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quỳnh Phụ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thái Thụy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiền Hải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vũ Thư",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Thái Nguyên",
    districts: [
      {
        name: "TP. Thái Nguyên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Sông Công",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Phổ Yên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đại Từ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Định Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đồng Hỷ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Lương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Võ Nhai",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Thanh Hóa",
    districts: [
      {
        name: "TP. Thanh Hóa",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Sầm Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Bỉm Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Nghi Sơn",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bá Thước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cẩm Thủy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Đông Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hà Trung",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hậu Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hoằng Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lang Chánh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mường Lát",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nga Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Ngọc Lặc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Như Thanh",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Như Xuân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nông Cống",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quan Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quan Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quảng Xương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thạch Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thiệu Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thọ Xuân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Thường Xuân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Triệu Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Định",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Thừa Thiên Huế",
    districts: [
      {
        name: "TP. Huế",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Hương Thủy",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Hương Trà",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện A Lưới",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Nam Đông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phong Điền",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Lộc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Phú Vang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Quảng Điền",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Tiền Giang",
    districts: [
      {
        name: "TP. Mỹ Tho",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Cai Lậy",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Gò Công",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cái Bè",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cai Lậy",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chợ Gạo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gò Công Đông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Gò Công Tây",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Phú Đông",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tân Phước",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Trà Vinh",
    districts: [
      {
        name: "TP. Trà Vinh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Duyên Hải",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Càng Long",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cầu Kè",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Cầu Ngang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Châu Thành",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Duyên Hải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tiểu Cần",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trà Cú",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Tuyên Quang",
    districts: [
      {
        name: "TP. Tuyên Quang",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Chiêm Hóa",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Hàm Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lâm Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Na Hang",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sơn Dương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Sơn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Vĩnh Long",
    districts: [
      {
        name: "TP. Vĩnh Long",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Bình Minh",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Tân",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Long Hồ",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mang Thít",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tam Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trà Ôn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vũng Liêm",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Vĩnh Phúc",
    districts: [
      {
        name: "TP. Vĩnh Yên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "TP. Phúc Yên",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Bình Xuyên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lập Thạch",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Sông Lô",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tam Đảo",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Tam Dương",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Vĩnh Tường",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Lạc",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
  {
    name: "Yên Bái",
    districts: [
      {
        name: "TP. Yên Bái",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Thị xã Nghĩa Lộ",
        wards: ["Phường 1", "Phường 2", "Phường 3", "Phường trung tâm", "Phường / Xã khác"]
      },
      {
        name: "Huyện Lục Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Mù Cang Chải",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trạm Tấu",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Trấn Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Chấn",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Văn Yên",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
      {
        name: "Huyện Yên Bình",
        wards: ["Thị trấn", "Xã trung tâm", "Xã 1", "Phường / Xã khác"]
      },
    ]
  },
];
