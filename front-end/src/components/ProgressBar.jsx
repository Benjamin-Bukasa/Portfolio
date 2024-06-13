

function ProgressBar({title,width}) {
  return (
    <div className='w-full flex flex-col gap-2 p-2'>
        <h4 className="font-bold text-[16px]">{title}</h4>
        <div className="w-full flex justify-start items-center h-4 bg-[#eb9b9e42]">
            <div className={`w-[${width}] h-full flex justify-end items-center text-white px-2 bg-[#B9525B] text-[10px] py-1`}>{width}</div>
        </div>
    </div>
  )
}

export default ProgressBar