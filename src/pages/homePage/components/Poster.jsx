import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SplitText from 'components/reactBits/SplitText'
import PosterProduct from './PosterProduct'
import useCheckMobile from 'hooks/useCheckMobile'
const PosterPage = () => {
  const isMobile = useCheckMobile()
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
      <div className='absolute inset-0 bg-bg-product bg-cover bg-right xl:bg-center bg-no-repeat bg-fixed z-0' />
      <div className='max-w-7xl mx-auto lg:flex  items-center relative z-10'>
        <div className='flex-1'>
          <div className='w-full p-2'>
            <div className='text-center'>
              <SplitText
                text={
                  <h1 className='text-7xl lg:text-9xl font-bold font-roboto mb-6 leading-tight text-white'>
                    ID Pass
                  </h1>
                }
                delay={400}
                duration={0.6}
                ease='power3.out'
                splitType='chars'
                from={{opacity: 0, y: 40}}
                to={{opacity: 1, y: 0}}
                threshold={0.1}
                rootMargin='-100px'
                textAlign='center'
              />

              <p className='text-lg text-center md:text-xl text-white mb-8 mx-auto lg:mx-0'>
                Thiết bị đầu đọc thẻ{' '}
                <span className='text-lg md:text-xl text-red-600 font-bold font-roboto'>
                  Căn Cước/Căn Cước Công Dân gắn Chip
                </span>{' '}
                được trung tâm RAR khuyên dùng
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-12'>
              <div
                data-aos='fade-up'
                data-aos-delay='200'
                className='  hover:shadow-xl transition-all duration-300 hover:-translate-y-1'
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
                <span className='text-white text-base leading-relaxed font-roboto'>
                  ID Pass là dịch vụ cung cấp thiết bị đọc Căn Cước chính xác{' '}
                  <span className='text-red-800 leading-relaxed font-roboto font-bold'> 100%</span>{' '}
                  phục vụ các nhu cầu trong: Tài chính, Giáo dục, Y tế,..
                </span>
              </div>

              <div
                data-aos='fade-up'
                data-aos-delay='500'
                className='  transition-all duration-300 hover:-translate-y-1'
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
                <span className='text-white text-base leading-relaxed font-medium'>
                  Các dòng thiết bị đáp ứng các nhu cầu: Tích hợp NFC đọc Chip, Scan ảnh 2 bề mặt
                  thẻ, Lấy vân tay, Chụp ảnh gương mặt,..
                </span>
              </div>

              <div
                data-aos='fade-up'
                data-aos-delay='800'
                className='  transition-all duration-300 hover:-translate-y-1'
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

                <span className='text-white text-base leading-relaxed font-medium'>
                  Thiết kế hiện đại, nhỏ gọn (USB cầm tay), tiện lợi với nhiều model phù hợp cho mọi
                  nhu cầu sử dụng.
                </span>
              </div>
            </div>
          </div>
        </div>
        {isMobile ? null : (
          <div className='flex-1 w-full m-auto mt-72 ml-44 lg:mt-14 lg:ml-14'>
            <PosterProduct />
          </div>
        )}
      </div>
    </div>
  )
}

export default PosterPage
