import Field from './field'
import PosterPage from './Poster'
import Procedure from './procedure'
import Certificate from './Certificate'
import Feature from './Feature'
const IdPassPage = () => {
  return (
    <div className='container m-auto'>
      <section>
        <PosterPage />
      </section>
      <section>
        <Feature />
      </section>
      <section className='h-[38rem]'>
        <div className='m-10'>
          <h2 className='base_title '>Giải pháp tự động hoá thủ tục kiểm tra thông tin</h2>
        </div>
        <Procedure />
      </section>
      <section>
        <div className='m-10'>
          <h2 className='base_title'>Giấy chứng nhận</h2>
        </div>
        <Certificate />
      </section>
      <section>
        <div className='m-10'>
          <h2 className='base_title'>Ứng dụng giải pháp trong các lĩnh vực</h2>
        </div>
        <Field />
      </section>
    </div>
  )
}

export default IdPassPage
