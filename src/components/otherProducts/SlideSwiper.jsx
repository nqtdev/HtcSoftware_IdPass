// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import 'swiper/css/free-mode'
// import PropTypes from 'prop-types'
// import {NavLink} from 'react-router-dom'
// import DescribeTitle from 'layout/describeTitle/describeTitle'
// import ShowProducts from './ShowProducts'
// const SlideSwiper = () => {
//   return (
//     <section className='py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 '>
//       <div className='container mx-auto max-w-7xl '>
//         {/* Tiêu đề section */}
//         <DescribeTitle title={'Xem thêm các sản phẩm khác của chúng tôi'} />

//         {/* Swiper container */}
//         <div className='relative' data-aos='fade-up'>
//           <Swiper
//             breakpoints={{
//               320: {slidesPerView: 1, spaceBetween: 16},
//               640: {slidesPerView: 2, spaceBetween: 20},
//               1024: {slidesPerView: 3, spaceBetween: 24},
//               1280: {slidesPerView: 4, spaceBetween: 28},
//             }}
//             freeMode={true}
//             className='pb-12'
//           >
//             {ShowProducts.map((slide, index) => (
//               <SwiperSlide key={index}>
//                 <NavLink to={slide.linkProduct} className='group block h-full'>
//                   <div className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 h-full flex flex-col border border-gray-100'>
//                     {/* Image container */}
//                     <div className='relative overflow-hidden'>
//                       <div className='aspect-w-4 aspect-h-3 flex items-center justify-center'>
//                         <img
//                           className='w-1/2  object-cover transition-transform duration-700 group-hover:scale-110'
//                           src={slide.slideContent}
//                           alt={slide.slideName}
//                           loading='lazy'
//                         />
//                       </div>
//                       {/* Overlay effect */}
//                       <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
//                     </div>

//                     {/* Content container */}
//                     <div className='p-6 flex-1 flex flex-col'>
//                       <h4 className='text-xl font-bold text-gray-800 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300'>
//                         {slide.slideName}
//                       </h4>
//                       <p className='mt-3 text-gray-600 line-clamp-2 flex-grow'>
//                         {slide.slideDescription}
//                       </p>

//                       {/* CTA button */}
//                       <div className='mt-6 flex items-center justify-between pt-4 border-t border-gray-100'>
//                         <span className='text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300'>
//                           Xem chi tiết
//                         </span>
//                         <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300'>
//                           <svg
//                             className='w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-300'
//                             fill='none'
//                             stroke='currentColor'
//                             viewBox='0 0 24 24'
//                           >
//                             <path
//                               strokeLinecap='round'
//                               strokeLinejoin='round'
//                               strokeWidth='2'
//                               d='M14 5l7 7m0 0l-7 7m7-7H3'
//                             ></path>
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </NavLink>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom navigation buttons */}
//           {/* <div className='swiper-button-prev custom-swiper-prev hidden lg:flex'></div>
//           <div className='swiper-button-next custom-swiper-next hidden lg:flex'></div> */}
//         </div>

//         {/* Decorative elements */}
//         <div className='absolute left-0 -bottom-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob'></div>
//         <div className='absolute right-10 -bottom-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
//       </div>

//       <style>{`
//         @keyframes blob {
//           0% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//           100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }

//         /* Custom swiper navigation */
//         .custom-swiper-prev,
//         .custom-swiper-next {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 48px;
//           height: 48px;
//           background: white;
//           border-radius: 50%;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//           z-index: 10;
//           cursor: pointer;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }

//         .custom-swiper-prev {
//           left: -24px;
//         }

//         .custom-swiper-next {
//           right: -24px;
//         }

//         .custom-swiper-prev:hover,
//         .custom-swiper-next:hover {
//           background: #3b82f6;
//           box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
//         }

//         .custom-swiper-prev::after,
//         .custom-swiper-next::after {
//           font-size: 16px;
//           color: #374151;
//           font-weight: bold;
//         }

//         .custom-swiper-prev:hover::after,
//         .custom-swiper-next:hover::after {
//           color: white;
//         }
//       `}</style>
//     </section>
//   )
// }

// SlideSwiper.propTypes = {
//   slides: PropTypes.arrayOf(
//     PropTypes.shape({
//       slideContent: PropTypes.string.isRequired,
//       slideName: PropTypes.string.isRequired,
//       slideDescription: PropTypes.string.isRequired,
//       linkProduct: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   swiperConfig: PropTypes.shape({
//     spaceBetween: PropTypes.number,
//     pagination: PropTypes.object,
//     freeMode: PropTypes.bool,
//     breakpoints: PropTypes.object,
//   }),
// }

// SlideSwiper.defaultProps = {
//   swiperConfig: {
//     spaceBetween: 20,
//     freeMode: true,
//   },
//   slides: [],
//   title: 'Xem thêm sản phẩm khác',
//   description: '',
// }

// export default SlideSwiper
