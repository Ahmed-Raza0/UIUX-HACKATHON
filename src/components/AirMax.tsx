import Image from "next/image";

const AirMax = () => {
  return (
    <div>
      <div className="w-full max-w-[1440px] h-auto flex flex-col items-center mt-11 justify-center">
        <div className="w-full h-[52px] flex flex-row items-center justify-between px-4 sm:px-6 lg:px-10">
          <h1 className="ml-[48px] text-[22px] font-medium text-[#111111]">
            Best of Air Max
          </h1>
          <Image
            src="/images/AutoLayoutHorizontal.svg"
            alt="arrow"
            width={164.75}
            height={48}
            className="mr-[48px]"
          />
        </div>
        <div className="w-full max-w-[1440px] h-auto flex flex-wrap gap-3 items-center justify-center px-4 sm:px-6 lg:px-10">
          <div className="w-[441.36px] h-[510.36px] flex flex-col mb-6 sm:mb-0">
            <Image
              src="/images/image1.svg"
              alt="image"
              width={441.36}
              height={441.36}
              className="mb-4"
            />
            <div className="w-[425.36px] h-[48px] flex flex-row justify-between">
              <div className="w-[134.27px] h-[48px] flex flex-col justify-center">
                <h1 className="text-[15px] text-center text-[#111111] font-medium">
                  Nike Air Max Pulse
                </h1>
                <h1 className="text-[15px] text-center text-[#757575]">
                  Women's Shoes
                </h1>
              </div>
              <h1 className="font-medium text-[15px] text-right text-[#111111]">
                ₹ 13 995
              </h1>
            </div>
          </div>
          <div className="w-[441.36px] h-[510.36px] flex flex-col mb-6 sm:mb-0">
            <Image
              src="/images/image1.svg"
              alt="image"
              width={441.36}
              height={441.36}
              className="mb-4"
            />
            <div className="w-[425.36px] h-[48px] flex flex-row justify-between">
              <div className="w-[134.27px] h-[48px] flex flex-col justify-center">
                <h1 className="text-[15px] text-center text-[#111111] font-medium">
                  Nike Air Max Pulse
                </h1>
                <h1 className="text-[15px] text-center text-[#757575]">
                  Men's Shoes
                </h1>
              </div>
              <h1 className="font-medium text-[15px] text-right text-[#111111]">
                ₹ 13 995
              </h1>
            </div>
          </div>
          <div className="w-[441.36px] h-[510.36px] flex flex-col mb-6 sm:mb-0">
            <Image
              src="/images/image2.svg"
              alt="image"
              width={441.36}
              height={441.36}
              className="mb-4"
            />
            <div className="w-[425.36px] h-[48px] flex flex-row justify-between">
              <div className="w-[134.27px] h-[48px] flex flex-col justify-center">
                <h1 className="text-[15px] text-center text-[#111111] font-medium">
                  Nike Air Max Pulse
                </h1>
                <h1 className="text-[15px] text-center text-[#757575]">
                  Men's Shoes
                </h1>
              </div>
              <h1 className="font-medium text-[15px] text-right text-[#111111]">
                ₹ 13 995
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirMax;
