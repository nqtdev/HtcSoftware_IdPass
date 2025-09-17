const ButtonContact = () => (
  <>
    <button
      onClick={() => window.open('tel:0848565555', '_self')}
      className='px-8 py-4 border-2 border-white text-white rounded-lg  hover:bg-white/10 transition-colors duration-300'
    >
      <p className='font-mulish'>Liên hệ tư vấn: 084.856.5555</p>
    </button>
  </>
)

export default ButtonContact
