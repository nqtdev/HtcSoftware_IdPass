/* eslint-disable react/prop-types */
const ProductDescription = ({data}) => {
  return (
    <section>
      <div className='max-w-4xl mx-auto  overflow-hidden'>
        <div className='p-8 md:p-12'>
          <div className='space-y-4'>
            {data.map((item, index) => (
              <div key={index} className='flex items-start'>
                <div className='flex-shrink-0 mt-1'>
                  <svg
                    className='w-5 h-5 text-green-500'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='ml-3 text-gray-700 font-mulish text-lg'>{item.descriptions}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDescription
