import img_fieldInsurance from 'assets/homePage/field/insurance.svg'
const FieldInsurance = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Đại lý, văn phòng đại diện bảo hiểm: Xác định đúng chủ thể Hợp đồng và các quyền lợi
            được hưởng (nâng cao tính pháp lý).
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img
          className='w-3/5 m-auto'
          src={img_fieldInsurance}
          alt='img_fieldInsurance'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default FieldInsurance
