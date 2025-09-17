import imgStepFour from 'assets/page_idPass/stepProcedure/stepFour.svg'

const StepFour = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 items-center justify-between p-6'>
      {/* Image Section */}
      <div className='lg:w-1/2 relative'>
        <div className='relative max-w-md mx-auto'>
          <img
            src={imgStepFour}
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
            <span className='text-lg'>Phản hồi kết xuất dữ liệu</span>
          </li>
          <li className='flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300'>
            <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mr-3'>
              ✓
            </span>
            <span className='text-lg'>Thiết bị nhả thẻ</span>
          </li>
        </ul>

        <div className='mt-6 p-4 bg-blue-50 rounded-xl border border-blue-100'>
          <p className='text-blue-700 flex items-center'>
            <span className='text-xl mr-2'>💡</span>
            Quá trình xác thực hoàn tất, dữ liệu đã được trả về và thẻ được nhả ra an toàn.
          </p>
        </div>
      </div>
    </div>
  )
}

export default StepFour
