// @ Hiển thị logo của đối tác
import ImgSEA from 'assets/page_RarEkycPlatform/partner/seabank.svg'
import ImgTech from 'assets/page_RarEkycPlatform/partner/tech.svg'
import ImgBIDV from 'assets/page_RarEkycPlatform/partner/bidv.svg'
import ImgViettin from 'assets/page_RarEkycPlatform/partner/vietinbank.svg'
import ImgMB from 'assets/page_RarEkycPlatform/partner/mb.svg'
import ImgVietcom from 'assets/page_RarEkycPlatform/partner/vietcombank.svg'
import ImgACB from 'assets/page_RarEkycPlatform/partner/acb.svg'
import ImgTp from 'assets/page_RarEkycPlatform/partner/tp.svg'
import ImgShinhan from 'assets/page_RarEkycPlatform/partner/shinhanbank.svg'
import ImgCMC from 'assets/page_RarEkycPlatform/partner/cmc.svg'
import ImgViettel from 'assets/page_RarEkycPlatform/partner/viettel.svg'
import ImgVNPT from 'assets/page_RarEkycPlatform/partner/vnpt.svg'
import ImgSHB from 'assets/page_RarEkycPlatform/partner/shb.svg'
import ImgCimBank from 'assets/page_RarEkycPlatform/partner/cimbank.svg'
import ImgCredita from 'assets/page_RarEkycPlatform/partner/credita.svg'
import ImgDatanest from 'assets/page_RarEkycPlatform/partner/datanest.svg'
import ImgEximbank from 'assets/page_RarEkycPlatform/partner/eximbank.svg'
import Imgfptsoftware from 'assets/page_RarEkycPlatform/partner/fptsoftware.svg'
import Imggtel from 'assets/page_RarEkycPlatform/partner/gtel.svg'
import ImgHDbank from 'assets/page_RarEkycPlatform/partner/hdbank.svg'
import ImgKalapa from 'assets/page_RarEkycPlatform/partner/kalapa.svg'
import ImgKbank from 'assets/page_RarEkycPlatform/partner/kbank.svg'
import ImgMisa from 'assets/page_RarEkycPlatform/partner/misa.svg'
import ImgMobiphonIt from 'assets/page_RarEkycPlatform/partner/mobilephoneit.svg'
import ImgMomo from 'assets/page_RarEkycPlatform/partner/momo.svg'
import ImgNcb from 'assets/page_RarEkycPlatform/partner/ncb.svg'
import ImgSmartpay from 'assets/page_RarEkycPlatform/partner/smartpay.svg'
import ImgTnex from 'assets/page_RarEkycPlatform/partner/tnex.svg'
import ImgVib from 'assets/page_RarEkycPlatform/partner/vib.svg'
import ImgViettelAI from 'assets/page_RarEkycPlatform/partner/viettelAI.svg'
import ImgVng from 'assets/page_RarEkycPlatform/partner/vng.svg'
import ImgHongngoc from 'assets/page_RarEkycPlatform/partner/hongngoc.svg'
import ImgThucuc from 'assets/page_RarEkycPlatform/partner/thucuc.svg'
import ImgVietcap from 'assets/page_RarEkycPlatform/partner/vietcap.svg'
import ImgVinai from 'assets/page_RarEkycPlatform/partner/vinai.svg'
import ImgVinhome from 'assets/page_RarEkycPlatform/partner/vinhome.svg'
import ImgVinmec from 'assets/page_RarEkycPlatform/partner/vinmec.svg'
import ImgVndirect from 'assets/page_RarEkycPlatform/partner/vndirect.svg'
import DescribeTitle from 'layout/describeTitle/describeTitle'

const PartnerLogo = ({title}) => {
  const LogoSvg = [
    ImgSEA,
    ImgTech,
    ImgBIDV,
    ImgViettin,
    ImgMB,
    ImgVietcom,
    ImgACB,
    ImgTp,
    ImgVinhome,
    ImgShinhan,
    ImgCMC,
    ImgViettel,
    ImgVNPT,
    ImgSHB,
    ImgCimBank,
    ImgCredita,
    ImgDatanest,
    ImgEximbank,
    Imgfptsoftware,
    Imggtel,
    ImgHDbank,
    ImgKalapa,
    ImgKbank,
    ImgMisa,
    ImgHongngoc,
    ImgMobiphonIt,
    ImgMomo,
    ImgVinmec,
    ImgNcb,
    ImgSmartpay,
    ImgTnex,
    ImgVib,
    ImgViettelAI,
    ImgVinai,
    ImgVng,
    ImgVndirect,
    ImgThucuc,
    ImgVietcap,
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
