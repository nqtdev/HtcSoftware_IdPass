/* eslint-disable react/prop-types */

import DescribeTitle from 'layout/DescribeTitle'
import {useState} from 'react'

const FeaturesSection = ({dataFeatures}) => {
  const [hoveredItem, setHoveredItem] = useState(null)

  const getColorClasses = (color, isHovered) => {
    const colors = {
      indigo: {
        bg: isHovered ? 'bg-indigo-50' : 'bg-white',
        border: isHovered ? 'border-indigo-300' : 'border-gray-200',
        text: 'text-indigo-600',
        shadow: isHovered ? 'shadow-indigo-200' : 'shadow-gray-100',
      },
      cyan: {
        bg: isHovered ? 'bg-cyan-50' : 'bg-white',
        border: isHovered ? 'border-cyan-300' : 'border-gray-200',
        text: 'text-cyan-600',
        shadow: isHovered ? 'shadow-cyan-200' : 'shadow-gray-100',
      },
      emerald: {
        bg: isHovered ? 'bg-emerald-50' : 'bg-white',
        border: isHovered ? 'border-emerald-300' : 'border-gray-200',
        text: 'text-emerald-600',
        shadow: isHovered ? 'shadow-emerald-200' : 'shadow-gray-100',
      },
      amber: {
        bg: isHovered ? 'bg-amber-50' : 'bg-white',
        border: isHovered ? 'border-amber-300' : 'border-gray-200',
        text: 'text-amber-600',
        shadow: isHovered ? 'shadow-amber-200' : 'shadow-gray-100',
      },
      sky: {
        bg: isHovered ? 'bg-sky-50' : 'bg-white',
        border: isHovered ? 'border-sky-300' : 'border-gray-200',
        text: 'text-sky-600',
        shadow: isHovered ? 'shadow-sky-200' : 'shadow-gray-100',
      },
      violet: {
        bg: isHovered ? 'bg-violet-50' : 'bg-white',
        border: isHovered ? 'border-violet-300' : 'border-gray-200',
        text: 'text-violet-600',
        shadow: isHovered ? 'shadow-violet-200' : 'shadow-gray-100',
      },
      rose: {
        bg: isHovered ? 'bg-rose-50' : 'bg-white',
        border: isHovered ? 'border-rose-300' : 'border-gray-200',
        text: 'text-rose-600',
        shadow: isHovered ? 'shadow-rose-200' : 'shadow-gray-100',
      },
    }
    return colors[color]
  }

  return (
    <div className='py-12 px-4 overflow-hidden '>
      <div className='max-w-6xl mx-auto'>
        {/* Header Section */}
        <div className='mb-12'>
          <DescribeTitle title={'Tính năng nổi bật'} />
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
          {dataFeatures.map(feature => {
            const isHovered = hoveredItem === feature.id
            const colorClasses = getColorClasses(feature.color, isHovered)

            return (
              <div
                key={feature.id}
                className='group cursor-pointer'
                onMouseEnter={() => setHoveredItem(feature.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div
                  className={`
                  relative p-6 rounded-2xl border-2 transition-all duration-300 transform
                  ${colorClasses.bg} ${colorClasses.border}
                  shadow-lg hover:shadow-xl hover:scale-105
                  ${isHovered ? 'shadow-2xl' : ''}
                `}
                >
                  {/* Decorative corner */}
                  <div
                    className={`
                    absolute top-0 right-0 w-8 h-8 rounded-bl-2xl rounded-tr-2xl
                    bg-gradient-to-br from-${feature.color}-400 to-${feature.color}-600
                    opacity-20 transition-opacity duration-300
                    ${isHovered ? 'opacity-40' : ''}
                  `}
                  ></div>

                  {/* Icon Container */}
                  <div className='relative mb-4'>
                    <div
                      className={`
                      w-16 h-16 mx-auto rounded-xl flex items-center justify-center
                      bg-gradient-to-br from-white to-gray-50
                      border-2 ${colorClasses.border}
                      transition-all duration-300
                      ${isHovered ? 'scale-110 rotate-3' : ''}
                    `}
                    >
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className='w-8 h-8 transition-transform duration-300'
                      />
                    </div>

                    {/* Pulse animation for hovered item */}
                    {isHovered && (
                      <div
                        className={`
                        absolute inset-0 w-16 h-16 mx-auto rounded-xl
                        bg-${feature.color}-400 opacity-20 animate-ping
                      `}
                      ></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className='text-center'>
                    <h3
                      className={`
                      text-lg font-mulish mb-2 transition-colors duration-300
                      ${colorClasses.text}
                    `}
                    >
                      {feature.name}
                    </h3>
                    <p
                      className={`
                      text-sm text-gray-500 transition-all duration-300
                      ${isHovered ? 'text-gray-700' : ''}
                    `}
                    >
                      {feature.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div
                    className={`
                    absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full
                    w-0 h-1 bg-gradient-to-r from-${feature.color}-400 to-${feature.color}-600
                    rounded-full transition-all duration-300
                    ${isHovered ? 'w-12 translate-y-2' : ''}
                  `}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Info */}
        <div className='mt-12 text-center'>
          <div className='inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200'>
            <svg
              className='w-5 h-5 text-green-500 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 13l4 4L19 7'
              />
            </svg>
            <span className='text-gray-700 font-medium'>
              Tất cả chức năng đều được kiểm thử và đảm bảo chất lượng
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesSection
