// @ Xem thêm các hình ảnh khác của sản phẩm
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import PropTypes from 'prop-types'
const SlideShowSwiper = ({slidesShow}) => {
  return (
    <div>
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className='mySwiper'
          // Số item hiển thị theo hàng ngang dựa vào kích cỡ màn hình
        >
          {slidesShow.map((slidesShow, index) => (
            <SwiperSlide key={index}>
              <img className='block w-full lg:w-[35%] m-auto' src={slidesShow.slideContent} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
SlideShowSwiper.propTypes = {
  slidesShow: PropTypes.arrayOf(
    PropTypes.shape({
      slideContent: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default SlideShowSwiper
