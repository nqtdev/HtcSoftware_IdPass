import imgStepOne from 'assets/page_idPass/stepProcedure/stepOne.svg'

const StepOne = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 items-center justify-between p-6 '>
      {/* Image Section */}
      <div className='lg:w-1/2 relative'>
        <div className='relative max-w-md mx-auto'>
          <img
            src={imgStepOne}
            alt='Hướng dẫn đặt thẻ'
            className='w-full transform hover:scale-105 transition-transform duration-700 '
          />
          {/* Decorative elements */}
          <div className='absolute -top-3 -right-3 w-24 h-24 bg-blue-200 rounded-full opacity-50 -z-10'></div>
          <div className='absolute -bottom-3 -left-3 w-20 h-20 bg-purple-200 rounded-full opacity-50 -z-10'></div>
        </div>
      </div>

      {/* Content Section */}
      <div className='lg:w-1/2 space-y-6'>
        <ul className='space-y-4 text-gray-700'>
          <li className='flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
            <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3'>
              ✓
            </span>
            <span className='text-lg'>
              Đặt CCCD gắn chip vào khe nhận thẻ trên thiết bị đọc (thiết bị sẽ tự cuộn thẻ vào)
            </span>
          </li>
          <li className='flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
            <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3'>
              ✓
            </span>
            <span className='text-lg'>Thiết bị không phân biệt mặt trước/mặt sau của thẻ</span>
          </li>
        </ul>

        <div className='mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100'>
          <p className='text-blue-700 flex items-center'>
            <span className='text-xl mr-2'>💡</span>
            Đảm bảo thẻ CCCD được đặt đúng cách vào khe đọc để quá trình xác thực diễn ra thuận lợi.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StepOne
