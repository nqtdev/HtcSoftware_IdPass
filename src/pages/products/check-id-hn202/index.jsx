import TableSpecification from 'components/TableSpecification'

import {DeviceParameters, DeviceParametersCamera} from './data/DeviceParameters'

import SlideProduct from './data/SlideProduct'
import SmartCard from 'assets/image_products/icon_function/smartCard.png'
import NFC from 'assets/image_products/icon_function/NFC.png'
import RickPorts from 'assets/image_products/icon_function/RichPort.png'
import Camera from 'assets/image_products/icon_function/Camera.png'

import imgProduct_HN from 'assets/image_products/check-id-212/banner.png'
import SlideShowSwiper from 'components/SlideShowSwiper'
import ButtonContact from 'layout/buttons/ButtonContact'
import OtherProduct from 'components/otherProducts'
import HanelView from 'components/softwareInterface/hanel'
import DataGet from 'components/softwareInterface/DataGet'
const CheckIdHn = () => {
  return (
    <div className='App'>
      {/* Banner sản phẩm  */}
      <section>
        <div className='md: bg-bg-img-product p-3 md:flex md:p-7'>
          <div className='m-auto text-center md:w-1/2'>
            <div className='mb-[5%]'>
              <h1 className='xxl:text-[5rem] font-roboto text-5xl font-black text-white xl:text-[4rem]'>
                CCID Smartcard Reader <br />
                (HN-212)
              </h1>
            </div>
            <div>
              {/* <i className='font-roboto text-white xl:text-2xl'>
                Đầu Đọc Thẻ Thông Minh Nhỏ Gọn, Dễ Sử Dụng, Hiệu Quả Chi Phí Cho PC, Hỗ Trợ Thẻ ISO
                7816 Class A, B và C.
              </i> */}
            </div>
          </div>
          <div className='md:w-1/2'>
            <img className='m-auto' src={imgProduct_HN} alt='imgProduct_HN' />
          </div>
        </div>
      </section>
      {/* Xem thêm hình ảnh sản phẩm  */}
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
        <div className='m-auto grid gap-3 p-3 lg:w-2/3 lg:grid-cols-2'>
          <div>
            <div className='mb-3 ml-2'>
              <i className='text-center text-3xl font-bold text-main-colors'>
                CCID Smartcard Reader
              </i>
            </div>

            <p className='text-left font-roboto text-main-colors'>
              - CheckID-HN212 đã đạt kết quả thử nghiệm QCVN 55:2023/BTTT; QCVN 96:2025/BTTT. <br />{' '}
              - Đạt khả năng chịu nhiệt theo TCVN 7699-2-2:2021; TCVN 4255:2008; <br /> - Đạt khả
              năng chống chạm vào bộ phận mang điện IEC 60529:2001; khả năng chống xâm nhập của nước
              ip41. <br /> - Đạt được yêu cầu kỹ thuật và các tiêu chuẩn, quy chuẩn Việt Nam theo
              quyết định số 1091/QD-BTTT ký ngày 01.07.2024. <br /> - Đạt được yêu cầu dán tem của
              Trung tâm RAR-C06-BCA
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
                <img
                  className='mb-1 cursor-pointer rounded-md border p-1'
                  src={RickPorts}
                  alt='RickPorts'
                />
                <p className='text-center font-roboto text-sm text-main-colors'>RickPorts</p>
              </li>
            </ul>
            <ButtonContact />
          </div>
        </div>
      </section>
      {/* Thông số kỹ thuật thiết bị  */}
      <section>
        <HanelView />
      </section>
      <section>
        <DataGet />
      </section>
      <section>
        <div>
          <h2 className='base_title'>Thông số kỹ thuật thiết bị</h2>
        </div>
        <TableSpecification data={DeviceParameters} />
        <div>
          <h2 className='base_title'>Thông số kỹ thuật thiết bị Camera</h2>
        </div>
        <TableSpecification data={DeviceParametersCamera} />
      </section>
      {/* Xem thêm sản phẩm */}
      <section>
        <OtherProduct />
      </section>
    </div>
  )
}
export default CheckIdHn
