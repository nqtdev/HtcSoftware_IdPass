import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import useCheckMobile from 'hooks/useCheckMobile'

const PosterPage = () => {
  // const isMobile = useCheckMobile()

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden py-16'>
      <div className='absolute inset-0 bg-bg-banner bg-cover bg-right xl:bg-center bg-no-repeat bg-fixed z-0' />
      <div className='container mx-auto px-4 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
          <div className='w-full lg:w-3/5 text-center lg:text-left'>
            <div className='text-center' data-aos='zoom-in' data-aos-delay='200'>
              <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold font-roboto mb-6 leading-tight text-blue-600'>
                ID Pass
              </h1>
              <p className='text-lg md:text-xl text-white mb-8 mx-auto lg:mx-0'>
                Thiết bị đầu đọc thẻ được trung tâm RAR khuyên dùng
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <svg
                    className='w-6 h-6 text-blue-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                    ></path>
                  </svg>
                </div>
                <span className='text-blue-800 text-sm leading-relaxed font-medium'>
                  ID Pass là dịch vụ cung cấp thiết bị đọc Căn Cước chính xác{' '}
                  <span className='text-red-700'> 100%</span> phục vụ các nhu cầu trong: Tài chính,
                  Giáo dục, Y tế,..
                </span>
              </div>

              <div
                data-aos='fade-up'
                data-aos-delay='500'
                className='bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <svg
                    className='w-6 h-6 text-purple-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    ></path>
                  </svg>
                </div>
                <p className='text-blue-800 text-sm leading-relaxed font-medium'>
                  Các dòng thiết bị đáp ứng các nhu cầu: Tích hợp NFC đọc Chip, Scan ảnh 2 bề mặt
                  thẻ, Lấy vân tay, Chụp ảnh gương mặt,..
                </p>
              </div>

              <div
                data-aos='fade-up'
                data-aos-delay='800'
                className='bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                  <svg
                    className='w-6 h-6 text-cyan-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                    ></path>
                  </svg>
                </div>
                <p className='text-blue-800 text-sm leading-relaxed font-medium'>
                  Thiết kế hiện đại, nhỏ gọn (USB cầm tay), tiện lợi với nhiều model phù hợp cho mọi
                  nhu cầu sử dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicator cuộn xuống */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10'>
        <div className='flex flex-col items-center'>
          <span className='text-sm font-medium text-white mb-2'>Khám phá</span>
          <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default PosterPage
