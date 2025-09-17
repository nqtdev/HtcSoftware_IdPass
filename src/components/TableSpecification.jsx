import React from 'react'
import PropTypes from 'prop-types'
import DescribeTitle from 'layout/describeTitle/describeTitle'

const TableSpecification = ({data}) => {
  const formatSpecification = spec => {
    if (!spec) return ''
    return spec.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        {index < spec.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <section className='py-8 md:py-12 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-8 md:mb-12'>
          <div className='mb-12'>
            <DescribeTitle title={'Thông số kỹ thuật'} />
          </div>
        </div>
        {/* Desktop Table (hidden on mobile) */}
        <div className='hidden md:block bg-white rounded-xl md:rounded-2xl border border-gray-100 overflow-hidden backdrop-blur-sm'>
          <div className='overflow-x-auto'>
            <table className='min-w-full'>
              <thead>
                <tr className='bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800'>
                  <th className='px-4 md:px-8 py-4 md:py-6 text-left border-r border-slate-600'>
                    <div className='flex items-center space-x-2 md:space-x-3'>
                      <div className='w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full'></div>
                      <span className='text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                        Mục
                      </span>
                    </div>
                  </th>
                  <th className='px-4 md:px-8 py-4 md:py-6 text-left border-r border-slate-600'>
                    <div className='flex items-center space-x-2 md:space-x-3'>
                      <div className='w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full'></div>
                      <span className='text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                        Mô tả kỹ thuật
                      </span>
                    </div>
                  </th>
                  <th className='px-4 md:px-8 py-4 md:py-6 text-left border-r border-slate-600'>
                    <div className='flex items-center space-x-2 md:space-x-3'>
                      <div className='w-2 h-2 md:w-3 md:h-3 bg-purple-400 rounded-full'></div>
                      <span className='text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                        Mục
                      </span>
                    </div>
                  </th>
                  <th className='px-4 md:px-8 py-4 md:py-6 text-left'>
                    <div className='flex items-center space-x-2 md:space-x-3'>
                      <div className='w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full'></div>
                      <span className='text-xs md:text-sm font-medium text-white uppercase tracking-wider'>
                        Mô tả kỹ thuật
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className='divide-y divide-gray-100'>
                {data.map((row, index) => (
                  <tr
                    key={row.id || index}
                    className={`group hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className='px-4 md:px-8 py-4 md:py-6 border-r border-gray-200 group-hover:border-blue-200'>
                      <div className='flex items-start space-x-2 md:space-x-4'>
                        <div className='flex-shrink-0 mt-1'>
                          <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full group-hover:bg-blue-600 transition-colors'></div>
                        </div>
                        <div className='min-w-0 flex-1'>
                          <p className='text-xs md:text-sm font-semibold text-gray-800 group-hover:text-blue-900 transition-colors leading-relaxed'>
                            {row.itemA}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className='px-4 md:px-8 py-4 md:py-6 border-r border-gray-200 group-hover:border-blue-200'>
                      <div className='text-xs md:text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed'>
                        <div className='space-y-1'>{formatSpecification(row.specificationA)}</div>
                      </div>
                    </td>

                    <td className='px-4 md:px-8 py-4 md:py-6 border-r border-gray-200 group-hover:border-blue-200'>
                      <div className='flex items-start space-x-2 md:space-x-4'>
                        <div className='flex-shrink-0 mt-1'>
                          <div className='w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full group-hover:bg-indigo-600 transition-colors'></div>
                        </div>
                        <div className='min-w-0 flex-1'>
                          <p className='text-xs md:text-sm font-semibold text-gray-800 group-hover:text-indigo-900 transition-colors leading-relaxed'>
                            {row.itemB}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className='px-4 md:px-8 py-4 md:py-6'>
                      <div className='text-xs md:text-sm text-gray-600 group-hover:text-gray-700 leading-relaxed'>
                        <div className='space-y-1'>{formatSpecification(row.specificationB)}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards (shown only on mobile) */}
        <div className='md:hidden space-y-4'>
          {data.map((row, index) => (
            <div
              key={row.id || index}
              className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden'
            >
              <div className='divide-y divide-gray-100'>
                {/* Item A */}
                <div className='p-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 mt-0.5'>
                      <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                    </div>
                    <div>
                      <h4 className='text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1'>
                        {row.itemA}
                      </h4>
                      <p className='text-xs text-gray-600'>
                        {formatSpecification(row.specificationA)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Item B */}
                <div className='p-4'>
                  <div className='flex items-start space-x-3'>
                    <div className='flex-shrink-0 mt-0.5'>
                      <div className='w-2 h-2 bg-indigo-500 rounded-full'></div>
                    </div>
                    <div>
                      <h4 className='text-xs font-semibold text-gray-800 uppercase tracking-wider mb-1'>
                        {row.itemB}
                      </h4>
                      <p className='text-xs text-gray-600'>
                        {formatSpecification(row.specificationB)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

TableSpecification.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      itemA: PropTypes.string.isRequired,
      specificationA: PropTypes.string.isRequired,
      itemB: PropTypes.string.isRequired,
      specificationB: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default TableSpecification
