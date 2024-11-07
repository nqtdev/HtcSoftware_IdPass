import img_fieldLogistics from 'assets/homePage/field/logistics.svg'
const FieldTransportLogistics = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Kiểm soát khách hàng gửi đơn tại bưu cục (tránh tình trạng lợi dụng đơn vị vận chuyển
            cho các mục đích xấu).
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img
          className='w-3/5 m-auto'
          src={img_fieldLogistics}
          alt='img_fieldLogistics'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default FieldTransportLogistics
