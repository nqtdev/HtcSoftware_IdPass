import img_fieldTelecom from 'assets/homePage/field/telecom.svg'
const FieldTelecom = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Quầy giao dịch, điểm, văn phòng giao dịch: kích hoạt thuê bao, thay đổi thuê bao (trả
            trước, trả sau), ...
          </li>
          <li className='font-mulish'>
            - Tránh tình trạng lợi dụng thông tin của người khác để đăng ký, kích hoạt sim và sử
            dụng dịch vụ viễn thông sai mục đích. Hạn chế tình trạng Sim rác.
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img
          className='w-3/5 m-auto'
          src={img_fieldTelecom}
          alt='img_fieldTelecom'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default FieldTelecom
