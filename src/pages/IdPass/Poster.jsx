import Banner from 'assets/homePage/banner.webp'
import 'aos/dist/aos.css'
const PosterPage = () => {
  return (
    <div>
      <section className='flex max-w-full flex-col justify-between lg:flex-row'>
        <div className='container m-auto box-border px-2'>
          <h1 className='m-2 text-center text-7xl font-bold italic text-main-colors md:text-[3.2rem] xl:text-9xl'>
            ID Pass
          </h1>
          <div className='text-center sm:m-2'>
            <span className='text-md text-main-colors xl:text-2xl'>
              Xác thực căn cước công dân gắn chip chính xác{' '}
              <span className='text-base font-bold text-green-600 xl:text-2xl'>100%</span> với cơ sở
              dữ liệu
              <span className='text-base font-bold text-green-600 xl:text-2xl'> RAR-C06</span> của
              Bộ Công An
            </span>
          </div>
          <div>
            <span className='text-md ml-1 text-gray-600'>
              Đây là giải pháp kiểm tra/xác thực thông tin công dân trong chip của thẻ CCCD được
              tích hợp với dịch vụ xác thực của C06 (Bộ Công an). ID Pass sử dụng sinh trắc học
              khuôn mặt thông qua: OCR, FacialMatching, Liveness để so khớp khuôn mặt chủ giấy tờ
              Xác minh giấy tờ là chính chủ.
            </span>
          </div>
        </div>
        <div className='container p-2'>
          <img className='w-[80%] m-auto' src={Banner} alt='logo banner' />
        </div>
      </section>
    </div>
  )
}

export default PosterPage
