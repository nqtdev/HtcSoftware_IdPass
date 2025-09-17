import {useState} from 'react'
import {ConfigProvider, Modal} from 'antd'
import FieldInsurance from './fieldInsurance'
import FieldEdu from './fieldEdu'
import FieldBank from './fieldBank'
import FieldMedical from './fieldMedical'
import FieldTelecom from './fieldTelecom'
import FieldJustice from './fieldJustice'
import FieldTraffic from './fieldTraffic'
import FieldTransportLogistics from './fieldTransportLogistics'

const fields = [
  {
    key: '1',
    label: 'Giáo dục',
    icon: '🏫',
    component: <FieldEdu />,
  },
  {
    key: '2',
    label: 'Tài chính, Ngân hàng',
    icon: '💰',
    component: <FieldBank />,
  },
  {
    key: '3',
    label: 'Y tế',
    icon: '🏥',
    component: <FieldMedical />,
  },
  {
    key: '4',
    label: 'Viễn thông',
    icon: '📱',
    component: <FieldTelecom />,
  },
  {
    key: '5',
    label: 'Tư pháp',
    icon: '⚖️',
    component: <FieldJustice />,
  },
  {
    key: '6',
    label: 'Giao thông',
    icon: '🚦',
    component: <FieldTraffic />,
  },
  {
    key: '7',
    label: 'Vận tải & Logistics',
    icon: '🚚',
    component: <FieldTransportLogistics />,
  },
  {
    key: '8',
    label: 'Bảo hiểm',
    icon: '🛡️',
    component: <FieldInsurance />,
  },
]

const Field = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedField, setSelectedField] = useState(null)

  const handleCardClick = field => {
    setSelectedField(field)
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setSelectedField(null)
  }

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 16,
        },
      }}
    >
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {fields.map(field => (
            <div
              key={field.key}
              onClick={() => handleCardClick(field)}
              className='
                bg-white p-6 rounded-3xl shadow-lg
                flex flex-col items-center justify-center text-center
                cursor-pointer transition-transform duration-300 ease-in-out transform
                hover:scale-105 hover:shadow-2xl
              '
            >
              <div className='text-6xl mb-4'>{field.icon}</div>
              <h3 className='text-xl font-semibold text-gray-700'>{field.label}</h3>
            </div>
          ))}
        </div>

        {selectedField && (
          <Modal
            title={<span className='text-xl font-bold'>{selectedField.label}</span>}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            width={800}
          >
            {selectedField.component}
          </Modal>
        )}
      </div>
    </ConfigProvider>
  )
}

export default Field
