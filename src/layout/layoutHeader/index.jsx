import {useState, useEffect} from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import {ChevronDown, Menu, X, Zap, Shield, Home, Layers} from 'lucide-react'

const HeaderWeb = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Đóng menu khi route thay đổi
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = dropdown => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const devices = [
    {name: 'CheckID-SR', href: '/products/checkID-SR', category: 'Thiết bị đọc thẻ'},
    {name: 'CheckID-ET100', href: '/products/checkID-ET100', category: 'Thiết bị đọc thẻ'},
    {name: 'CheckID-R301', href: '/products/checkID-R301', category: 'Thiết bị đọc thẻ'},
    {name: 'CheckID-HN212', href: '/products/checkID-HN212', category: 'Thiết bị đọc thẻ'},
  ]

  const navItems = [
    {name: 'Trang Chủ', href: '/', icon: Home},
    {name: 'NQ 57', href: '/nghiquyet-57', icon: Shield},
    {name: 'Mô Hình', href: '/mo-hinh', icon: Layers},
  ]

  // Active style cho NavLink
  const navLinkStyle = ({isActive}) =>
    isActive ? 'text-purple-600' : 'text-gray-700 hover:text-purple-700'

  return (
    <div className='mb-16'>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10'
            : 'bg-transparent'
        }`}
      >
        {/* <div className='absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-indigo-600/5'></div> */}
        <nav className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            {/* Logo với NavLink */}
            <div className='flex-shrink-0 group'>
              <NavLink to='/' className='flex items-center space-x-3'>
                <div className='relative'>
                  <div className='absolute inset-0 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
                  <img
                    src='/logo_sw.webp'
                    alt='HTC Software Logo'
                    className='relative h-14 w-auto transform group-hover:scale-105 transition-transform duration-300'
                  />
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden lg:flex items-center space-x-1'>
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <NavLink
                    key={index}
                    to={item.href}
                    className={({isActive}) =>
                      `group relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10 ${isActive ? 'text-purple-600' : 'text-gray-700'}`
                    }
                  >
                    <div className='flex items-center space-x-2'>
                      <Icon
                        size={14}
                        className={`transition-colors duration-300 ${navLinkStyle}`}
                      />
                      <span
                        className={`text-sm  font-roboto transition-colors duration-300 ${navLinkStyle}`}
                      >
                        {item.name}
                      </span>
                    </div>
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 ${navLinkStyle({isActive: location.pathname === item.href}) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    ></div>
                  </NavLink>
                )
              })}

              {/* Devices Grid Menu */}
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown('devices')}
                  className='group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-white/10'
                >
                  <Zap
                    size={14}
                    className={`text-gray-600 group-hover:text-purple-600 transition-colors duration-300 ${location.pathname.startsWith('/products') ? 'text-purple-600' : ''}`}
                  />
                  <span
                    className={`text-sm font-roboto transition-colors duration-300 ${location.pathname.startsWith('/products') ? 'text-purple-700' : 'text-gray-700 group-hover:text-purple-700'}`}
                  >
                    Thiết Bị
                  </span>
                  <ChevronDown
                    size={14}
                    className={`text-gray-500 transform transition-all duration-300 ${
                      activeDropdown === 'devices'
                        ? 'rotate-180 text-purple-600'
                        : 'group-hover:text-purple-600'
                    }`}
                  />
                </button>

                {activeDropdown === 'devices' && (
                  <div className='absolute top-full right-0 mt-4 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-3 z-50'>
                    <div className='grid grid-cols-2 gap-3'>
                      {devices.map((item, index) => (
                        <NavLink
                          key={index}
                          to={item.href}
                          className={({isActive}) =>
                            `p-3 rounded-xl transition-all duration-300 border ${
                              isActive
                                ? 'bg-gradient-to-br from-purple-50 to-blue-50 border-purple-100'
                                : 'border-transparent hover:border-purple-100 hover:bg-gradient-to-br hover:from-purple-50 hover:to-blue-50'
                            }`
                          }
                        >
                          <div
                            className={`font-roboto transition-colors duration-300 ${
                              location.pathname === item.href
                                ? 'text-purple-700'
                                : 'text-gray-900 group-hover:text-purple-700'
                            } text-sm`}
                          >
                            {item.name}
                          </div>
                          <div className='text-xs text-gray-500 mt-1'>{item.category}</div>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Mobile Menu Button */}
            <div className='lg:hidden'>
              <button
                onClick={toggleMenu}
                className={`relative p-3 rounded-full transition-all duration-300 ${
                  isOpen
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-md'
                }`}
                aria-label='Toggle navigation'
              >
                <div className='relative'>{isOpen ? <X size={20} /> : <Menu size={20} />}</div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className='lg:hidden absolute top-full left-0 right-0 mt-2 mx-4'>
              <div className='bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6'>
                <div className='space-y-4'>
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <NavLink
                        key={index}
                        to={item.href}
                        className={({isActive}) =>
                          `group flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 ${
                            isActive
                              ? 'bg-gradient-to-r from-purple-50 to-blue-50'
                              : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                          }`
                        }
                      >
                        <Icon
                          size={18}
                          className={`transition-colors duration-300 ${
                            location.pathname === item.href
                              ? 'text-purple-600'
                              : 'text-gray-600 group-hover:text-purple-600'
                          }`}
                        />
                        <span
                          className={`font-medium transition-colors duration-300 ${
                            location.pathname === item.href
                              ? 'text-purple-700'
                              : 'text-gray-700 group-hover:text-purple-700'
                          }`}
                        >
                          {item.name}
                        </span>
                      </NavLink>
                    )
                  })}

                  {/* Mobile Devices */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('devices')}
                      className='w-full flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300'
                    >
                      <div className='flex items-center space-x-3'>
                        <Zap
                          size={18}
                          className={`${
                            location.pathname.startsWith('/products')
                              ? 'text-purple-600'
                              : 'text-gray-600'
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            location.pathname.startsWith('/products')
                              ? 'text-purple-700'
                              : 'text-gray-700'
                          }`}
                        >
                          Thiết Bị
                        </span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-300 ${
                          activeDropdown === 'devices' ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {activeDropdown === 'devices' && (
                      <div className='mt-2 ml-6 space-y-2'>
                        {devices.map((item, index) => (
                          <NavLink
                            key={index}
                            to={item.href}
                            className={({isActive}) =>
                              `block p-2 text-sm transition-colors duration-300 ${
                                isActive ? 'text-purple-600' : 'text-gray-600 hover:text-purple-600'
                              }`
                            }
                          >
                            {item.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  )
}

export default HeaderWeb
