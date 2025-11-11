import Banner from 'assets/page_RarEkycPlatform/banner.webp'
import IconNFC from 'assets/page_RarEkycPlatform/section_content/scan_nfc.png'
import IconLiveNess from 'assets/page_RarEkycPlatform/section_content/liveness.png'
import IconConnect from 'assets/page_RarEkycPlatform/section_content/connect.png'
import IconShow from 'assets/page_RarEkycPlatform/section_content/view.png'
import IconNfc from 'assets/page_RarEkycPlatform/section_content_b/icon_nfc.png'
import IconSdk from 'assets/page_RarEkycPlatform/section_content_b/icon_sdk.png'
import IconApi from 'assets/page_RarEkycPlatform/section_content_b/icon_api.png'
import Banner_CCDV from 'assets/page_RarEkycPlatform/section_content_b/banner_section.png'
import PartnerLogo from 'components/rarEkyc/PartnerLogo'
import Certificate from 'components/rarEkyc/Certificate'
// import ButtonContact from 'layout/buttons/ButtonContact'
import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
import OnClound from 'assets/page_RarEkycPlatform/onCloud.webp'
import OnPremises from 'assets/page_RarEkycPlatform/onPremises.webp'
import LogoRar from 'assets/page_RarEkycPlatform/logoRar.webp'
import {Shield, Lock, Key, FileCheck, Cpu} from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

const RarEkycPlatform = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  // Calculate positions for items in a circle
  const getCircularPosition = (index, total, radius) => {
    const angle = (index * 360) / total - 90 // Start from top
    const radian = (angle * Math.PI) / 180
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    }
  }

  const securityFeatures = [
    {
      icon: <Cpu className='h-6 w-6' />,
      title: 'Dữ liệu mã hóa trên Chip',
      description:
        'Dữ liệu (Data Group – DG) lưu trong Chip của CCCD gắn Chip là dữ liệu đã được mã hóa, cần được giải mã để có thể sử dụng.',
    },
    {
      icon: <FileCheck className='h-6 w-6' />,
      title: 'Kiểm tra toàn vẹn dữ liệu',
      description:
        'Dữ liệu trong Chip được kiểm tra đảm bảo toàn vẹn giữa tất cả các DG bằng các thuật toán kiểm tra (PA - Passive Authentication).',
    },
    {
      icon: <Shield className='h-6 w-6' />,
      title: 'Xác thực bởi Bộ Công an',
      description:
        'Dữ liệu trong Chip của CCCD gắn Chip được ký số và chỉ có thể xác thực hợp pháp bởi Bộ Công an.',
    },
    {
      icon: <Lock className='h-6 w-6' />,
      title: 'Bảo vệ chống truy cập trái phép',
      description:
        'Nếu truy cập thẻ sai quy cách, thẻ CCCD gắn Chip tự động bị vô hiệu hóa, phải xin cơ quan Công an cấp lại.',
    },
    {
      icon: <Key className='h-6 w-6' />,
      title: 'Truyền dữ liệu an toàn',
      description:
        'Dữ liệu gửi từ các ứng dụng/SDK để được xác thực đều là dữ liệu mã hóa, không phải dữ liệu có thể đọc được bình thường.',
    },
  ]

  return (
    <div className='overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50/30'>
      {/* Hero Section - Giữ nguyên */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <div className='absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        </div>

        <div className='container mx-auto max-w-6xl relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
            <div
              className='w-full lg:w-1/2 text-center lg:text-left'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 leading-tight'>
                RAR eKYC Platform
              </h1>
              <p className='text-xl md:text-2xl text-gray-700 mb-6 font-medium'>
                Xác thực căn cước công dân gắn chip chính xác{' '}
                <span className='font-bold text-green-600'>100%</span> với cơ sở dữ liệu
                <span className='font-bold text-green-600'> RAR-C06</span> của Bộ Công An
              </p>
              <p className='text-gray-600 font-roboto mb-8 leading-relaxed text-lg'>
                RAR EKYC PLATFORM là hệ thống phần mềm do{' '}
                <b className='text-yellow-500 font-roboto'>
                  Trung tâm nghiên cứu - ứng dụng dữ liệu dân cư và căn cước công dân
                </b>{' '}
                , hợp tác với{' '}
                <b className='text-blue-800 font-roboto'>Công ty cổ phần giải pháp phần mềm HTC</b>{' '}
                xây dựng, cho phép quản lý, cấp phép, kiểm soát và thu phí hoạt động cung cấp dịch
                vụ xác thực thông tin công dân trong chip của thẻ căn cước công dân cho mục đích
                thương mại theo quy định của pháp luật
              </p>
            </div>
            <div className='w-full lg:w-1/2' data-aos='fade-left' data-aos-delay='400'>
              <div className='relative items-center justify-center flex'>
                <img
                  src={Banner}
                  alt='RAR eKYC Platform'
                  className='relative w-full max-w-lg mx-auto lg:mx-0 transform hover:scale-105 transition-transform duration-700'
                  data-aos='zoom-in'
                  data-aos-delay='600'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phần Tính bảo mật dữ liệu - MOBILE + DESKTOP RESPONSIVE */}
      <section className='py-6 px-4 bg-gradient-to-br from-blue-50 to-indigo-50'>
        <div className='container mx-auto max-w-7xl'>
          <DescribeTitle
            title='Tính bảo mật dữ liệu'
            description='Những lợi ích nổi bật khi sử dụng nền tảng xác thực định danh điện tử RAR eKYC Platform'
            dataAos='fade-up'
          />
          {/* ===== Mobile: logo nhỏ + danh sách thẻ dọc ===== */}
          <div className='md:hidden space-y-6'>
            {/* Logo + vòng sáng nhỏ */}
            <div className='flex flex-col items-center mb-2'>
              <div className='relative'>
                <div className='absolute -inset-3 rounded-full border border-blue-200/50 animate-ping opacity-30' />
                <div className='absolute -inset-1 rounded-full border border-indigo-300/60 animate-spin-slow' />
                <div className='relative w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center'>
                  <img
                    src={LogoRar}
                    alt='RAR Logo'
                    className='w-20 h-20 object-contain rounded-xl'
                  />
                </div>
              </div>
            </div>

            {/* List tính năng */}
            {securityFeatures.map((item, idx) => (
              <div
                key={idx}
                className='bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100'
                data-aos='fade-up'
                data-aos-delay={idx * 80}
              >
                <div className='flex items-start gap-3'>
                  <div className='w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0'>
                    {item.icon}
                  </div>
                  <div className='flex-1'>
                    <h3 className='text-[15px] font-roboto font-semibold text-gray-900 mb-1.5'>
                      {item.title}
                    </h3>
                    <p className='text-[13px] leading-relaxed text-gray-600'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ===== Tablet/Desktop: bố cục tròn 360° quanh logo ===== */}
          <div className='relative hidden md:flex items-center justify-center'>
            <div className='relative w-full max-w-5xl aspect-square'>
              {/* Logo trung tâm + vòng ring */}
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                <div className='absolute inset-0 -m-24'>
                  <div className='absolute inset-0 border-4 border-blue-200 rounded-full animate-ping opacity-20'></div>
                </div>
                <div className='absolute inset-0 -m-20'>
                  <div className='absolute inset-0 border-4 border-indigo-300 rounded-full animate-pulse opacity-30'></div>
                </div>
                <div className='absolute inset-0 -m-16'>
                  <div className='absolute inset-0 border-2 border-purple-200 rounded-full animate-spin-slow'></div>
                </div>

                <div className='relative z-20'>
                  <div className='w-40 h-40 rounded-2xl shadow-2xl flex items-center justify-center bg-white p-4'>
                    <img
                      src={LogoRar}
                      alt='RAR Logo'
                      className='rounded-xl w-full h-full object-contain'
                    />
                  </div>
                </div>
              </div>

              {/* Items xếp tròn 360° (giữ code hiện tại) */}
              {securityFeatures.map((item, index) => {
                const radius = 300 // có thể giảm xuống 260 nếu muốn gọn lại
                const pos = getCircularPosition(index, securityFeatures.length, radius)
                return (
                  <div
                    key={index}
                    className='absolute group cursor-pointer'
                    style={{
                      left: `calc(50% + ${pos.x}px)`,
                      top: `calc(50% + ${pos.y}px)`,
                      transform: 'translate(-50%, -50%)',
                      animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`,
                    }}
                    data-aos='fade-up'
                    data-aos-delay={index * 100}
                  >
                    {/* Đường nối về tâm */}
                    <div
                      className='absolute z-0 w-0.5 bg-gradient-to-b from-blue-300 via-indigo-200 to-transparent opacity-20 group-hover:opacity-50 transition-opacity duration-300'
                      style={{
                        height: `${radius}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top center',
                        transform: `rotate(${(index * 360) / securityFeatures.length + 90}deg)`,
                      }}
                    />

                    {/* Card */}
                    <div className='relative z-10 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 w-64 group-hover:scale-110 group-hover:border-blue-300 group-hover:-translate-y-2'>
                      <div className='flex flex-col items-center text-center space-y-3'>
                        <div className='w-14 h-14 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-xl'>
                          {item.icon}
                        </div>
                        <h3 className='text-sm font-bold font-roboto text-gray-900 leading-tight group-hover:text-blue-600 transition-colors'>
                          {item.title}
                        </h3>
                        <p className='text-xs text-gray-600 font-roboto leading-relaxed'>
                          {item.description}
                        </p>
                      </div>
                      <div className='absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse shadow-lg'></div>
                    </div>
                  </div>
                )
              })}

              {/* Chấm trang trí */}
              <div className='absolute top-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-60'></div>
              <div
                className='absolute bottom-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60'
                style={{animationDelay: '0.5s'}}
              ></div>
              <div
                className='absolute top-32 right-16 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60'
                style={{animationDelay: '1s'}}
              ></div>
              <div
                className='absolute bottom-32 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60'
                style={{animationDelay: '1.5s'}}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Thao tác sử dụng */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title='Thao tác 4 bước đơn giản'
            description='Quy trình xác thực nhanh chóng và dễ dàng thực hiện'
            dataAos='fade-up'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: 'Bước 1',
                text: 'Đưa CCCD gắn chip vào thiết bị đọc thẻ chip',
                icon: IconNFC,
                delay: 200,
                color: 'from-blue-500 to-cyan-500',
              },
              {
                step: 'Bước 2',
                text: 'Xác thực khuôn mặt chân dung chủ giấy tờ',
                icon: IconLiveNess,
                delay: 400,
                color: 'from-green-500 to-emerald-500',
              },
              {
                step: 'Bước 3',
                text: 'Xác thực CCCD gắn chip với Bộ Công An',
                icon: IconConnect,
                delay: 600,
                color: 'from-purple-500 to-indigo-500',
              },
              {
                step: 'Bước 4',
                text: 'Gửi kết quả xác thực cho ứng dụng thích hợp',
                icon: IconShow,
                delay: 800,
                color: 'from-orange-500 to-red-500',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center border border-gray-100 relative'
                data-aos='fade-up'
                data-aos-delay={item.delay}
              >
                <div className='absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm'>
                  {index + 1}
                </div>
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <img
                    src={item.icon}
                    alt={item.step}
                    className='w-12 h-12 object-contain filter brightness-0 invert'
                  />
                </div>
                <h4 className='text-xl font-bold font-roboto text-gray-800 mb-4'>{item.step}</h4>
                <p className='text-gray-600 font-roboto leading-relaxed'>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hình thức cung cấp dịch vụ */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title='Hình thức cung cấp dịch vụ'
            description='Đa dạng phương thức tích hợp phù hợp với mọi nhu cầu của doanh nghiệp'
            dataAos='fade-up'
          />

          <div
            className='bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl overflow-hidden shadow-2xl mt-12 group hover:shadow-3xl transition-all duration-500'
            data-aos='fade-up'
          >
            <div className='flex flex-col lg:flex-row'>
              <div className='w-full lg:w-3/5 p-8 md:p-12'>
                <div className='space-y-6'>
                  {[
                    {
                      icon: IconNfc,
                      title: 'Thiết bị đọc thẻ chip',
                      desc: 'Chúng tôi sẵn sàng cung cấp cho quý khách thiết bị đọc thẻ chip chuyên dụng để đọc thông tin trong thẻ căn cước công dân gắn chip',
                    },
                    {
                      icon: IconSdk,
                      title: 'SDK NFC',
                      desc: 'Bộ SDK (IOS, Android) sẵn sàng cung cấp cho quý khách để đọc thông tin căn cước gắn chip qua công nghệ kết nối gần NFC',
                    },
                    {
                      icon: IconApi,
                      title: 'API',
                      desc: 'Quý khách hàng đã có thiết bị đọc thẻ, có thể sử dụng API xác thực thông tin căn cước công dân gắn chip với RAR-C06 của chúng tôi',
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className='flex items-start p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group/item'
                      data-aos='fade-right'
                      data-aos-delay={index * 200}
                    >
                      <div className='flex-shrink-0 w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mr-6 group-hover/item:scale-110 transition-transform duration-300'>
                        <img src={item.icon} alt={item.title} className='w-8 h-8' />
                      </div>
                      <div className='flex-1'>
                        <h5 className='text-xl font-semibold text-white mb-3'>{item.title}</h5>
                        <p className='text-blue-100 leading-relaxed'>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-12'>
                <div className='relative' data-aos='zoom-in' data-aos-delay='600'>
                  <div className='absolute -inset-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-30 blur-xl group-hover:opacity-40 transition-opacity duration-500'></div>
                  <img
                    src={Banner_CCDV}
                    alt='Hình thức cung cấp dịch vụ'
                    className='relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mô hình triển khai */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title='Mô hình triển khai'
            description='Đa dạng phương thức tích hợp phù hợp với mọi nhu cầu của doanh nghiệp'
            dataAos='fade-up'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
            {[
              {
                title: 'Nền tảng được đặt hoàn toàn trong Local của trung tâm RAR',
                description:
                  'Cung cấp dịch vụ xác minh thông tin nhân thân sử dụng thẻ CCCD gắn chip',
                image: OnClound,
                alt: 'Mô hình triển khai trên Cloud',
                delay: 200,
              },
              {
                title: 'Nền tảng được đặt hoàn toàn trong Local LAN của Đối Tác',
                description:
                  'Thực hiện: Xác thực Chip, Kiểm tra toàn vẹn dữ liệu CCCD Chip, Xác thực chữ ký số với BCA - tùy chọn, Giải mã dữ liệu CCCD Chip',
                image: OnPremises,
                alt: 'Mô hình triển khai On-premises',
                delay: 400,
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100'
                data-aos='fade-up'
                data-aos-delay={item.delay}
              >
                <div className='p-8'>
                  <h3 className='text-2xl font-roboto text-center font-semibold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 font-roboto mb-6 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
                <div className='p-4 bg-gray-50'>
                  <img
                    className='w-full rounded-xl transform group-hover:scale-105 transition-transform duration-700'
                    src={item.image}
                    alt={item.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Đối tác */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <div data-aos='fade-up'>
            <PartnerLogo />
          </div>
        </div>
      </section>

      {/* Chứng nhận */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle title='Chứng nhận' description='' dataAos='fade-up' />
          <div className='mt-12' data-aos='fade-up' data-aos-delay='200'>
            <Certificate />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CallToAction />

      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

      `}
      </style>
    </div>
  )
}

export default RarEkycPlatform
