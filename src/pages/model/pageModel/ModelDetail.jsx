/* eslint-disable react/no-unescaped-entities */
import {useParams} from 'react-router-dom'
import checkbox from 'assets/page_modal/checkbox.svg'
import data from 'pages/model/pageModel/dataModelDetail'
import ListNews from 'pages/news/listNews'
import ErrorPage from 'pages/errorPage'
import bannerMohinh from 'assets/page_modal/bannerMohinh.webp'
// ✅ Tạo hàm chuyển title thành slug
const createSlug = str =>
  str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const ModelDetail = () => {
  const {id} = useParams() // ✅ Tìm item trong danh sách có slug trùng id từ URL

  const pageData = data.find(item => createSlug(item.title) === id)

  if (!pageData) {
    return <ErrorPage />
  }

  return (
    <div>
      <div
        className='w-full h-56 flex justify-center items-center bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${bannerMohinh})`}}
      >
        {/* <h2 className='text-white text-center text-2xl xl:px-20 font-mulish'>{pageData.title}</h2> */}
        <h2
          className='text-white text-center text-2xl font-mulish text-sh'
          style={{textShadow: '2px 2px 6px rgba(0,0,0,1)'}}
        >
          {pageData.title}
        </h2>
      </div>
      <div className='xl:grid xl:grid-cols-10 xxl:px-64 xl:px-32 px-5 gap-5 mt-5'>
        <div className='col-span-7'>
          {pageData.image && (
            <img className='rounded-lg w-full' src={pageData.image} alt={pageData.title} />
          )}
          {pageData.sections.map((section, index) => (
            <div key={index} className='mt-5'>
              <h4 className='text-xl font-mulish text-gray-700'>{section.title}</h4>
              <ul className='list-none mt-2'>
                {section.items.map((item, idx) => (
                  <li key={idx} className='flex items-center mt-2'>
                    <img className='w-5 h-5 mr-2' src={checkbox} alt='Check' />
                    <p className='text-lg font-mulish text-gray-800'>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <i className='text-[.5rem]'>
              Nguồn " Trung Tâm Dịch Vụ Chuyển Đổi Số - Chi Nhánh Tổng Công Ty Gtel (Gtel CDS)"
            </i>
          </div>
        </div>
        <div className='col-span-3'>
          <ListNews />
        </div>
      </div>
    </div>
  )
}

export default ModelDetail
