import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import useCheckMobile from 'hooks/useCheckMobile'
import iconFeatureRead from 'assets/page_HomePage/iconFeature/4.svg'
import iconFeatureCheck from 'assets/page_HomePage/iconFeature/1.svg'
import iconFeatureVerify from 'assets/page_HomePage/iconFeature/3.svg'
import iconFeatureCompare from 'assets/page_HomePage/iconFeature/2.svg'
import iconFeatureCompareCard from 'assets/page_HomePage/iconFeature/5.svg'
import iconFeatureCompareAvatar from 'assets/page_HomePage/iconFeature/6.svg'

const Feature = () => {
  const isMobile = useCheckMobile()

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      // Tắt AOS trên màn < 768px để tránh transform gây tràn ngang
      disable: () => window.matchMedia('(max-width: 767px)').matches,
    })
    // Re-calc khi xoay màn hình
    const onResize = () => AOS.refreshHard()
    window.addEventListener('orientationchange', onResize)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('orientationchange', onResize)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const features = [
    {
      icon: iconFeatureRead,
      title: 'Đọc thông tin từ chip',
      description:
        'Đọc và giải mã toàn bộ thông tin dữ liệu lưu trong chip điện tử trên thẻ CCCD gắn chip theo chuẩn ICAO qua NFC.',
      color: 'from-blue-500 to-cyan-500',
      delay: 100,
    },
    {
      icon: iconFeatureCheck,
      title: 'Kiểm tra toàn vẹn dữ liệu',
      description: 'Kiểm tra tính đầy đủ và toàn vẹn của dữ liệu lưu trữ trong chip điện tử.',
      color: 'from-purple-500 to-pink-500',
      delay: 200,
    },
    {
      icon: iconFeatureVerify,
      title: 'Chứng thực chữ ký số',
      description: 'Chứng thực chữ ký số trong chip điện tử là do Bộ Công An ký số.',
      color: 'from-amber-500 to-orange-500',
      delay: 300,
    },
    {
      icon: iconFeatureCompare,
      title: 'Đối chiếu thông tin',
      description:
        'Đối chiếu thông tin nhân thân trong chip điện tử với thông tin in trên thẻ, mã QR và vùng MRZ.',
      color: 'from-emerald-500 to-teal-500',
      delay: 400,
    },
    {
      icon: iconFeatureCompareCard,
      title: 'Đối sánh ảnh chân dung',
      description:
        'Đối sánh ảnh chân dung khách hàng với ảnh chân dung lưu trữ trong chip điện tử.',
      color: 'from-violet-500 to-fuchsia-500',
      delay: 500,
    },
    {
      icon: iconFeatureCompareAvatar,
      title: 'So sánh ảnh thẻ và chip',
      description:
        'Đối sánh ảnh chân dung in trên mặt thẻ với ảnh chân dung lưu trong chip điện tử.',
      color: 'from-rose-500 to-red-500',
      delay: 600,
    },
  ]

  return (
    <div className=' relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 overflow-x-hidden'>
      {/* Features Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {features.map((feature, index) => {
          // Chỉ dùng AOS khi không phải mobile
          const aosType = !isMobile ? (index % 2 === 0 ? 'fade-right' : 'fade-left') : undefined

          return (
            <div
              key={index}
              {...(aosType ? {'data-aos': aosType} : {'data-aos': 'fade-up'})}
              // Trên mobile bỏ delay để tránh giật & stacking
              data-aos-delay={isMobile ? 0 : feature.delay}
              className='group relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl md:hover:-translate-y-2'
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className='p-6'>
                <div
                  className={`mb-6 w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center p-3 shadow-md`}
                >
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className='w-10 h-10 max-w-full max-h-full'
                  />
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>{feature.title}</h3>
                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                <div
                  className={`mt-6 w-12 h-1 bg-gradient-to-r ${feature.color} rounded-full transform origin-left transition-transform duration-300 group-hover:scale-x-125`}
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Decorative Elements */}
      <div className='absolute inset-x-0 top-0 -z-10 pointer-events-none select-none overflow-x-hidden'>
        <div className='absolute top-0 left-1/4 w-72 h-72 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob' />
        <div className='absolute top-0 right-1/4 w-72 h-72 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-2000' />
        <div className='absolute -bottom-10 left-1/3 w-72 h-72 rounded-full mix-blend-multiply blur-xl opacity-30 animate-blob animation-delay-4000' />
      </div>
    </div>
  )
}

export default Feature
