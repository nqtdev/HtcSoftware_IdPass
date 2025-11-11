import TableSpecification from 'components/TableSpecification'
import {DeviceParameters, DeviceParametersCamera} from './data/DeviceParameters'
import SlideProduct from './data/SlideProduct'
import imgProduct_HN from 'assets/image_products/checkID-HN212/banner.png'
import SlideShowSwiper from 'components/SlideShowSwiper'
import OtherProduct from 'components/otherProducts'
import HanelView from 'components/softwareInterface/HanelView'
import DataGet from 'components/softwareInterface/DataGet'
import FeaturesSection from 'components/FeaturesSection'
import Features from './data/Features'

import ProductDescription from 'components/ProductDescription'
import DataProductDescription from './data/ProductDescription'
import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
const CheckIdHn = () => {
  return (
    <div className='overflow-hidden'>
      {/* Banner sản phẩm  */}
      <section>
        <div className='relative min-h-[80vh] w-full overflow-hidden'>
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
                  CCID Smartcard Reader <br />
                  <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
                    (HN-212)
                  </span>
                </h1>
                <div className='mt-4 h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto md:mx-0 rounded-full'></div>
              </div>
              <p className='text-lg sm:text-xl md:text-2xl text-white/90 font-medium max-w-lg mx-auto md:mx-0 animate-fadeIn delay-100'>
                Đầu Đọc Thẻ Thông Minh Nhỏ Gọn, Dễ Sử Dụng, Hiệu Quả Chi Phí Cho PC, Hỗ Trợ Thẻ ISO
                7816 Class A, B và C.
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
                  src={imgProduct_HN}
                  alt='CheckID-HN212 Terminal'
                  className='relative w-full max-w-md lg:max-w-lg xl:max-w-xl drop-shadow-2xl transform hover:scale-105 transition-transform duration-700'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='max-w-7xl mx-auto'>
        <section>
          <div className='my-4 text-center'>
            <DescribeTitle title='Hình ảnh sản phẩm' />
          </div>
          <div className='m-auto w-5/6'>
            <SlideShowSwiper slidesShow={SlideProduct} />
          </div>
          <ProductDescription data={DataProductDescription} />
        </section>
        <section>
          <FeaturesSection dataFeatures={Features} />
        </section>
        <section>
          <HanelView />
        </section>
        <section>
          <DataGet />
        </section>
        <section>
          <div>
            <h2 className='base_title'>Thông số kỹ thuật thiết bị Đọc</h2>
          </div>
          <TableSpecification data={DeviceParameters} />
          <div>
            <h2 className='base_title'>Thông số kỹ thuật thiết bị Camera</h2>
          </div>
          <TableSpecification data={DeviceParametersCamera} />
        </section>
        <section>
          <OtherProduct title='Xem thêm sản phẩm khác' />
        </section>
      </div>

      <section>
        <CallToAction />
      </section>
    </div>
  )
}
export default CheckIdHn
