import Field from './field'
import PosterPage from './poster'
import Procedure from './procedure'

const IdPassPage = () => {
  return (
    <div className='container m-auto'>
      <section>
        <PosterPage />
      </section>
      <section>
        <div className='m-10'>
          <h2 className='base_title '>Giải pháp tự động hoá thủ tục kiểm tra thông tin</h2>
        </div>
        <Procedure />
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
