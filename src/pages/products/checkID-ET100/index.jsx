import TableSpecification from 'components/TableSpecification'
import SlideShowSwiper from 'components/SlideShowSwiper'
import DeviceParameters from './data/DeviceParameters'
import SlideProduct from './data/SlideProduct'
import imgProduct_ET from 'assets/image_products/checkID-ET100/banner.png'
import OtherProduct from 'components/otherProducts'
import DataGet from 'components/softwareInterface/DataGet'
import FeaturesSection from 'components/FeaturesSection'
import Features from './data/Features'
import DescribeTitle from 'layout/describeTitle/describeTitle'
import CallToAction from 'layout/callToAcction'

const CheckIdEt = () => {
  return (
    <div className='bg-gradient-to-br from-slate-50 to-blue-50 '>
      {/* Banner sản phẩm  */}
      <section>
        <div className='relative min-h-[80vh] w-full'>
          {/* Background với overlay */}
          <div
            className='absolute inset-0 bg-bg-img-product bg-cover bg-center bg-no-repeat'
            style={{
              backgroundAttachment: 'fixed',
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          >
            <div className='absolute inset-0 bg-gradient-to-r from-blue-900/70 to-indigo-900/70'></div>
          </div>

          {/* Content */}
          <div className='relative z-10 container mx-auto px-4 py-16 md:py-24 h-full flex flex-col md:flex-row items-center'>
            {/* Text Content */}
            <div
              data-aos='fade-right'
              data-aos-duration='2000'
              className='md:w-1/2 text-center md:text-left mb-12 md:mb-0 px-4'
            >
              <div className='mb-8 animate-fadeIn'>
                <h1 className='text-3xl md:text-6xl 2xl:text-7xl font-bold text-white leading-tight'>
                  Terminal eID <br />
                  <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
                    (CheckID-ET100)
                  </span>
                </h1>
                <div className='mt-4 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto md:mx-0 rounded-full'></div>
              </div>

              <p className='text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-lg mx-auto md:mx-0 animate-fadeIn delay-100'>
                Đọc Máy Quét Thẻ Hộ Chiếu Điện Tử ICAO ID Card
              </p>
            </div>

            {/* Image Content */}
            <div
              className='w-full lg:w-1/2 flex justify-center'
              data-aos='fade-left'
              data-aos-delay='400'
            >
              <div className='relative'>
                <div className='absolute -inset-5'>
                  <div className='w-full h-full opacity-30 blur-lg bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full'></div>
                </div>
                <img
                  src={imgProduct_ET}
                  alt='CheckID-ET100 Terminal'
                  className='relative w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transform hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hình ảnh sản phẩm  */}
      <section>
        <div className='my-4 text-center'>
          <DescribeTitle title='Hình ảnh sản phẩm' />
        </div>
        <div className='m-auto w-5/6'>
          <SlideShowSwiper slidesShow={SlideProduct} />
        </div>
      </section>

      {/* Chi tiết sản phẩm  */}
      <section>
        <div className='max-w-4xl mx-auto  overflow-hidden'>
          <div className='p-8 md:p-12'>
            {/* Danh sách tính năng */}
            <div className='space-y-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='ml-3 text-gray-700 font-mulish text-lg'>
                  Đáp ứng nhu cầu bảo mật cao mà không làm giảm sự tiện lợi
                </p>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='ml-3 text-gray-700 font-mulish text-lg'>
                  Có cổng USB loại A female, cho phép kết nối với máy tính
                </p>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='ml-3 text-gray-700 font-mulish text-lg'>
                  Hỗ trợ nhiều loại cảm biến sinh trắc học như SecuGen, SupreMa, ZKTeco và Morpho
                </p>
              </div>

              <div className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='ml-3 text-gray-700 font-mulish text-lg'>
                  Việc chọn cảm biến sinh trắc học nên dựa trên yêu cầu của khách hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <FeaturesSection dataFeatures={Features} />
      </section>
      <section>
        <DataGet />
      </section>

      {/* Thông số kỹ thuật thiết bị  */}
      <section>
        <TableSpecification data={DeviceParameters} />
      </section>

      {/* Xem thêm sản phẩm */}
      <section>
        <OtherProduct />
      </section>
      <section>
        <CallToAction />
      </section>
    </div>
  )
}
export default CheckIdEt
