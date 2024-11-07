import img_fieldBank from 'assets/homePage/field/bank.svg'

const FieldBank = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Quầy giao dịch: Số hóa quy trình xử lý thủ tục tại quầy giao dịch cho các Ngân hàng:
            mở thẻ, sổ tiết kiệm, rút tiết kiệm, … và tổ chức tài chính
          </li>
          <li className='font-mulish'>
            - Rút ngắn thời gian kiểm tra giấy tờ và thông tin của khách hàng; Giảm thiểu rủi ro,
            ngăn ngừa triệt để sự mạo danh, giả mạo danh tính/thông tin nhân thân cũng như sự giả
            mạo hồ sơ
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img className='w-3/5 m-auto' src={img_fieldBank} alt='img_fieldBank' loading='lazy' />
      </div>
    </div>
  )
}

export default FieldBank
