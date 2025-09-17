import Banner from 'assets/icon_comingSoon.svg'

function ComingSoon() {
  return (
    <div className="grid h-screen w-full overflow-x-hidden">
      <div className="m-auto animate-fade-right animate-delay-0 animate-alternate animate-duration-[2500ms] animate-fill-forwards animate-infinite animate-ease-in-out">
        <img className="m-auto w-[80%]" src={Banner} alt="" />
        <h1 className="text-center text-3xl font-semibold">Coming Soon !</h1>
      </div>
    </div>
  )
}

export default ComingSoon
