import {Mail, Phone, MapPin, Clock, Facebook, Linkedin, Youtube} from 'lucide-react'
import LogoHtcSw from 'assets/logo/logo_sw.webp'

const LayoutFooter = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-gray-950 text-gray-100'>
      {/* Main grid */}
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand / intro */}
          <section aria-labelledby='ft-brand'>
            <h3 id='ft-brand' className='sr-only'>
              Giới thiệu
            </h3>
            <img src={LogoHtcSw} alt='HTC Software' loading='lazy' className='h-auto w-40 m-auto' />
            <p className='mt-4 text-sm text-center text-gray-400'>
              Công ty Cổ phần Giải pháp Phần mềm HTC — đối tác tin cậy về nền tảng eKYC, định danh
              và tích hợp hệ thống cho doanh nghiệp Việt Nam.
            </p>
          </section>

          {/* Products / Services */}
          <section aria-labelledby='ft-products'>
            <h3 id='ft-products' className='text-sm font-semibold tracking-wide text-white'>
              Giải pháp & Dịch vụ
            </h3>
            <ul className='mt-4 space-y-3 text-sm'>
              <li>
                <a href='#top' className='text-gray-300 hover:text-white'>
                  Nền tảng eKYC
                </a>
              </li>
              <li>
                <a href='#top' className='text-gray-300 hover:text-white'>
                  Xác thực sinh trắc học
                </a>
              </li>
              <li>
                <a href='#top' className='text-gray-300 hover:text-white'>
                  SSO & Quản trị danh tính
                </a>
              </li>
              <li>
                <a href='#top' className='text-gray-300 hover:text-white'>
                  Kết nối & Chia sẻ dữ liệu
                </a>
              </li>
              <li>
                <a href='#top' className='text-gray-300 hover:text-white'>
                  Tư vấn tích hợp hệ thống
                </a>
              </li>
              <li>
                <a href='#top' className='text-gray-300 hover:text-white'>
                  Phát triển phần mềm theo yêu cầu
                </a>
              </li>
            </ul>

            {/* Work hours */}
            <div className='mt-6 rounded-xl border border-gray-800 bg-gray-900/40 p-4'>
              <div className='flex items-start'>
                <Clock className='mt-0.5 h-5 w-5 text-gray-300' />
                <div className='ml-3 text-sm'>
                  <p className='text-gray-200'>Giờ làm việc</p>
                  <p className='text-gray-400'>Thứ 2 – Thứ 6: 08:30 – 17:30</p>
                  <p className='mt-1 text-gray-500'>Hỗ trợ theo hợp đồng dịch vụ</p>
                </div>
              </div>
            </div>
          </section>

          {/* Resources / Policies */}
          <section aria-labelledby='ft-resources'>
            <h3 id='ft-resources' className='text-sm font-semibold tracking-wide text-white'>
              Tài nguyên & Chính sách
            </h3>
            <div className='mt-4 grid grid-cols-2 gap-4 text-sm'>
              <ul className='space-y-3'>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Về chúng tôi
                  </a>
                </li>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Blog & Tin tức
                  </a>
                </li>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Tài liệu kỹ thuật
                  </a>
                </li>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Tuyển dụng
                  </a>
                </li>
              </ul>
              <ul className='space-y-3'>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Điều khoản sử dụng
                  </a>
                </li>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    Hỗ trợ & Liên hệ
                  </a>
                </li>
                <li>
                  <a href='#top' className='text-gray-300 hover:text-white'>
                    SLA dịch vụ
                  </a>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact / Offices */}
          <section aria-labelledby='ft-contact'>
            <h3 id='ft-contact' className='text-sm font-semibold tracking-wide text-white'>
              Liên hệ & Địa chỉ
            </h3>

            <ul className='mt-4 space-y-4 text-sm'>
              <li className='flex items-start'>
                <Mail className='mt-0.5 h-5 w-5 text-gray-300' />
                <a
                  href='mailto:kinhdoanh@htcsoftware.vn'
                  className='ml-3 text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded'
                >
                  kinhdoanh@htcsoftware.vn
                </a>
              </li>
              <li className='flex items-start'>
                <Phone className='mt-0.5 h-5 w-5 text-gray-300' />
                <a
                  href='tel:0848565555'
                  className='ml-3 text-gray-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded'
                >
                  084.856.5555
                </a>
              </li>
              <li>
                <p className='text-xs uppercase tracking-wide text-gray-500'>Văn phòng giao dịch</p>
                <div className='mt-2 flex'>
                  <MapPin className='mt-0.5 h-5 w-5 text-gray-300' />
                  <address className='ml-3 not-italic text-gray-300'>
                    Tầng 4, Tòa Monaco, Ngách 6 ngõ 118 Nguyễn Khánh Toàn, Phường Nghĩa Đô, TP. Hà
                    Nội
                  </address>
                </div>
              </li>
              <li>
                <p className='text-xs uppercase tracking-wide text-gray-500'>Trụ sở chính</p>
                <div className='mt-2 flex'>
                  <MapPin className='mt-0.5 h-5 w-5 text-gray-300' />
                  <address className='ml-3 not-italic text-gray-300'>
                    Số 15, Ngõ 29 phố Khương Hạ, Phường Khương Đình, TP. Hà Nội
                  </address>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div className='mt-6'>
              <p className='text-xs uppercase tracking-wide text-gray-500'>Kết nối</p>
              <div className='mt-2 flex gap-3'>
                <a
                  href='#top'
                  aria-label='Facebook'
                  className='rounded-lg p-2 ring-1 ring-gray-800 hover:bg-gray-900 hover:text-white'
                >
                  <Facebook className='h-5 w-5' />
                </a>
                <a
                  href='#top'
                  aria-label='LinkedIn'
                  className='rounded-lg p-2 ring-1 ring-gray-800 hover:bg-gray-900 hover:text-white'
                >
                  <Linkedin className='h-5 w-5' />
                </a>
                <a
                  href='#top'
                  aria-label='YouTube'
                  className='rounded-lg p-2 ring-1 ring-gray-800 hover:bg-gray-900 hover:text-white'
                >
                  <Youtube className='h-5 w-5' />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Divider */}
        <hr className='mt-12 border-gray-800' />

        {/* Legal bar */}
        <div className='flex flex-col items-center justify-between gap-4 py-6 text-sm text-gray-400 md:flex-row'>
          <p>© {year} Công ty Cổ phần Giải pháp Phần mềm HTC. Mã số DN: 0103925078</p>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
            <a href='#top' className='hover:text-white'>
              Bảo mật
            </a>
            <span className='text-gray-700'>|</span>
            <a href='#top' className='hover:text-white'>
              Điều khoản
            </a>
            <span className='text-gray-700'>|</span>
            <a href='#top' className='hover:text-white'>
              Lên đầu trang
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter
