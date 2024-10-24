import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import CheckIdSr from 'pages/products/checkId_sr'
import CheckIdEt from 'pages/products/checkId_et'
import MetaEye from 'pages/products/metaEye'
import IdPassPage from 'pages/IdPass'

const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <IdPassPage />,
      },
      {
        path: 'products/checkid-sr',
        element: <CheckIdSr />,
      },
      {
        path: 'products/checkid-et100',
        element: <CheckIdEt />,
      },
      {
        path: 'products/meta-eye',
        element: <MetaEye />,
      },
      {
        path: '/*',
        element: <ErrorPage />,
      },
    ],
  },
])
export default Routers
