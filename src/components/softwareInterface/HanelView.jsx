import hanel from 'assets/image_products/softwareInterface/hanel.png'
import DescribeTitle from 'layout/describeTitle/describeTitle'
const HanelView = () => {
  return (
    <div className='w-full'>
      <div>
        <DescribeTitle title={'Giao diện sử dụng phần mềm'} />
      </div>
      <img className='w-4/5 xl:w-3/4 m-auto' src={hanel} alt='giao diện sử dụng phần mềm' />
    </div>
  )
}

export default HanelView
