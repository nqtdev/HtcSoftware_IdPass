import ButtonContact from 'layout/buttons/ButtonContact'

const CallToAction = () => {
  return (
    <div className='py-10 px-4 bg-gradient-to-r from-blue-600 to-purple-600 '>
      <div className='container mx-auto max-w-4xl text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold text-white mb-6' data-aos='fade-up'>
          Sẵn sàng trải nghiệm nền tảng xác thực định danh điện tử ?
        </h2>
        <p className='text-blue-100 mb-10 text-xl' data-aos='fade-up' data-aos-delay='200'>
          Liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất
        </p>
        <div
          className='flex flex-wrap justify-center gap-4'
          data-aos='fade-up'
          data-aos-delay='400'
        >
          <ButtonContact />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
