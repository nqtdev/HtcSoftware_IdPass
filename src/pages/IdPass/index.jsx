import Field from './components/field'
import PosterPage from './components/Poster'
import Procedure from './components/procedure'
import Certificate from './components/Certificate'
import Feature from './components/Feature'
import DescribeTitle from 'layout/describeTitle/describeTitle'
import CallToAction from 'layout/callToAcction'
const IdPassPage = () => {
  return (
    <div className='m-auto'>
      <section>
        <PosterPage />
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
      <CallToAction />
    </div>
  )
}

export default IdPassPage
