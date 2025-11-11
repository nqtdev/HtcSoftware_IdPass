import {Image} from 'antd'
import Gcn from 'assets/page_RarEkycPlatform/certification/giay_chung_nhan.webp'
import GcnZ from 'assets/page_RarEkycPlatform/certification/giay_chung_nhan_zoom.webp'
import Dkth from 'assets/page_RarEkycPlatform/certification/dang_ky_thuong_hieu.webp'
import DkthZ from 'assets/page_RarEkycPlatform/certification/dang_ky_thuong_hieu_zoom.webp'

const Certificate = () => {
  const certificateImages = [
    {
      src: Gcn,
      previewSrc: GcnZ,
      alt: 'Giấy chứng nhận',
    },
    {
      src: Dkth,
      previewSrc: DkthZ,
      alt: 'Đăng ký quyền tác giả',
    },
  ]

  return (
    <section className='mx-auto max-w-4xl px-4 py-8'>
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8'>
        {certificateImages.map((image, index) => (
          <div
            key={index}
            className='group m-auto relative overflow-hidden  transition-all duration-300 hover:shadow-xl'
          >
            <Image
              src={image.src}
              alt={image.alt}
              className='h-auto w-full transform cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105'
              preview={{
                src: image.previewSrc,
              }}
              loading='lazy'
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate
