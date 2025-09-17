import LogoHtcSw from 'assets/logo/logo_sw.webp'

const LayoutFooter = () => {
  return (
    <footer className='bg-gray-800 text-white pt-12 pb-6'>
      <div className='container mx-auto px-4 xl:px-0'>
        <h3 className='text-2xl text-center font-roboto font-bold mb-4 text-white uppercase '>
          Công ty Cổ phần giải pháp phần mềm HTC
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-8'>
          {/* Column 1 - Logo & Contact */}
          <div className='space-y-4'>
            <p className='text-sm text-[#a1a5ba]'>Sản phẩm thuộc hệ sinh thái</p>
            <img className='w-32 h-auto' src={LogoHtcSw} alt='Pacific Intelecom Logo' />
            <div className='space-y-3'>
              <div className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 mt-1 flex-shrink-0 text-gray-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                  />
                </svg>
                <a
                  href='mailto:kinhdoanh@htcsoftware.vn'
                  className='ml-2 hover:text-gray-300 transition-colors text-gray-300'
                >
                  kinhdoanh@htcsoftware.vn
                </a>
              </div>
              <div className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 mt-1 flex-shrink-0 text-gray-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                  />
                </svg>
                <a
                  href='tel:0848565555'
                  className='ml-2 hover:text-gray-300 transition-colors text-gray-300'
                >
                  084.856.5555
                </a>
              </div>
              <div className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 mt-1 flex-shrink-0 text-gray-300'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                  />
                </svg>
                <p className='ml-2 text-gray-300'>Mã Số Doanh Nghiệp: 0103925078</p>
              </div>
            </div>
          </div>
          {/* Column 2 - Company Info */}
          <div className='md:col-span-2'>
            <div className='space-y-4'>
              <div>
                <h4 className='font-semibold text-gray-400 mb-2'>VĂN PHÒNG GIAO DỊCH</h4>
                <div className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 mt-1 flex-shrink-0 text-gray-300'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                  <p className='ml-2 text-gray-300'>
                    Tầng 4, Tòa Monaco, Ngách 6 ngõ 118 Nguyễn Khánh Toàn, Phường Nghĩa Đô, Thành
                    Phố Hà Nội
                  </p>
                </div>
              </div>
              <div>
                <h4 className='font-semibold text-gray-400 mb-2'>TRỤ SỞ CHÍNH</h4>
                <div className='flex'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 mt-1 flex-shrink-0 text-gray-300'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                  <p className='ml-2 text-gray-300'>
                    Số 15, Ngõ 29 phố Khương Hạ, Phường Khương Đình, Thành phố Hà Nội.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Column 3 - Quick Links */}
          <div>
            <h4 className='font-semibold text-gray-400 mb-2'>GIỜ LÀM VIỆC</h4>
            <div>
              <p className='text-gray-300'>Thứ 2 - Thứ 6: 8:30 - 17:30</p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className='border-t border-gray-700 my-6'></div>
        {/* Copyright */}
        <div className='text-center text-sm text-gray-400 '>
          <p>Copyright © 2023 Công ty Cổ Phần Giải Pháp Phần Mềm HTC.</p>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter
