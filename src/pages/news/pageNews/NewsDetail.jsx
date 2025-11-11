/* eslint-disable react/no-unescaped-entities */
import {useParams} from 'react-router-dom'
import checkbox from 'assets/page_modal/checkbox.svg'
import data from '../pageNews/dataNewsDetail'
import ErrorPage from 'pages/errorPage'

// ✅ Tạo slug từ title để khớp với param :id
const createSlug = (str = '') =>
  String(str)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')

const NewsDetail = () => {
  const {id} = useParams()

  // Tìm bản ghi theo slug
  const pageData = data.find(item => createSlug(item.title) === id)

  if (!pageData) return <ErrorPage />

  // Lấy phần tử đầu của A/B/D (vì dữ liệu là mảng sectionsA/B/D)
  const secA = pageData.sectionsA?.[0]
  const secB = pageData.sectionsB?.[0]
  const secD = pageData.sectionsD?.[0]

  return (
    <div className='max-w-5xl mx-auto px-4 py-8'>
      <div>
        <h1 className='text-4xl font-bold text-center font-lora'>{pageData.title}</h1>

        {/* Section A */}
        {secA && (
          <section className='my-6'>
            {secA.title && (
              <h3 className='my-2 font-roboto  ' style={{textIndent: '.5rem'}}>
                {secA.title}
              </h3>
            )}
            {secA.descriptions && (
              <p className='font-roboto text-lg text-gray-800' style={{textIndent: '.5rem'}}>
                {secA.descriptions}
              </p>
            )}
            {pageData.imageA && (
              <img className='rounded-lg w-full mt-3' src={pageData.imageA} alt={pageData.title} />
            )}
          </section>
        )}

        {/* Section B */}
        {(pageData.imageB || secB?.descriptions) && (
          <section className='my-6'>
            {pageData.imageB && (
              <img className='rounded-lg w-full mb-3' src={pageData.imageB} alt={pageData.title} />
            )}
            {secB?.descriptions && (
              <p className='font-roboto text-lg text-gray-800 ' style={{textIndent: '.5rem'}}>
                {secB.descriptions}
              </p>
            )}
          </section>
        )}

        {/* Section C (có thể có descriptions + items[]) */}
        {(pageData.imageC || pageData.sectionsC?.length) && (
          <section className='my-6'>
            {pageData.imageC && (
              <img className='rounded-lg w-full mb-3' src={pageData.imageC} alt={pageData.title} />
            )}

            {pageData.sectionsC?.map((block, index) => (
              <div key={index} className='mt-5'>
                {block.descriptions && (
                  <p className='font-roboto text-lg text-gray-800' style={{textIndent: '.5rem'}}>
                    {block.descriptions}
                  </p>
                )}
                {Array.isArray(block.items) && block.items.length > 0 && (
                  <ul className='list-none mt-2'>
                    {block.items.map((item, idx) => (
                      <li key={idx} className='flex items-center mt-2'>
                        <img className='w-5 h-5 mr-2' src={checkbox} alt='Check' />
                        <p className='text-lg font-mulish text-gray-800'>{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Section D */}
        {secD?.descriptions && (
          <section className='my-6'>
            <p className='font-roboto text-gray-800 text-lg'>{secD.descriptions}</p>
          </section>
        )}

        {/* Nguồn */}
        <div>
          <i className='text-[.5rem]'>Nguồn "Internet"</i>
        </div>
      </div>
    </div>
  )
}

export default NewsDetail
