import {useState} from 'react'
import {Dropdown, Navbar, Button} from 'flowbite-react'
import {NavLink} from 'react-router-dom'
import logo from 'assets/logo/logo_sw.png'
import Apphtc from '/checkid_client_installer.zip'

const LayoutHeader = () => {
  // Quản lý trạng thái mở/đóng của menu
  const [isOpen, setIsOpen] = useState(false)

  // Hàm để toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Hàm để đóng menu
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className='mb-20'>
      <header className='fixed left-0 top-0 !z-10 w-full !bg-white'>
        <Navbar fluid className='m-auto !p-1 xl:w-[85%] xxl:w-3/4'>
          {/* Logo HTC Software */}
          <Navbar.Brand to='/' as={NavLink}>
            <img src={logo} className='w-1/2' alt='HTC Software Logo' />
          </Navbar.Brand>

          {/* Nút Toggle Tùy Chỉnh cho Mobile */}
          <button
            className='lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none'
            onClick={toggleMenu}
            aria-label='Toggle navigation'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='36'
              height='36'
              fill='rgba(42,122,200,1)'
            >
              <path
                d={
                  isOpen
                    ? 'M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z'
                    : 'M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z'
                }
              ></path>
            </svg>
          </button>

          {/* Menu Collapse */}
          <Navbar.Collapse className={`${isOpen ? 'block' : 'hidden'} lg:flex`}>
            {/* Trang Chủ */}
            <Button
              gradientDuoTone='purpleToBlue'
              className='mb-1 md:mb-0'
              active
              to='/'
              as={NavLink}
              onClick={closeMenu} // Đóng menu khi nhấp vào
            >
              Trang Chủ
            </Button>
            {/* Thiết Bị */}
            <Button gradientDuoTone='purpleToBlue' className='mb-1 md:mb-0'>
              <Dropdown
                arrowIcon={true}
                label='Thiết Bị'
                inline
                placement='bottom'
                className='absolute mt-2'
              >
                {/* CheckID-SR */}
                <Dropdown.Item
                  as={NavLink}
                  to='/products/check-id-sr'
                  onClick={closeMenu} // Đóng menu khi nhấp vào
                >
                  <Button gradientDuoTone='purpleToBlue' className='w-[12rem]'>
                    CheckID-SR
                  </Button>
                </Dropdown.Item>

                {/* CheckID-ET100 */}
                <Dropdown.Item
                  as={NavLink}
                  to='/products/check-id-et100'
                  onClick={closeMenu} // Đóng menu khi nhấp vào
                >
                  <Button gradientDuoTone='purpleToBlue' className='w-[12rem]'>
                    CheckID-ET100
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to='/products/check-id-r301'
                  onClick={closeMenu} // Đóng menu khi nhấp vào
                >
                  <Button gradientDuoTone='purpleToBlue' className='w-[12rem]'>
                    CheckID-R301
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item
                  as={NavLink}
                  to='/products/check-id-hn212'
                  onClick={closeMenu} // Đóng menu khi nhấp vào
                >
                  <Button gradientDuoTone='purpleToBlue' className='w-[12rem]'>
                    CheckID-HN202
                  </Button>
                </Dropdown.Item>

                {/* Meta eYe */}
                <Dropdown.Item
                  as={NavLink}
                  to='/products/meta-eye'
                  onClick={closeMenu} // Đóng menu khi nhấp vào
                >
                  <Button gradientDuoTone='purpleToBlue' className='w-[12rem]'>
                    Meta eYe
                  </Button>
                </Dropdown.Item>
                <Dropdown.Divider />
                {/* Download Plugin */}
                <Dropdown.Item onClick={closeMenu}>
                  {' '}
                  {/* Đóng menu khi nhấp vào */}
                  <a href={Apphtc}>
                    <Button gradientDuoTone='purpleToBlue' className='flex w-[12rem]'>
                      <div className='flex items-center'>
                        Download Plugin{' '}
                        <svg
                          className='ml-2 h-6 w-6 text-white'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01'
                          />
                        </svg>
                      </div>
                    </Button>
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </Button>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  )
}

export default LayoutHeader
