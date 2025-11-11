import CardSwap, {Card} from 'components/reactBits/CardSwap'
import imgProduct_ET from 'assets/image_products/checkID-ET100/banner.png'
import imgProduct_HN from 'assets/image_products/checkID-HN212/banner.png'
import imgProduct_RT from 'assets/image_products/checkID-R301/banner.png'
import imgProduct_SR from 'assets/image_products/checkID-SR/banner.webp'

const PosterProduct = () => {
  return (
    <>
      <CardSwap cardDistance={60} verticalDistance={70} delay={5000} pauseOnHover={false}>
        <Card>
          <div className='px-4 py-2'>
            <span className='font-roboto text-white'>CheckID-ET100 </span>
          </div>
          <img src={imgProduct_ET} alt='' />
        </Card>
        <Card>
          <div className='px-4 py-2'>
            <span className='font-roboto text-white'>CheckID-HN212 </span>
          </div>
          <img src={imgProduct_HN} alt='' />
        </Card>
        <Card>
          <div className='px-4 py-2'>
            <span className='font-roboto text-white'>CheckID-R301 </span>
          </div>
          <img src={imgProduct_RT} alt='' />
        </Card>
        <Card>
          <div className='px-4 py-2'>
            <span className='font-roboto text-white'>CheckID-SR </span>
          </div>
          <img src={imgProduct_SR} alt='' />
        </Card>
      </CardSwap>
    </>
  )
}

export default PosterProduct
