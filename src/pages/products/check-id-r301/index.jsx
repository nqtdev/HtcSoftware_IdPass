import TableSpecification from 'components/TableSpecification'

import DeviceParameters from './data/DeviceParameters'

import SlideProduct from './data/SlideProduct'
import SmartCard from 'assets/image_products/icon_function/smartCard.png'
import NFC from 'assets/image_products/icon_function/NFC.png'
import RickPorts from 'assets/image_products/icon_function/RichPort.png'
import imgProduct_RT from 'assets/image_products/check-id-r301/banner.png'
import SlideShowSwiper from 'components/SlideShowSwiper'
import ButtonContact from 'layout/buttons/ButtonContact'
import OtherProduct from 'components/otherProducts'
import MobileIDView from 'components/softwareInterface/mobileid'
import DataGet from 'components/softwareInterface/DataGet'
const CheckIdRt = () => {
  return (
    <div className='App'>
      {/* Banner sản phẩm  */}
      <section>
        <div className='md: bg-bg-img-product p-3 md:flex md:p-7'>
          <div className='m-auto text-center md:w-1/2'>
            <div className='mb-[5%]'>
              <h1 className='xxl:text-[5rem] font-roboto text-5xl font-black text-white xl:text-[4rem]'>
                CCID Smartcard Reader <br />
                (R301-C11)
              </h1>
            </div>
            <div>
              <i className='font-roboto text-white xl:text-2xl'>
                Đầu Đọc Thẻ Thông Minh Nhỏ Gọn, Dễ Sử Dụng, Hiệu Quả Chi Phí Cho PC, Hỗ Trợ Thẻ ISO
                7816 Class A, B và C.
              </i>
            </div>
          </div>
          <div className='md:w-1/2'>
            <img className='m-auto' src={imgProduct_RT} alt='imgProduct_RT' />
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
              R301-C11 phù hợp với khách hàng có quan tâm chủ yếu đến vấn đề an ninh và đáp ứng nhu
              cầu về một giải pháp linh hoạt cho xác thực ID, thương mại điện tử, thanh toán điện
              tử, bảo mật thông tin và kiểm soát truy cập. <br />
              R301-C11 và dòng đầu đọc thẻ thông minh còn lại cung cấp cho mỗi khách hàng một giải
              pháp hoàn chỉnh cho mọi cách sử dụng.
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
      <section>
        <MobileIDView />
      </section>
      <section>
        <DataGet />
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
export default CheckIdRt
