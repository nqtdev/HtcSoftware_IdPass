import {Outlet} from 'react-router-dom'
import LayoutHeader from './layoutHeader'
import LayoutFooter from './layoutFooter'
import ButtonCall from './buttons/ButtonCall'
import ButtonMail from './buttons/ButtonMail'
import ScrollToTop from './buttons/ScrollToTop'
import OnTop from './OnTop'

const Layout = () => {
  return (
    <>
      <OnTop />
      <header>
        <LayoutHeader />
      </header>
      <body className='bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
        <Outlet />
        <ButtonCall phoneNumber='0848565555' />
        <ButtonMail emailAddress='kinhdoanh@htcsoftware.vn' />
        <ScrollToTop />
      </body>
      <footer>
        <LayoutFooter />
      </footer>
    </>
  )
}

export default Layout
