import imgStepOne from 'assets/homePage/stepProcedure/stepOne.svg'
const StepOne = () => {
  return (
    <div className='p-5 flex flex-row justify-center items-center'>
      <div className='basis-1/2'>
        <ul>
          <li>
            {' '}
            <i className='font-mulish text-blue-600 text-lg'>
              - Đặt CCCD gắn chip vào khe nhận thẻ trên thiết bị đọc (thiết bị sẽ tự cuộn thẻ vào)
            </i>
          </li>
          <li>
            {' '}
            <i className='font-mulish text-blue-600 text-lg'>
              (Thiết bị không phân biệt mặt trước/mặt sau của thẻ)
            </i>
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img className='m-auto' src={imgStepOne} alt='imgStepOne' />
      </div>
    </div>
  )
}

export default StepOne
