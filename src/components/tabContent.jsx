// import {useState} from 'react'
import {Tabs, ConfigProvider} from 'antd'
import DataCarousel from '../data/dataCarousel'

const ViewProduct = () => {
  const nameTab = [
    'Thiết bị đầu đọc thẻ có Camera',
    'Thiết bị đầu đọc thẻ không có Camera',
    'So sánh 2 thiết bị',
  ]
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: '#0099FF',
          fontSize: 16,
        },
        components: {
          Carousel: {
            dotActiveWidth: 32,
            dotHeight: 5,
            dotWidth: 18,
          },
        },
      }}
    >
      <div className='h-[70vh]'>
        <Tabs
          defaultActiveKey='1'
          defaultValue='center'
          size='large'
          items={nameTab.map((name, i) => {
            const id = String(i + 1)
            return {
              label: `${name}`,
              key: id,
              children: (
                <div>
                  {DataCarousel[i].map((content, index) => (
                    <div key={index}>
                      <div className='py-5'>
                        <img className='w-1/3 m-auto' src={content} alt='' />
                      </div>
                    </div>
                  ))}
                </div>
              ),
            }
          })}
        />
      </div>
    </ConfigProvider>
  )
}
export default ViewProduct
