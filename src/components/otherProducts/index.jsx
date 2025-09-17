import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'

import DescribeTitle from 'layout/describeTitle/describeTitle'
import ShowProducts from './ShowProducts'

const DEFAULT_BREAKPOINTS = {
  320: {slidesPerView: 1, spaceBetween: 16},
  640: {slidesPerView: 2, spaceBetween: 20},
  1024: {slidesPerView: 3, spaceBetween: 24},
  1280: {slidesPerView: 4, spaceBetween: 28},
}

function SlideSwiper({
  slides = ShowProducts,
  title = 'Xem thêm các sản phẩm khác',
  description = '',
  swiperConfig = {freeMode: true},
}) {
  return (
    <section className='relative overflow-x-hidden py-16 px-4' aria-label={title}>
      {/* Decor blobs: nằm TRƯỚC để không đè nội dung, và được clip bởi overflow-hidden của section */}
      <div className='pointer-events-none absolute inset-0 overflow-hidden -z-10'>
        <div className='absolute left-0 -bottom-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob' />
        <div className='absolute right-10 -bottom-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-2000' />
      </div>

      <div className='relative mx-auto w-full max-w-7xl'>
        <DescribeTitle title={title} description={description} />

        <div className='relative' data-aos='fade-up'>
          <Swiper
            breakpoints={DEFAULT_BREAKPOINTS}
            freeMode={swiperConfig.freeMode ?? true}
            className='pb-12'
          >
            {slides.map((item, idx) => (
              <SwiperSlide key={idx}>
                <NavLink to={item.linkProduct} className='group block h-full'>
                  <article className='flex h-full flex-col rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl '>
                    {/* Image */}
                    <div className='relative overflow-hidden'>
                      <div className='flex justify-center items-center'>
                        <img
                          src={item.slideContent}
                          alt={item.slideName}
                          loading='lazy'
                          className='h-1/2 w-1/2  object-cover transition-transform duration-500 group-hover:scale-105'
                        />
                      </div>
                      <div className='pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-t from-black/20 to-transparent' />
                    </div>

                    {/* Content */}
                    <div className='flex flex-1 flex-col p-6'>
                      <h4 className='text-xl font-bold text-gray-800 line-clamp-1 transition-colors duration-200 group-hover:text-blue-600'>
                        {item.slideName}
                      </h4>
                      <p className='mt-3 flex-grow text-gray-600 line-clamp-2'>
                        {item.slideDescription}
                      </p>
                    </div>
                  </article>
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Keyframes riêng, ngắn gọn */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  )
}

SlideSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      slideContent: PropTypes.string.isRequired,
      slideName: PropTypes.string.isRequired,
      slideDescription: PropTypes.string.isRequired,
      linkProduct: PropTypes.string.isRequired,
    }),
  ),
  title: PropTypes.string,
  description: PropTypes.string,
  swiperConfig: PropTypes.shape({
    freeMode: PropTypes.bool,
  }),
}

export default SlideSwiper
