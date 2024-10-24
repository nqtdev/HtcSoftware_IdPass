import imgStepThree from 'assets/homePage/stepProcedure/stepThree.svg'
const StepThree = () => {
  return (
    <div className='p-5 flex flex-row justify-center items-center'>
      <div className='basis-1/2'>
        <ul>
          <li className='font-mulish text-blue-600 text-lg'>
            {' '}
            <i>- Chụp ảnh chân dung</i>
          </li>
          <li className='font-mulish text-blue-600 text-lg'>
            {' '}
            <i>- Đối sánh ảnh chân dung</i>
          </li>
        </ul>
      </div>
      <div className='basis-1/2'>
        <img className='m-auto' src={imgStepThree} alt='imgStepThree' />
      </div>
    </div>
  )
}

export default StepThree
