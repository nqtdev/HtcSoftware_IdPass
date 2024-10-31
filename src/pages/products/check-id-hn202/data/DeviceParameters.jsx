// @ Cấu hình data thông số thiết bị
const DeviceParameters = [
  {
    itemA: 'Kích thước',
    specificationA: '180 x 119 x 60mm (D x R x C',
    itemB: 'Màu sắc',
    specificationB: 'Xám xanh, Đen, Trắng',
  },
  {
    itemA: 'Trọng lượng',
    specificationA: '~360gr',
    itemB: 'Nhiệt độ làm việc',
    specificationB: '-10°C đến 65°C',
  },
  {
    itemA: 'Độ ẩm',
    specificationA: '0 - 90%',
    itemB: 'Nguồn cấp',
    specificationB: 'USB 5V - 1000mA',
  },
  {
    itemA: 'Công suất cực đại',
    specificationA: '5W',
    itemB: 'Tần số vô tuyến',
    specificationB: '13.56MHz',
  },
  {
    itemA: 'Loại thẻ hỗ trợ',
    specificationA:
      'ISO/IEC 14443 - Part 3/4 A,B \nISO/IEC 15693, ISO/IEC 18092 \n Felica \nMIFARE Classic Family, MIFARE Ultraligt Family',
    itemB: 'Tốc độ giao tiếp rẻ',
    specificationB: '106/212/424/848 kbps',
  },
  {
    itemA: 'Thời gian đọc CCGC',
    specificationA: '<3s',
    itemB: 'Tốc độ so khớp khuôn mặt',
    specificationB: '<1s',
  },
  {
    itemA: 'Đèn báo',
    specificationA: 'Đèn báo nguồn, đèn báo xử lý kèm âm thanh',
    itemB: 'Chất liệu vỏ',
    specificationB: 'Nhựa ABS tuân thủ RoHS',
  },
  {
    itemA: 'Giao tiếp máy tính',
    specificationA: 'USB 2.0',
    itemB: 'Nâng cấp Filmware',
    specificationB: 'Thông qua USB, Online',
  },
  {
    itemA: 'Xuất xứ',
    specificationA: 'Việt Nam',
    itemB: 'Phụ kiện đi kèm',
    specificationB: 'Dây cáp USB type A \n Sách HDSD',
  },
]

const DeviceParametersCamera = [
  {
    itemA: 'Kích thước',
    specificationA: '60 x 30 x 20mm',
    itemB: 'Phạm vi xoay',
    specificationB: 'Dọc: 120° Ngang: 180°',
  },
  {
    itemA: 'Nhiệt độ hoạt động',
    specificationA: '-15°C đến 70°C',
    itemB: 'Chất liệu',
    specificationB: ' Nhựa ABS',
  },
  {
    itemA: 'Giao tiếp',
    specificationA: 'USB 2.0',
    itemB: 'Nguồn cấp',
    specificationB: 'DC 5V từ giao tiếp USB',
  },
  {
    itemA: 'Tiêu thụ điện năng tối đa',
    specificationA: '470mW',
    itemB: 'Hỗ trợ hệ điều hành',
    specificationB: 'Windows/Linux/Android/Mac',
  },
  {
    itemA: 'Cảm biến',
    specificationA: 'GC2145 (1/5” )',
    itemB: 'Độ phân giải tối đa',
    specificationB: '1600*1200 (2Mpx)',
  },
  {
    itemA: 'Mật độ',
    specificationA: '1200mv/(lux-sec)',
    itemB: ' Kích thước điểm ảnh',
    specificationB: '1.75µm x 1.75µm',
  },
  {
    itemA: 'Tốc độ khung hình',
    specificationA: 'HD1280x720@30FPS',
    itemB: 'Chuẩn đầu ra',
    specificationB: 'MJPEG/YUY2',
  },
  {
    itemA: 'Tỉ lệ tạp S/N',
    specificationA: '36 db',
    itemB: 'Lấy nét',
    specificationB: 'Cố định, phạm vi nét 0.5-2m',
  },
  {
    itemA: ' Cân bằng sáng',
    specificationA: 'Tự động',
    itemB: 'Góc quan sát FOV',
    specificationB: '72°',
  },
  {
    itemA: ' Độ méo ảnh Distortion ',
    specificationA: ' <1%',
    itemB: 'Tiêu chuẩn',
    specificationB: 'ROSH',
  },
]
export {DeviceParameters, DeviceParametersCamera}
