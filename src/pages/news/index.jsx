import {useNavigate} from 'react-router-dom'
import {Card} from 'antd'
import dataNews from './dataNews'
import bannerMohinh from 'assets/page_breakingnews/bannerNews.webp'

// Hàm tạo slug từ tiêu đề
const createSlug = title => {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

const News = () => {
  const navigate = useNavigate()

  return (
    <>
      <div
        className='w-full h-56 flex justify-center items-center bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${bannerMohinh})`}}
      >
        {/* <div className="w-full h-56 flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-300"> */}
        <h2
          className='text-white text-center text-4xl font-mulish text-sh'
          style={{textShadow: '2px 2px 6px rgba(0,0,0,1)'}}
        >
          Tin Tức Mới
        </h2>
      </div>

      <div className='p-2 flex gap-4 flex-wrap justify-center'>
        {dataNews.map(modal => (
          <Card
            key={modal.id}
            hoverable
            className='border border-blue-300 hover:border-blue-600 m-auto cursor-pointer w-full md:w-80'
            cover={
              <img
                alt={modal.title || 'Tin tức'}
                src={modal.image}
                className='w-full h-40 object-cover'
              />
            }
            onClick={() => navigate(`/tin-tuc/${createSlug(modal.title ?? '')}`)}
          >
            <Card.Meta title={<span className='block truncate'>{modal.title}</span>} />
          </Card>
        ))}
      </div>
    </>
  )
}

export default News
