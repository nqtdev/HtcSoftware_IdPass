import {useState} from 'react'
import {Steps, ConfigProvider} from 'antd'
import StepOne from './stepProcedure/stepOne'
import StepTwo from './stepProcedure/stepTwo'
import StepThree from './stepProcedure/stepThree'
import StepFour from './stepProcedure/stepFour'

const steps = [
  {title: 'Bước 1', content: <StepOne />},
  {title: 'Bước 2', content: <StepTwo />},
  {title: 'Bước 3', content: <StepThree />},
  {title: 'Bước 4', content: <StepFour />},
]

const Procedure = () => {
  const [current, setCurrent] = useState(0)

  return (
    <ConfigProvider
      theme={{
        components: {
          Steps: {
            iconSize: 34,
            iconFontSize: 18,
          },
        },
      }}
    >
      <div className='xl:w-3/4 w-full m-auto'>
        <Steps
          current={current}
          onChange={setCurrent}
          items={steps.map(step => ({title: step.title}))}
        />
        <div className='w-full m-auto border-2 mt-4 rounded-lg'>{steps[current].content}</div>
      </div>
    </ConfigProvider>
  )
}

export default Procedure
