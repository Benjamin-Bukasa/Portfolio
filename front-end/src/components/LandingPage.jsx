// div hover color #EB9B9E


function LandingPage() {
  return (
    <div className='w-full h-screen px-32 py-5 flex justify-between items-start gap-5 font-normal font-poppins'>
        <div className="w-1/2 h-full flex flex-col justify-center items-start gap-4">
            <div className="w-full text-left flex flex-col justify-between items-start gap-1 leading-[50px]">
                <p className="text-[20px] font-semibold">Salut le monde!</p>
                <h1 className="text-[45px] font-bold">Je suis Benjamin Kabeya</h1>
                <p className="text-[30px] font-bold">un <span className="text-[#B9525B]">Devéloppeur Web et Web Mobile</span></p>
            </div>
            <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae facere quo mollitia dolorum sed non praesentium </p>
            <div className="w-1/2 h-1/3 flex justify-between items-center gap-2">
                <button className="w-25 h-12 p-3 border-none bg-[#B9525B] font-semibold text-white">Télécharger mon CV</button>
                <button className="w-25 h-12 p-3 border-none border border-slate-500">Me contacter</button>
            </div>
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
            <img src="" alt="" />
        </div>
    </div>
  )
}

export default LandingPage