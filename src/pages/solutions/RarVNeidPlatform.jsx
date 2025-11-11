import Banner from 'assets/page_RarVNeidPlatform/EKYC.webp'
import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
import DieuKien from 'assets/page_RarVNeidPlatform/dieukiensudung.webp'
import {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Image} from 'antd'

const RarVNeidPlatform = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    })
  }, [])

  return (
    <div className='overflow-hidden'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4'>
        <div className='absolute top-0 left-0 w-full h-full overflow-hidden'>
          <div className='absolute top-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute top-1/4 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className='absolute bottom-0 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob'></div>
        </div>

        <div className='container mx-auto max-w-7xl relative z-10'>
          <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
            <div
              className='w-full lg:w-1/2 text-center lg:text-left'
              data-aos='fade-right'
              data-aos-delay='200'
            >
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6'>
                RAR VNeID Platform
              </h1>
              <p className='text-xl font-roboto md:text-2xl text-gray-700 mb-6'>
                Kết nối xác thực điện tử với trung tâm RAR
              </p>
              <p className='text-gray-600 mb-8 leading-relaxed font-roboto'>
                RAR VNeID Platform là bộ dịch vụ kết nối xác thực điện tử với trung tâm RAR thông
                qua các hình thức:{' '}
                <b className='text-yellow-500 font-roboto'>Đăng nhập bằng VNeID (SSO)</b>,{' '}
                <b className='text-blue-700 font-roboto'>Chia sẻ thông tin từ VNeID (ShareInfo)</b>,{' '}
                <b className='text-green-700 font-roboto'>
                  Xác thực thông tin từ hệ thống Định Danh Và Xác Thực Điện Tử
                </b>
              </p>
            </div>
            <div className='w-full lg:w-1/2' data-aos='fade-left' data-aos-delay='400'>
              <div className='relative items-center justify-center flex'>
                <img
                  src={Banner}
                  alt='RAR VNeid Platform'
                  className='relative w-full max-w-md mx-auto lg:mx-0 transform hover:scale-105 transition-all duration-700 hover:rotate-1'
                  data-aos='zoom-in'
                  data-aos-delay='600'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle
            title='Các dịch vụ RAR đang cung cấp'
            description='Những lợi ích nổi bật khi sử dụng nền tảng xác thực định danh điện tử RAR VNeid'
            data-aos='fade-up'
          />

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {[
              {
                title: 'Dịch vụ đăng nhập bằng VNeID',
                description:
                  'Dịch vụ SSO (Single Sign On) là giải pháp giúp doanh nghiệp xây dựng các hệ thống cho phép người dùng truy cập các dịch vụ kỹ thuật qua tài khoản VNeID. Tính năng định danh và xác thực người sử dụng dịch vụ, tạo ra môi trường đăng nhập an toàn, tiện lợi mà không cần mật khẩu.',
                color: 'from-yellow-400 to-yellow-600',
                icon: '🔐',
              },
              {
                title: 'Dịch vụ chia sẻ thông tin VNeID',
                description:
                  'Chia sẻ thông tin là dịch vụ triển khai thông tin từ Hệ thống định danh và cung cấp cho các doanh nghiệp, tổ chức có thể khai thác các thông tin cá nhân, thông tin tổ chức thông qua API. Việc chia sẻ thông tin cần được sự đồng ý của chủ thể dữ liệu.',
                color: 'from-blue-400 to-blue-600',
                icon: '📤',
              },
              {
                title: 'Dịch vụ xác thực thông tin từ hệ thống Định danh và xác thực điện tử',
                description:
                  'Dịch vụ xác thực thông tin trên Hệ thống định danh điện tử giúp Tổ chức, Cá nhân khai thác nhằm xác thực các trường thông tin của Cá nhân, Tổ chức (trả ra đúng/sai) bao gồm: Họ, chữ đệm và tên khai sinh; Số định danh cá nhân; Ngày tháng năm sinh; Giới tính.',
                color: 'from-green-400 to-green-600',
                icon: '✅',
              },
              {
                title: 'Dịch vụ xác thực sinh trắc khuôn mặt',
                description:
                  'Giải pháp bao gồm chống giả mạo khuôn mặt và xác thực khuôn mặt đạt chứng nhận tiêu chuẩn Quốc tế kết hợp với nguồn dữ liệu từ hệ thống Căn cước của Bộ Công An đảm bảo độ chính xác cao; không cần đọc NFC chip thẻ căn cước trong quá trình xác thực.',
                color: 'from-purple-400 to-purple-600',
                icon: '👤',
              },
              {
                title: 'Dịch vụ xác thực khuôn mặt',
                description:
                  'Dịch vụ xác thực sinh trắc học sử dụng công nghệ AI để giúp các Tổ chức, Doanh nghiệp so khớp khuôn mặt của cá nhân với dữ liệu khuôn mặt trên hệ thống định danh trả ra kết quả điểm số đánh giá trùng làm cơ sở để các TCDN triển khai bổ sung yếu tố xác thực.',
                color: 'from-pink-400 to-pink-600',
                icon: '🤖',
              },
              {
                title: 'Dịch vụ chống giả tạo khuôn mặt - LiveNess Detection',
                description:
                  'Dịch vụ xác thực chống giả mạo khuôn mặt sử dụng công nghệ AI để giúp các tổ chức, doanh nghiệp xác thực ảnh khuôn mặt của cá nhân thu nhận từ thiết bị đầu cuối, ngăn chặn các hành vi giả mạo như sử dụng ảnh 2D, mặt nạ 3D,...',
                color: 'from-red-400 to-red-600',
                icon: '🛡️',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden hover:-translate-y-2'
                data-aos='fade-up'
                data-aos-delay={index * 100}
                data-aos-anchor-placement='top-bottom'
              >
                <div
                  className={`h-2 bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:h-3`}
                ></div>
                <div className='p-6'>
                  <div className='flex items-center gap-3 mb-4'>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-xl`}
                    >
                      {item.icon}
                    </div>
                    <h3 className='text-lg font-roboto font-bold text-gray-800 group-hover:text-gray-900 transition-colors flex-1'>
                      {item.title}
                    </h3>
                  </div>
                  <p className='text-gray-600 font-roboto leading-relaxed text-sm'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className='py-10 px-4 '>
        <div className='container mx-auto max-w-6xl'>
          <DescribeTitle title='Điều kiện kết nối sử dụng dịch vụ' data-aos='fade-up' />
          <div className='mt-12' data-aos='zoom-in' data-aos-delay='300'>
            <Image
              className='w-full m-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-700'
              src={DieuKien}
              alt='Điều kiện kết nối sử dụng dịch vụ'
            />
          </div>
        </div>
      </section>

      {/* HTC Services Section */}
      <section className='py-10 px-4 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className='container mx-auto max-w-6xl'>
          <div className='mt-16'>
            {/* Main Highlight Card */}
            <div
              className='bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden'
              data-aos='fade-up'
            >
              <div className='absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32 animate-pulse'></div>
              <div className='absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24 animate-pulse delay-1000'></div>

              <div className='relative m-auto z-10 max-w-3xl text-center'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 font-roboto'>
                  HTC Software - Đối tác chiến lược triển khai kết nối VNeID Trung tâm RAR
                </h2>
                <p className='text-lg md:text-xl text-blue-100 leading-relaxed font-roboto'>
                  HTC Software tự hào cung cấp dịch vụ tư vấn toàn diện về kết nối với Trung tâm RAR
                  , giúp doanh nghiệp đáp ứng các yêu cầu pháp lý và kỹ thuật trong lĩnh vực xác
                  thực điện tử.
                </p>
              </div>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
              {[
                {
                  icon: '⚖️',
                  title: 'Phân tích pháp lý',
                  description: 'Đánh giá toàn diện hệ thống và hồ sơ năng lực',
                  gradient: 'from-blue-500 to-cyan-500',
                },
                {
                  icon: '🏗️',
                  title: 'Kiến trúc kết nối',
                  description: 'Thiết kế mô hình tích hợp phù hợp',
                  gradient: 'from-green-500 to-emerald-500',
                },
                {
                  icon: '🔧',
                  title: 'Triển khai kỹ thuật',
                  description: 'Hướng dẫn cấu hình HSM và server',
                  gradient: 'from-purple-500 to-fuchsia-500',
                },
                {
                  icon: '🛡️',
                  title: 'An ninh thông tin',
                  description: 'Xây dựng lộ trình bảo mật chi tiết',
                  gradient: 'from-orange-500 to-red-500',
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2'
                  data-aos='flip-left'
                  data-aos-delay={index * 200}
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl m-auto flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className='font-bold text-center font-roboto text-gray-800 text-lg mb-3'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 text-center text-sm font-roboto leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Detailed Features */}
            <div
              className='bg-white rounded-3xl p-8 shadow-xl border border-gray-100'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {[
                  {
                    color: 'from-blue-500 to-purple-500',
                    features: [
                      {
                        title: 'Hỗ trợ tư vấn pháp lý & hồ sơ năng lực',
                        description:
                          'HTC tư vấn bộ hồ sơ đầy đủ theo yêu cầu của RAR: Tờ trình doanh nghiệp, Phương án kỹ thuật và bảo mật, Thông tin hệ thống và hạ tầng',
                      },
                      {
                        title: 'Tham vấn mô hình kết nối',
                        description:
                          'Thiết kế kiến trúc tích hợp Agent Gateway phù hợp với hệ thống sẵn có (VPN, Agent gateway, Máy chủ, HSM,...)',
                      },
                    ],
                  },
                  {
                    color: 'from-green-500 to-emerald-500',
                    features: [
                      {
                        title: 'Triển khai kỹ thuật & phần mềm',
                        description:
                          'Hướng dẫn lựa chọn và cấu hình thiết bị HSM, cung cấp dịch vụ cho thuê hoặc mua thiết bị Server + HSM',
                      },
                      {
                        title: 'Tư vấn an ninh thông tin',
                        description:
                          'Xây dựng lộ trình chi tiết với mốc thời gian, nhân sự, phân tích rủi ro và cấu hình kỹ thuật an toàn hệ thống theo tiêu chuẩn RAR',
                      },
                    ],
                  },
                  {
                    color: 'from-yellow-500 to-orange-500',
                    features: [
                      {
                        title: 'Chuẩn hóa hồ sơ Pentest',
                        description:
                          'Kết nối khách hàng làm việc với các đơn vị Pentest theo khuyến nghị của trung tâm RAR',
                      },
                      {
                        title: 'Ký hợp đồng Pentest/ Điều phối với RAR',
                        description:
                          'Làm việc, giải trình và điều phối phản hồi với Trung tâm RAR thay mặt doanh nghiệp trong suốt quá trình xét duyệt hồ sơ',
                      },
                    ],
                  },
                ].map((column, columnIndex) => (
                  <div key={columnIndex} className='space-y-6'>
                    {column.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className='flex gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group'
                        data-aos='fade-right'
                        data-aos-delay={columnIndex * 100 + featureIndex * 50}
                      >
                        <div
                          className={`flex-shrink-0 w-2 bg-gradient-to-b ${column.color} rounded-full transition-all duration-300 group-hover:w-3`}
                        ></div>
                        <div>
                          <h4 className='font-semibold text-gray-800 font-roboto mb-2 group-hover:text-gray-900 transition-colors'>
                            {feature.title}
                          </h4>
                          <p className='text-gray-600 font-roboto text-sm leading-relaxed'>
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />

      <style>{`
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

        /* Custom scroll animations */
        [data-aos] {
          opacity: 0;
          transition-property: transform, opacity;
        }

        [data-aos].aos-animate {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default RarVNeidPlatform
