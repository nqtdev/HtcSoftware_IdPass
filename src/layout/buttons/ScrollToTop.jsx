// @ Nút chức năng cuộn lên đầu trang
import {useEffect, useState} from 'react'
import Scroll from 'assets/icon_buttons/scrollToTop.webp'
import 'animate.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    // Kích hoạt hiệu ứng khi click
    setIsClicked(true)

    // Cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

    // Sau khi hiệu ứng kết thúc, reset trạng thái
    setTimeout(() => {
      setIsClicked(false)
      setIsVisible(false)
    }, 1000) // Thời gian phù hợp với hiệu ứng backOutUp
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div
      className='button_scroll right-[-1.7rem]
        lg:right-0'
    >
      {isVisible && (
        <div
          onClick={scrollToTop}
          className={`
            animate__animated
            ${isClicked ? 'animate__backOutUp' : 'animate__zoomInRight'}
          `}
        >
          <img className='w-[60%] xl:w-[70%]' src={Scroll} alt='Scroll to top' />
        </div>
      )}
    </div>
  )
}

export default ScrollToTop
