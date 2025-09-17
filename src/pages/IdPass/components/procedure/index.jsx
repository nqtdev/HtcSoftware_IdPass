import {useState} from 'react'
import {Steps, ConfigProvider} from 'antd'
import {
  IdcardOutlined,
  ScanOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons'
import StepOne from './stepProcedure/stepOne'
import StepTwo from './stepProcedure/stepTwo'
import StepThree from './stepProcedure/stepThree'
import StepFour from './stepProcedure/stepFour'

const steps = [
  {
    title: 'Đặt thẻ',
    content: <StepOne />,
    icon: <IdcardOutlined className='text-blue-500' />,
  },
  {
    title: 'Xác thực',
    content: <StepTwo />,
    icon: <ScanOutlined className='text-green-500' />,
  },
  {
    title: 'Kiểm tra',
    content: <StepThree />,
    icon: <SafetyCertificateOutlined className='text-orange-500' />,
  },
  {
    title: 'Hoàn thành',
    content: <StepFour />,
    icon: <CheckCircleOutlined className='text-purple-500' />,
  },
]

const Procedure = () => {
  const [current, setCurrent] = useState(0)

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            colorPrimary: '#1890ff',
            colorText: '#4a5568',
            colorTextDescription: '#718096',
            colorFillContent: '#edf2f7',
            fontSize: 16,
            iconSize: 40,
            titlePadding: '0 12px',
          },
        },
      }}
    >
      <div className='max-w-6xl w-full mx-auto px-4 py-8'>
        <Steps
          current={current}
          onChange={setCurrent}
          items={steps.map(step => ({
            title: <span className='font-semibold'>{step.title}</span>,
            icon: step.icon,
          }))}
          responsive={true}
          className='mb-8'
        />

        <div className='w-full  mx-auto overflow-hidden p-6 md:p-8'>
          <div className='transition-all duration-300 ease-in-out'>{steps[current].content}</div>
          <div className='flex justify-between mt-8'>
            {current > 0 && (
              <button
                onClick={() => setCurrent(current - 1)}
                className='px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition'
              >
                Quay lại
              </button>
            )}
            {current < steps.length - 1 && (
              <button
                onClick={() => setCurrent(current + 1)}
                className='ml-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
              >
                Tiếp theo
              </button>
            )}
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}

export default Procedure
