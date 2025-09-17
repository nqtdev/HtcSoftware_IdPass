import Banner from 'assets/page_idPass/banner.webp'
import 'aos/dist/aos.css'
import useCheckMobile from 'hooks/useCheckMobile'
const PosterPage = () => {
  const isMobile = useCheckMobile()
  return (
    <div className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 overflow-x-hidden'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
        <div className='absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
        <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
        <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
      </div>
      <div className='container mx-auto max-w-7xl relative z-10 px-4'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div
            className='w-full lg:w-1/2 text-center lg:text-left'
            data-aos={isMobile ? 'fade-up' : 'fade-right'}
            data-aos-delay='200'
          >
            <h1 className='text-5xl text-center lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6'>
              ID Pass
            </h1>
            <p className='text-xl text-center md:text-2xl text-gray-700 mb-6'>
              Giải pháp định danh điện tử cho doanh nghiệp
            </p>
            <p className='text-gray-600 mb-8 leading-relaxed'>
              Đây là giải pháp kiểm tra/xác thực thông tin công dân trong chip của thẻ CCCD được
              tích hợp với dịch vụ xác thực của C06 (Bộ Công an). ID Pass sử dụng sinh trắc học
              khuôn mặt thông qua: OCR, FacialMatching, Liveness để so khớp khuôn mặt chủ giấy tờ
              Xác minh giấy tờ là chính chủ.
            </p>
          </div>
          <div
            className='w-full lg:w-1/2'
            data-aos={isMobile ? 'fade-up' : 'fade-left'}
            data-aos-delay='400'
          >
            <div className='relative items-center justify-center flex'>
              <div className='absolute -inset-5 '>
                <div className='w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-purple-600'></div>
              </div>
              <img
                src={Banner}
                alt='IPass Banner'
                className='relative w-full max-w-md mx-auto lg:mx-0  transform hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PosterPage
