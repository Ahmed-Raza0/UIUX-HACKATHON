import Image from "next/image"

 const Header = () => {
  return (
    <div className="w-[1440px] h-[60px]   flex flex-row  justify-between">
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
