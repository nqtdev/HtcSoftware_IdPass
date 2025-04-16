import TableSpecification from 'components/TableSpecification'

import DeviceParameters from './data/DeviceParameters'

import SmartCard from 'assets/image_products/icon_function/smartCard.png'
import NFC from 'assets/image_products/icon_function/NFC.png'
import Camera from 'assets/image_products/icon_function/Camera.png'
import MRZ from 'assets/image_products/icon_function/MRZ.png'
import imgProduct_SR from 'assets/image_products/check-id-sr/banner.webp'
import TabShowDevice from './tabShowDevice'
import ButtonContact from 'layout/buttons/ButtonContact'
import OtherProduct from 'components/otherProducts'
import MobileIDView from 'components/softwareInterface/mobileid'
import DataGetSR from 'components/softwareInterface/DataGetSR'

const CheckIdSr = () => {
  return (
    <div className='App'>
      {/* Banner sản phẩm  */}
      <section>
        <div className='md: bg-bg-img-product p-3 md:flex md:p-7'>
          <div className='m-auto text-center md:w-1/2'>
            <div className='mb-[5%]'>
              <h1 className='xxl:text-[7rem] font-roboto text-5xl font-black text-white xl:text-[5rem]'>
                ID Card Reader <br />
                (CheckID-SR)
              </h1>
            </div>
            <div>
              <i className='font-roboto text-white xl:text-2xl'>
                Đầu đọc/quét thẻ ID cho kiosk tự phục vụ
              </i>
            </div>
          </div>
          <div className='md:w-1/2'>
            <img className='m-auto' src={imgProduct_SR} alt='imgProduct_SR' />
          </div>
        </div>
      </section>
      {/* Xem thêm hình ảnh sản phẩm  */}
      <section className='lg:h-[41rem]'>
        <div>
          <h2 className='base_title'>Hình ảnh sản phẩm</h2>
        </div>
        <div className='m-auto w-3/4'>
          <TabShowDevice />
        </div>
      </section>
      {/* Chi tiết sản phẩm  */}
      <section>
        <div className='m-auto grid gap-3 p-3 lg:w-2/3 lg:grid-cols-2'>
          <div>
            <div className='mb-3 ml-2'>
              <i className='text-center text-3xl font-bold text-main-colors'>
                ID Card Reader/Scanner
              </i>
            </div>

            <p className='text-left font-roboto text-main-colors'>
              Hưởng lợi từ việc nhập dữ liệu và xác minh chính xác <br />
              Thiết kế OEM cho cổng ABC và các Kiosk tự phục vụ <br />
              Thiết kế trực quan dễ sử dụng <br /> Kiểm tra tự động hành khách, vận hành 24/7 <br />{' '}
              Đọc và xác minh mọi loại thẻ bao gồm cả tài liệu điện tử du lịch
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
                <img className='mb-1 cursor-pointer rounded-md border p-1' src={MRZ} alt='MRZ' />
                <p className='text-center font-roboto text-sm text-main-colors'>MRZ</p>
              </li>
            </ul>
            <ButtonContact />
          </div>
        </div>
      </section>
      <section>
        <MobileIDView />
      </section>
      <section>
        <DataGetSR />
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
    </div>
  )
}
export default CheckIdSr
