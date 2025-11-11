import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react'

// eslint-disable-next-line react/prop-types
const DescribeTitle = ({title, description}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    })
  }, [])
  return (
    <div className='text-center mb-16' data-aos='zoom-in' data-aos-duration='1000'>
      <h2 className='text-2xl md:text-3xl font-semibold font-mulish text-gray-800 mb-4'>{title}</h2>
      <div className='w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6'></div>
      <p className='text-gray-600 max-w-2xl mx-auto'>{description}</p>
    </div>
  )
}

export default DescribeTitle
