import {createBrowserRouter} from 'react-router-dom'
import ErrorPage from 'pages/errorPage'
import Layout from 'layout/index'
import Model from 'pages/model'
import ModelDetail from 'pages/model/pageModel/ModelDetail'
import Introduction from 'pages/NQ_57'
import CheckIdSr from 'pages/products/checkID-SR'
import CheckIdEt from 'pages/products/checkID-ET100'
import CheckIdRt from 'pages/products/checkID-R301'
import CheckIdHn from 'pages/products/checkID-HN212'
import IdPassPage from 'pages/IdPass/index'

const productsRoutes = [
  {path: 'checkID-SR', element: <CheckIdSr />},
  {path: 'checkID-ET100', element: <CheckIdEt />},
  {path: 'checkID-R301', element: <CheckIdRt />},
  {path: 'checkID-HN212', element: <CheckIdHn />},
]
const modelsRoutes = [
  {path: '', element: <Model />}, // Trang danh sách mô hình
  {path: ':id', element: <ModelDetail />}, // Trang chi tiết mô hình
]
const Routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <IdPassPage />,
      },
      {path: 'nghiquyet-57', element: <Introduction />},
      {path: 'products', children: productsRoutes},
      {path: 'mo-hinh', children: modelsRoutes},
    ],
  },
  {path: '*', element: <ErrorPage />},
])

export default Routers
