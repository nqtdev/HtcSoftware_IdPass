import Dkth from 'assets/homePage/CNTG.webp'
import DkthZ from 'assets/homePage/CNTG.webp'
import ModalImage from 'react-modal-image'
const Certificate = () => {
  const CertificateImg = [{small: Dkth, large: DkthZ, alt: 'ảnh đăng ký quyền tác giả'}]

  return (
    <section className='m-auto md:w-3/4'>
      <div className='mb-5 flex flex-col sm:flex-row'>
        {CertificateImg.map((image, index) => (
          <div key={index} className='m-auto max-w-xs overflow-hidden pt-3'>
            <ModalImage
              loading='lazy'
              hideDownload={true}
              hideZoom={true}
              className='thumbnail h-auto w-full cursor-pointer'
              small={image.small}
              large={image.large}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificate
