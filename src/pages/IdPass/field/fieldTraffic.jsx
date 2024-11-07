import img_fieldTraffic from 'assets/homePage/field/traffic.svg'
const FieldTraffic = () => {
  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='basis-1/2 flex justify-center items-center'>
        <ul>
          <li className='font-mulish'>
            - Cấp Giấy phép lái xe trong các cuộc thi sát hạch: Kiểm tra và xách minh danh tính thí
            sinh tham gia cuộc thi sát hạch =&gt; Cấp Giấy phép lái xe đúng người, ngăn ngừa tình
            trạng thi hộ.
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img
          className='w-3/5 m-auto'
          src={img_fieldTraffic}
          alt='img_fieldTraffic'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default FieldTraffic
