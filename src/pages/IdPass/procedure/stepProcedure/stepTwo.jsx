import imgStepTwo from 'assets/homePage/stepProcedure/stepTwo.svg'

const StepTwo = () => {
  const steps = [
    {text: ' OCR 2 mặt thẻ'},
    {text: ' Giải mã QR Code'},
    {text: ' Giải mã MRZ'},
    {
      text: ' Đọc và giải mã dữ liệu trong chip điện tử trên thẻ CCCD gắn chip theo tiêu chuẩn ICAO',
    },
    {text: ' Chứng thực chữ ký số trong chip điện tử trên thẻ CCCD gắn chip'},
    {text: ' Đối chiếu dữ liệu OCR'},
    {text: ' Đối chiếu dữ liệu QR Code'},
    {text: ' Đối chiếu dữ liệu MRZ'},
    {text: ' Đối chiếu dữ liệu danh sách thi'},
  ]

  return (
    <div className='p-5 flex flex-row justify-center items-center'>
      <div className='basis-1/2'>
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={'font-mulish text-blue-600 text-lg'}>
              <i>-{step.text}</i>
            </li>
          ))}
        </ul>
      </div>
      <div className='basis-1/2'>
        <img className='m-auto' src={imgStepTwo} alt='imgStepTwo' />
      </div>
    </div>
  )
}

export default StepTwo
