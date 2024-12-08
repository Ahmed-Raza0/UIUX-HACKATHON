import Image from "next/image"

 const Header = () => {
  return (
    <div className="w-[1440px] h-[96px]   flex flex-row  justify-between">
        <div className="w-[1440px] h-[36px] flex items-center justify-between flex-row ">
            <Image
            src="/images/logo.svg"
            alt="Logo"
            width={24}
            height={24}
            className="ml-[48px]"
            />
            <div className="w-[146px] h-[26px]  ">
                <h1 className="w-[127.06px] h-[16px] text-[13px] text-[#111111] font-medium">Skip to main content</h1>
            </div>
            <div className="w-[272.81px] h-[36px] flex flex-row mr-[48px] ">
                <div className="w-[98.5px] h-[34px] flex flex-row gap-[15.38px]">
                    <h1 className="w-[62px] h-[14px] text-[11px] text-[#111111] font-medium">Find a Store</h1>
                    <p className="w-[3px] h-[14px] text-[12px] text-[#111111]">|</p>
                </div>
                <div className="w-[51.81px] h-[34px] flex flex-row gap-[12.69px]">
                    <h1 className="w-[24px] h-[14px] text-[11px] text-[#111111] font-medium">Help</h1>
                    <p className="w-[3px] h-[14px] text-[12px] text-[#111111]">|</p>
                </div>
                <div className="w-[122.5px] h-[36px] flex justify-between ">
                        <h1 className="w-[39px] h-[14px] text-[11px] font-medium ">Join Us</h1>
                        <p className="w-[3px] h-[14px] text-[12px] text-[#111111]">|</p>
                        <h1 className="w-[36px] h-[14px] text-center text-[11px] text-[#111111]">Sign In</h1>
                </div>
            </div>
        </div>
        <div className="w-[1440px] h-[60px]">
            <Image
            src="/images/logo.svg"  
            alt="Logo"
            width={78.47}
            height={78.47}
            className="ml-[38.26px]"
            />
            <div className="w-[1211px] h-[60px] "></div>
        </div>
    </div>
  )
}

export default Header
