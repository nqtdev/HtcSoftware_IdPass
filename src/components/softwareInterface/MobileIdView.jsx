import checkid from 'assets/image_products/softwareInterface/checkid.png'
import DescribeTitle from 'layout/DescribeTitle'

const MobileIDView = () => {
  return (
    <>
      <div>
        <div>
          <DescribeTitle title={'Giao diện sử dụng phần mềm'} />
        </div>
        <img className='w-4/5 xl:w-3/4 m-auto' src={checkid} alt='giao diện sử dụng phần mềm' />
      </div>
    </>
  )
}
export default MobileIDView
