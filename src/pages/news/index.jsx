import {useNavigate} from 'react-router-dom'
import {Card} from 'antd'
import dataNews from './dataNews'

const BreakingNews = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className='w-full h-56 flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-300'>
        <h2 className='text-white text-center text-5xl font-mulish'>HTC Tin Tức</h2>
      </div>
      <div className='p-2 flex gap-4 flex-wrap justify-center'>
        {dataNews.map(modal => (
          <Card
            key={modal.id}
            hoverable
            className='hover:border-blue-300 m-auto cursor-pointer'
            style={{width: 300}}
            cover={
              <img
                alt={modal.title || 'Mô hình'}
                src={modal.image}
                className='h-40 object-cover '
              />
            }
            onClick={() => navigate(`/mo-hinh/${modal.id}`)}
          >
            <Card.Meta title={modal.title} />
          </Card>
        ))}
      </div>
    </>
  )
}

export default BreakingNews
