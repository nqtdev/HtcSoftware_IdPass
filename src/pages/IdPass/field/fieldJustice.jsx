import img_fieldJustice from 'assets/homePage/field/justice.svg'
const FieldJustice = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Sử dụng tại Tòa án các cấp (các phiên xét xử): kiểm soát người ra vào tại các phiên
            xét xử, tránh các trường hợp không liên quan tham dự theo quy định.
          </li>
          <li className='font-mulish'>
            - Văn phòng công chứng: Xác minh đúng danh tính khách hàng đến Văn phòng thực hiện các
            thủ tục, làm căn cứ cho các giao dịch tại Văn phòng đã thực hiện.
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img
          className='w-3/5 m-auto'
          src={img_fieldJustice}
          alt='img_fieldJustice'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default FieldJustice
