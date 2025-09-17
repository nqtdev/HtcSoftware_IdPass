import DescribeTitle from 'layout/describeTitle/describeTitle'

/* eslint-disable react/prop-types */
const dataCard = [
  '1- Số Căn Cước',
  '2- Họ Và Tên',
  '3- Ngày Sinh',
  '4- Giới Tính',
  '5- Quốc Tịch',
  '6- Nguyên Quán',
  '7- Ngày Cấp',
  '8- Ngày Hết Hạn',
  '9- Số Căn Cước Cũ',
  '10- Dân Tộc',
  '11- Tôn Giáo',
  '12- Nhận Dạng Cá Nhân',
  '13- Thường Trú',
  '14- Họ Tên Cha, Mẹ',
  '15- Họ Tên Vợ, Chồng',
]

const dataCardPlus = ['1- Ảnh Chân Dung Trong CCCD', '4- Mã MRZ CCCD']
const dataCardExport = ['1- Định dạng PDF', '2- Định dạng EXCEL', '3- JSON']

const DataGet = () => {
  // Chia dataCard thành 2 cột
  const half = Math.ceil(dataCard.length / 2)
  const firstColumn = dataCard.slice(0, half)
  const secondColumn = dataCard.slice(half)

  const ListItem = ({children}) => (
    <div className='flex items-center p-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200'>
      <div className='w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0'></div>
      <span className='text-gray-700 text-sm font-medium'>{children}</span>
    </div>
  )

  const Section = ({title, data, icon}) => (
    <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300'>
      <div className='bg-gradient-to-r from-blue-500 to-blue-600 p-4'>
        <div className='flex items-center'>
          {icon && <span className='text-white text-xl mr-2'>{icon}</span>}
          <h3 className='text-white font-mulish text-lg'>{title}</h3>
        </div>
      </div>
      <div className='divide-y divide-gray-100'>
        {data.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </div>
    </div>
  )

  return (
    <div className='py-12 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen overflow-hidden'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <DescribeTitle title={'Dữ liệu trả về từ thiết bị đọc ID Card'} />
        </div>

        {/* Main Content */}
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Left Section - 15 trường thông tin */}
          <div className='space-y-6'>
            <Section title='15 trường thông tin cơ bản' data={[]} icon='📋' />
            <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='grid md:grid-cols-2 gap-0'>
                {/* Cột đầu tiên */}
                <div className='border-r border-gray-100'>
                  {firstColumn.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </div>
                {/* Cột thứ hai */}
                <div>
                  {secondColumn.map((item, index) => (
                    <ListItem key={index}>{item}</ListItem>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className='space-y-6'>
            {/* Dữ liệu hình ảnh */}
            <Section title='Dữ liệu hình ảnh' data={dataCardPlus} icon='🖼️' />

            {/* Xuất dữ liệu */}
            <div className='bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300'>
              <div className='bg-gradient-to-r from-purple-500 to-purple-600 p-4'>
                <div className='flex items-center'>
                  <span className='text-white text-xl mr-2'>📤</span>
                  <h3 className='text-white font-mulish text-lg'>Xuất dữ liệu</h3>
                </div>
              </div>
              <div className='divide-y divide-gray-100'>
                {dataCardExport.map((item, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between p-4 hover:bg-gray-50 transition-colors duration-200'
                  >
                    <div className='flex items-center'>
                      <div className='w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0'></div>
                      <span className='text-gray-700 text-sm font-medium'>{item}</span>
                    </div>
                    {index === 0 && <span className='text-red-500 text-xs'>📄</span>}
                    {index === 1 && <span className='text-green-500 text-xs'>📊</span>}
                    {index === 2 && <span className='text-blue-500 text-xs'>🔧</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Thống kê nhanh */}
            <div className='bg-white rounded-xl shadow-lg border border-gray-100 p-6'>
              <h4 className='text-lg font-mulish text-gray-800 mb-4 flex items-center'>
                <span className='text-xl mr-2'>📊</span>
                Thống kê
              </h4>
              <div className='grid grid-cols-3 gap-4'>
                <div className='text-center p-3 bg-blue-50 rounded-lg'>
                  <div className='text-2xl font-mulish text-blue-600'>15</div>
                  <div className='text-xs text-gray-600'>Trường thông tin</div>
                </div>
                <div className='text-center p-3 bg-green-50 rounded-lg'>
                  <div className='text-2xl font-mulish text-green-600'>2</div>
                  <div className='text-xs text-gray-600'>Dữ liệu hình ảnh</div>
                </div>
                <div className='text-center p-3 bg-purple-50 rounded-lg'>
                  <div className='text-2xl font-mulish text-purple-600'>3</div>
                  <div className='text-xs text-gray-600'>Định dạng xuất</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataGet
