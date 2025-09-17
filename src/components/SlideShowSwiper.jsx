import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import PropTypes from 'prop-types'

const SlideShowSwiper = ({slidesShow}) => {
  return (
    <div className='relative max-w-6xl mx-auto px-4 py-8'>
      <div className='relative group'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `<span class="${className} bg-gradient-to-r from-blue-400 to-indigo-500"></span>`
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          className=' overflow-hidden '
        >
          {slidesShow.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='flex items-center justify-center  p-4'>
                <img
                  src={slide.slideContent}
                  alt={`Hình ảnh sản phẩm ${index + 1}`}
                  className='w-full h-auto max-h-[500px] object-contain transition-transform duration-500 hover:scale-105'
                  loading='lazy'
                />
              </div>
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
