import Field from './components/field'
import PosterPage from './components/Poster'
import Certificate from './components/Certificate'
import Feature from './components/Feature'
import Procedure from './components/Procedure'
import DescribeTitle from 'layout/DescribeTitle'
import CallToAction from 'layout/CallToAction'
import OtherProduct from 'components/otherProducts'
const index = () => {
  return (
    <div className='m-auto'>
      <section>
        <PosterPage />
      </section>
      <div className='max-w-6xl m-auto'>
        <section>
          <OtherProduct title={'Các sản phẩm đọc thẻ của chúng tôi'} />
        </section>
        <section>
          <div className='my-4 text-center'>
            <DescribeTitle title='Tính năng nổi bật của ID Pass' />
          </div>
          <Feature />
        </section>
        <section>
          <div className='my-4 text-center'>
            <DescribeTitle title='Giải pháp tự động hóa thủ tục kiểm tra thông tin' />
          </div>
          <Procedure />
        </section>

        <section>
          <div className='my-4 text-center'>
            <DescribeTitle title='Giấy chứng nhận' />
          </div>
          <Certificate />
        </section>
        <section>
          <div className='my-4 text-center'>
            <DescribeTitle title='Ứng dụng giải pháp trong các lĩnh vụ' />
          </div>
          <Field />
        </section>
      </div>
      <CallToAction />
    </div>
  )
}

export default index
