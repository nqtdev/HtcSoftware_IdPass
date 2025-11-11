import PropTypes from 'prop-types'
import Call from 'assets/icon_buttons/Call.webp'
import 'animate.css'
import {useState} from 'react'

const ButtonCall = ({phoneNumber}) => {
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    // Kích hoạt hiệu ứng khi click
    setIsClicked(true)

    // Reset trạng thái và chuyển hướng sau khi hiệu ứng kết thúc
    setTimeout(() => {
      // Reset trạng thái trước
      setIsClicked(false)
      // Sau đó chuyển hướng
      setTimeout(() => {
        window.open(`tel:${phoneNumber}`, '_self')
      }, 100)
    }, 800)
  }

  return (
    <div
      className={`
        button_call
        animate__animated

        right-[-1.7rem]
        lg:right-0
        ${isClicked ? 'animate__zoomOutRight' : 'animate__zoomInRight'}
      `}
      onClick={handleClick}
    >
      <img className='w-[60%] xl:w-[70%]' src={Call} alt='Call phone' />
    </div>
  )
}

ButtonCall.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
}

export default ButtonCall
