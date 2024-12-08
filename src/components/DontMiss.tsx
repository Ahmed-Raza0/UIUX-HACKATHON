import Image from "next/image"
const DontMiss = () => {
  return (
    <div>
        <div className="w-full max-w-[1344px] mx-auto mt-12 px-4">
  <h1 className="text-[22px] font-medium mb-4">Don&apos;t Miss</h1>
  
  <div className="flex flex-col gap-6 items-center justify-center mt-12">
    <Image
      src="/images/image8.svg"
      alt="image"
      width={1344}
      height={700}
      className="w-full max-w-[1344px] h-auto"  
    />
    
    <div className="flex flex-col gap-4 items-center justify-center w-full max-w-[1008px]">
      <h1 className="text-[52px] font-medium text-center text-[#111111] leading-tight sm:text-[40px] md:text-[48px]">
        FLIGHT ESSENTIALS
      </h1>
      
      <p className="text-[15px] text-center text-[#111111] w-full max-w-[531px]">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      
      <button className="w-[80px] h-[39px] flex items-center justify-center mt-6 rounded-[30px] bg-[#111111] sm:w-[100px] sm:h-[45px]">
        <h1 className="text-white text-center font-medium text-[14px] sm:text-[16px]">
          Shop
        </h1>
      </button>
    </div>
  </div>
</div>

    </div>
  )
}

export default DontMiss
