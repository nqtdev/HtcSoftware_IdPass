import {Tabs} from 'antd'
import SlideShowSwiper from 'components/SlideShowSwiper'
import {SlideProductCam, SlideProductNoCam, SlideProduct} from './data/SlideProduct'
const onChange = key => {
  console.log(key)
}
const items = [
  {
    key: '1',
    label: <p className='font-mulish '>Có Camera</p>,
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductCam} />
      </>
    ),
  },
  {
    key: '2',
    label: <p className='font-mulish '>Không Camera</p>,

    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductNoCam} />
      </>
    ),
  },
  {
    key: '3',
    label: <p className='font-mulish '>So Sánh</p>,

    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProduct} />
      </>
    ),
  },
]
const TabShowDevice = () => <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
export default TabShowDevice
