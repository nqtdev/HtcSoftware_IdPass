import imgStepFour from 'assets/homePage/stepProcedure/stepFour.svg'
const StepFour = () => {
  return (
    <div className='p-5 flex flex-row justify-center items-center'>
      <div className='basis-1/2'>
        <ul>
          <li className='font-mulish text-blue-600 text-lg'> - Kết xuất dữ liệu</li>
          <li className='font-mulish text-blue-600 text-lg'> - Thiết bị nhả thẻ</li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img className='m-auto' src={imgStepFour} alt='imgStepFour' />
      </div>
    </div>
  )
}

export default StepFour
