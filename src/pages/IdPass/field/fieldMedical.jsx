import img_fieldMedical from 'assets/homePage/field/medical.svg'
const FieldMedical = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Sử dụng tại bệnh viện các tuyến, phòng khám, Trung tâm khám chữa bệnh: Xác định chủ
            thể khám chữ bệnh, chủ thể hưởng chế độ bảo hiểm y tế ...
          </li>
          <li className='font-mulish'>
            - Xác định đúng chủ thể hưởng bảo hiểm y tế và hỗ trợ theo quy định của Nhà nước, tránh
            trường hợp trục lợi bảo hiểm
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img
          className='w-3/5 m-auto'
          src={img_fieldMedical}
          alt='img_fieldMedical'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default FieldMedical
