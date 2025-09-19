import {useState} from 'react'
import {CheckCircle, Camera, Shield, Scan, FileCheck, ChevronRight} from 'lucide-react'
import stepOne from 'assets/page_idPass/stepProcedure/7.webp'
import stepTwo from 'assets/page_idPass/stepProcedure/8.webp'
import stepThree from 'assets/page_idPass/stepProcedure/9.webp'
import stepFour from 'assets/page_idPass/stepProcedure/10.webp'
import stepFive from 'assets/page_idPass/stepProcedure/11.webp'
const steps = [
  {
    title: 'B1 - Thu thập giấy tờ tùy thân',
    subtitle: '(đọc dữ liệu trong thẻ)',
    details: [
      'Thiết bị scan 2 mặt thẻ (CheckID-SR)',
      'Đọc thông tin Chip trong Căn Cước bằng công nghệ NFC',
    ],
    icon: <Scan className='w-6 h-6' />,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    img: stepOne,
  },
  {
    title: 'B2 - Chụp ảnh chân dung',
    subtitle: '(sử dụng dịch vụ đối sánh)',
    details: ['Thiết bị thu thập ảnh chân dung', 'Sử dụng camera của thiết bị đọc'],
    icon: <Camera className='w-6 h-6' />,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    img: stepTwo,
  },
  {
    title: 'B2.1 - Đối sánh khuôn mặt',
    subtitle: '(sử dụng dịch vụ đối sánh)',
    details: [
      'Đối chiếu ảnh đã thu thập với ảnh trong thẻ',
      'Đối chiếu ảnh đã thu thập với ảnh được giải mã trong Chip',
    ],
    icon: <CheckCircle className='w-6 h-6' />,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    img: stepThree,
  },
  {
    title: 'B2.2 - Kiểm tra "Sự Sống"',
    subtitle: '(sử dụng dịch vụ đối sánh)',
    details: [
      'Sử dụng công nghệ nhận diện thực thể sống',
      'Xác nhận ảnh chân dung là người thật, không phải ảnh chụp',
    ],
    icon: <Shield className='w-6 h-6' />,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    img: stepFour,
  },
  {
    title: 'B3 - Trả về kết quả xác thực',
    subtitle: '',
    details: [
      'Trả về kết quả xác minh (Đúng - Sai)',
      'Trả về độ chính xác % (sử dụng dịch vụ đối sánh)',
    ],
    icon: <FileCheck className='w-6 h-6' />,
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    img: stepFive,
  },
]

const Procedure = () => {
  const [activeStep, setActiveStep] = useState(0)

  const generatePlaceholderImage = stepIndex => (
    <div
      className={`w-full rounded-xl shadow-md ${steps[stepIndex]?.bgColor || 'bg-gray-100'} border ${steps[stepIndex]?.borderColor || 'border-gray-200'} flex flex-col items-center justify-center relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-105`}
    >
      <div className='text-center px-3 w-full'>
        <div className='text-xs text-gray-500'>
          <img src={steps[stepIndex]?.img} alt='' />
        </div>
      </div>
    </div>
  )

  return (
    <section className='py-12 px-4 '>
      <div className='max-w-7xl mx-auto'>
        {/* Steps Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8'>
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 transition-all duration-500 cursor-pointer transform hover:-translate-y-2 hover:shadow-xl ${
                activeStep === index ? 'ring-2 ring-blue-400 scale-105 bg-white' : ''
              }`}
              onMouseEnter={() => setActiveStep(index)}
              onClick={() => setActiveStep(index)}
            >
              {/* Step Number Badge */}
              <div className='absolute -top-3 left-6'>
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-white font-bold text-sm`}
                >
                  {index + 1}
                </div>
              </div>

              {/* Step Image */}
              <div className='mb-4 mt-2'>{generatePlaceholderImage(index, step.title)}</div>

              {/* Step Content */}
              <div className='space-y-3'>
                <div>
                  <h3 className='font-bold font-roboto text-gray-800 text-sm leading-tight mb-1'>
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className='text-xs font-roboto text-gray-500 italic'>{step.subtitle}</p>
                  )}
                </div>

                <div className='space-y-2'>
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className='flex items-start gap-2'>
                      <ChevronRight className='w-3 h-3 text-indigo-500 mt-0.5 flex-shrink-0' />
                      <p className='text-xs font-roboto text-gray-600 leading-relaxed'>{detail}</p>
                    </div>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className='pt-2'>
                  <div className='w-full bg-gray-200 rounded-full h-1.5'>
                    <div
                      className={`h-1.5 rounded-full bg-gradient-to-r ${step.color} transition-all duration-1000`}
                      style={{width: activeStep >= index ? '100%' : '0%'}}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Arrow connector for larger screens */}
              {index < steps.length - 1 && (
                <div className='hidden xl:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10'>
                  <div className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center'>
                    <ChevronRight className='w-4 h-4 text-gray-400' />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Procedure
