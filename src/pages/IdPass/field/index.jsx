import {Collapse, Space, ConfigProvider} from 'antd'
import FieldInsurance from './fieldInsurance'
import FieldEdu from './fieldEdu'
import FieldBank from './fieldBank'
import FieldMedical from './fieldMedical'
import FieldTelecom from './fieldTelecom'
import FieldJustice from './fieldJustice'
import FieldTraffic from './fieldTraffic'
import FieldTransportLogistics from './fieldTransportLogistics'

const Field = () => (
  <ConfigProvider
    theme={{
      token: {
        motionEaseInOut: 'cubic-bezier(0.25, 1, 0.25, 1)',
        motionDurationMid: '0.8s',
      },
    }}
  >
    <Space direction='vertical' className='w-full'>
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '1',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực giáo dục
              </span>
            ),
            children: (
              <>
                <FieldEdu />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '2',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực tài chính, ngân hàng
              </span>
            ),
            children: (
              <>
                <FieldBank />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '3',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực y tế
              </span>
            ),
            children: (
              <>
                <FieldMedical />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '4',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực viễn thông
              </span>
            ),
            children: (
              <>
                <FieldTelecom />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '5',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực tư pháp
              </span>
            ),
            children: (
              <>
                <FieldJustice />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '6',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực giao thông
              </span>
            ),
            children: (
              <>
                <FieldTraffic />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '7',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực vận tải và logistics
              </span>
            ),
            children: (
              <>
                <FieldTransportLogistics />
              </>
            ),
          },
        ]}
      />
      <Collapse
        collapsible='header'
        defaultActiveKey={['1']}
        items={[
          {
            key: '8',
            label: (
              <span className='text-base font-mulish text-main-colors'>
                Ứng dụng giải pháp trong lĩnh vực bảo hiểm
              </span>
            ),
            children: (
              <>
                <FieldInsurance />
              </>
            ),
          },
        ]}
      />
    </Space>
  </ConfigProvider>
)
export default Field
