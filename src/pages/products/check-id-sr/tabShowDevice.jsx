import {Tabs} from 'antd'
import SlideShowSwiper from 'components/SlideShowSwiper'
import {SlideProductCam, SlideProductNoCam, SlideProduct} from './data/SlideProduct'
const onChange = key => {
  console.log(key)
}
const items = [
  {
    key: '1',
    label: 'Có Camera',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductCam} />
      </>
    ),
  },
  {
    key: '2',
    label: 'Không Camera',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProductNoCam} />
      </>
    ),
  },
  {
    key: '3',
    label: 'So sánh',
    children: (
      <>
        <SlideShowSwiper slidesShow={SlideProduct} />
      </>
    ),
  },
]
const TabShowDevice = () => <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
export default TabShowDevice
