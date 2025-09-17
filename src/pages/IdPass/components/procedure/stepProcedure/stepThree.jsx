import imgStepThree from 'assets/page_idPass/stepProcedure/stepThree.svg'

const StepThree = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 items-center justify-between p-6 '>
      {/* Image Section */}
      <div className='lg:w-1/2 relative'>
        <div className='relative max-w-md mx-auto'>
          <img
            src={imgStepThree}
            alt='Hướng dẫn đặt thẻ'
            className='w-full transform hover:scale-105 transition-transform duration-700 '
          />
          {/* Decorative elements */}
          <div className='absolute -top-3 -right-3 w-24 h-24 bg-purple-200 rounded-full opacity-50 -z-10'></div>
          <div className='absolute -bottom-3 -left-3 w-20 h-20 bg-pink-200 rounded-full opacity-50 -z-10'></div>
        </div>
      </div>

      {/* Content Section */}
      <div className='lg:w-1/2 space-y-6'>
        <ul className='space-y-4 text-gray-700'>
          <li className='flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
            <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3'>
              ✓
            </span>
            <span className='text-lg'>Chụp ảnh chân dung chủ thẻ</span>
          </li>
          <li className='flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
            <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3'>
              ✓
            </span>
            <span className='text-lg'>
              Đối sánh ảnh chân dung vừa chụp với ảnh trong CCCD gắn chip
            </span>
          </li>
        </ul>

        <div className='mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100'>
          <p className='text-purple-700 flex items-center'>
            <span className='text-xl mr-2'>✨</span>
            Đảm bảo khuôn mặt được chụp rõ ràng, không che khuất và ánh sáng đầy đủ để đối sánh
            chính xác.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StepThree
