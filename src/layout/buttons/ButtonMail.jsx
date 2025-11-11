import PropTypes from 'prop-types'
import Mail from 'assets/icon_buttons/seenMail.webp'
import 'animate.css'
import {useState} from 'react'

const ButtonMail = ({emailAddress}) => {
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
        window.location.href = `mailto:${emailAddress}`
      }, 100)
    }, 800)
  }

  return (
    <div
      className='button_mail mb-4 right-[-1.7rem]
        lg:right-0'
    >
      <a
        href={`mailto:${emailAddress}`}
        onClick={handleClick}
        className={`
          inline-block
          animate__animated
          ${isClicked ? 'animate__fadeOutTopRight' : 'animate__zoomInRight'}
        `}
      >
        <img className='w-[60%] xl:w-[70%]' src={Mail} alt='Send email' />
      </a>
    </div>
  )
}

ButtonMail.propTypes = {
  emailAddress: PropTypes.string.isRequired,
}

export default ButtonMail
