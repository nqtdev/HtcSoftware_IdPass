import img_fieldEdu from 'assets/homePage/field/edu.svg'
const FieldEdu = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li>
            - Phòng thi: Thi đầu cấp, thi tốt nghiệp. Học sinh giỏi các cấp, thi xuất khẩu lao
            động,..
          </li>
          <li>- Lớp học: Trường Đại học, Cao đẳng, Trung cấp, nghề,..</li>
          <li>
            {' '}
            =&gt; Nhận diện và Xác minh danh tính học sinh, sinh viên trong quá trình: Thi thử, thi
            vượt cấp, tốt nghiệp,.. Phát hiện các trường hợp giả mạo danh tính để học hộ, thi hộ{' '}
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img className='w-3/5 m-auto' src={img_fieldEdu} alt='img_fieldEdu' />
      </div>
    </div>
  )
}

export default FieldEdu
