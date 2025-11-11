// @ Hiển thị logo của đối tác
import ImgTech from 'assets/page_RarEkycPlatform/partner/tech.svg'
import ImgBIDV from 'assets/page_RarEkycPlatform/partner/bidv.svg'
import ImgViettin from 'assets/page_RarEkycPlatform/partner/vietinbank.svg'
import ImgMB from 'assets/page_RarEkycPlatform/partner/mb.svg'
import ImgVietcom from 'assets/page_RarEkycPlatform/partner/vietcombank.svg'
import ImgACB from 'assets/page_RarEkycPlatform/partner/acb.svg'
import ImgTp from 'assets/page_RarEkycPlatform/partner/tp.svg'
import ImgCMC from 'assets/page_RarEkycPlatform/partner/cmc.svg'
import ImgViettel from 'assets/page_RarEkycPlatform/partner/viettel.svg'
import ImgVNPT from 'assets/page_RarEkycPlatform/partner/vnpt.svg'
import ImgCredita from 'assets/page_RarEkycPlatform/partner/credita.svg'
import ImgDatanest from 'assets/page_RarEkycPlatform/partner/datanest.svg'
import Imgfptsoftware from 'assets/page_RarEkycPlatform/partner/fptsoftware.svg'
import Imggtel from 'assets/page_RarEkycPlatform/partner/gtel.svg'
import ImgHDbank from 'assets/page_RarEkycPlatform/partner/hdbank.svg'
import ImgKalapa from 'assets/page_RarEkycPlatform/partner/kalapa.svg'
import ImgMobiphonIt from 'assets/page_RarEkycPlatform/partner/mobilephoneit.svg'
import ImgMomo from 'assets/page_RarEkycPlatform/partner/momo.svg'
import ImgNcb from 'assets/page_RarEkycPlatform/partner/ncb.svg'
import ImgSmartpay from 'assets/page_RarEkycPlatform/partner/smartpay.svg'
import DescribeTitle from 'layout/DescribeTitle'

const PartnerLogo = () => {
  const LogoSvg = [
    ImgTech,
    ImgBIDV,
    ImgViettin,
    ImgMB,
    ImgVietcom,
    ImgACB,
    ImgTp,
    ImgCMC,
    ImgViettel,
    ImgVNPT,
    ImgCredita,
    ImgDatanest,
    Imgfptsoftware,
    Imggtel,
    ImgHDbank,
    ImgKalapa,
    ImgMobiphonIt,
    ImgMomo,
    ImgNcb,
    ImgSmartpay,
  ]

  const chunkArray = (arr, chunkSize) => {
    const result = []
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize))
    }
    return result
  }

  const LogoPartner = chunkArray(LogoSvg, 9)

  return (
    <>
      <DescribeTitle title='Đối tác của chúng tôi' description='' />
      {LogoPartner.map((row, rowIndex) => (
        <div key={rowIndex} className='partner_scroll'>
          {row.map((logo, index) => {
            // Lấy tên hình ảnh từ đường dẫn
            const imageName = logo.split('/').pop().split('.')[0]

            return (
              <div className='partner_logo' key={index}>
                <img
                  className='px-4 py-3'
                  src={logo}
                  alt={`Logo ${imageName}`} // Thêm "Logo" trước tên hình ảnh
                />
              </div>
            )
          })}
        </div>
      ))}
    </>
  )
}

export default PartnerLogo
