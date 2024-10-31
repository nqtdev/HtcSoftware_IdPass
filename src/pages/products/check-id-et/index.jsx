import TableSpecification from 'components/TableSpecification'
import SlideShowSwiper from 'components/SlideShowSwiper'

import DeviceParameters from './data/DeviceParameters'
import SlideProduct from './data/SlideProduct'

import SmartCard from 'assets/image_products/icon_function/smartCard.png'
import RichPort from 'assets/image_products/icon_function/RichPort.png'
import NFC from 'assets/image_products/icon_function/NFC.png'
import Camera from 'assets/image_products/icon_function/Camera.png'
import Fingerprint from 'assets/image_products/icon_function/Fingerprint.png'
import MRZ from 'assets/image_products/icon_function/MRZ.png'
import imgProduct_ET from 'assets/image_products/check-id-et100/banner.png'
import ButtonContact from 'layout/buttons/ButtonContact'
import OtherProduct from 'components/otherProducts'

const CheckIdEt = () => {
  return (
    <>
      {/* Banner sản phẩm  */}
      <section>
        <div className='md: bg-bg-img-product p-3 md:flex md:p-7'>
          <div className='m-auto text-center md:w-1/2'>
            <div className='mb-[5%]'>
              <h1 className='xxl:text-[6rem] font-roboto text-[2.8rem] font-black text-white xl:text-[5rem]'>
                Terminal eID <br />
                (CheckID-ET100)
              </h1>
            </div>
            <div>
              <i className='font-roboto text-white xl:text-2xl'>
                Đọc Máy Quét Thẻ Hộ Chiếu Điện Tử ICAO ID Card
              </i>
            </div>
          </div>
          <div className='md:w-1/2'>
            <img className='m-auto' src={imgProduct_ET} alt='imgProduct_ET' />
          </div>
        </div>
      </section>
      {/* Hình ảnh sản phẩm  */}
      <section>
        <div>
          <h2 className='base_title'>Hình ảnh sản phẩm</h2>
        </div>
        <div className='m-auto w-3/4'>
          <SlideShowSwiper slidesShow={SlideProduct} />
        </div>
      </section>

      {/* Chi tiết sản phẩm  */}
      <section>
        <div className='m-auto grid gap-3 p-5 lg:w-2/3 lg:grid-cols-2'>
          <div>
            <div className='mb-3 ml-2'>
              <i className='text-center text-3xl font-bold text-main-colors'>CheckID-ET100</i>
            </div>

            <p className='font-roboto text-main-colors'>
              CheckID-ET100 được thiết kế để đáp ứng nhu cầu bảo mật cao mà không làm giảm sự tiện
              lợi. Thiết bị này có cổng USB loại A female, cho phép kết nối với máy tính. Nó hỗ trợ
              nhiều loại cảm biến sinh trắc học như SecuGen, SupreMa, ZKTeco và Morpho. Việc chọn
              cảm biến sinh trắc học nên dựa trên yêu cầu của khách hàng.
            </p>
          </div>
          <div className='mt-3'>
            <div className='mb-2'>
              <u className='text-xl font-semibold text-main-colors'>Chức năng:</u>
            </div>
            <ul className='grid grid-cols-3 gap-2 md:grid-cols-6'>
              <li className='m-auto cursor-pointer'>
                <img
                  className='mb-1 cursor-pointer rounded-md border p-1'
                  src={SmartCard}
                  alt='SmartCard'
                />
                <p className='text-center font-roboto text-sm text-main-colors'>SmartCard</p>
              </li>
              <li className='m-auto cursor-pointer'>
                <img
                  className='mb-1 cursor-pointer rounded-md border p-1'
                  src={RichPort}
                  alt='RichPort'
                />
                <p className='text-center font-roboto text-sm text-main-colors'>RichPorts</p>
              </li>
              <li className='m-auto cursor-pointer'>
                <img className='mb-1 cursor-pointer rounded-md border p-1' src={NFC} alt='NFC' />
                <p className='text-center font-roboto text-sm text-main-colors'>NFC</p>
              </li>
              <li className='m-auto cursor-pointer'>
                <img
                  className='mb-1 cursor-pointer rounded-md border p-1'
                  src={Camera}
                  alt='Camera'
                />
                <p className='text-center font-roboto text-sm text-main-colors'>Camera</p>
              </li>
              <li className='m-auto cursor-pointer'>
                <img
                  className='mb-1 cursor-pointer rounded-md border p-1'
                  src={Fingerprint}
                  alt='Fingerprint'
                />
                <p className='text-center font-roboto text-sm text-main-colors'>Fingerprint</p>
              </li>
              <li className='m-auto cursor-pointer'>
                <img className='mb-1 cursor-pointer rounded-md border p-1' src={MRZ} alt='MRZ' />
                <p className='text-center font-roboto text-sm text-main-colors'>MRZ</p>
              </li>
            </ul>
            <ButtonContact />
          </div>
        </div>
      </section>
      {/* Thông số kỹ thuật thiết bị  */}
      <section>
        <div>
          <h2 className='base_title'>Thông số kỹ thuật thiết bị</h2>
        </div>
        <TableSpecification data={DeviceParameters} />
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <OtherProduct />
      </section>
    </>
  )
}
export default CheckIdEt
