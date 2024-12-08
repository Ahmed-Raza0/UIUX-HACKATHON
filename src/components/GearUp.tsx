import Image from "next/image";

const GearUp = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto mt-[48px] px-4 sm:px-6 lg:px-10">
      <h1 className="text-[23px] text-[#111111] font-medium mb-8">Gear Up</h1>
      
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-6">
          <Image
            src="/images/AutoLayoutHorizontal.svg"
            alt="image"
            width={211}
            height={48}
            className="mx-auto lg:ml-[375px] xl:ml-[375px]"
          />
          
          <div className="flex flex-col sm:flex-row gap-6">
            
            {/* First Product */}
            <div className="flex-1 flex flex-col items-center">
              <Image
                src="/images/image4.svg"
                alt="image"
                width={300}
                height={300}
                className="mb-4"
              />
              <div className="flex justify-between items-center w-full max-w-[284px]">
                <div className="flex flex-col items-start">
                  <h1 className="text-[15px] text-[#111111] font-medium">
                    Nike Dri-FIT ADV TechKnit Ultra
                  </h1>
                  <h1 className="text-[16px] text-[#757575]">
                    Men&apos;s Short-Sleeve Running Top
                  </h1>
                </div>
                <h1 className="text-[15px] font-medium text-[#111111]">₹ 3 895</h1>
              </div>
            </div>

            {/* Second Product */}
            <div className="flex-1 flex flex-col items-center">
              <Image
                src="/images/image5.svg"
                alt="image"
                width={300}
                height={300}
                className="mb-4"
              />
              <div className="flex justify-between items-center w-full max-w-[284px]">
                <div className="flex flex-col items-start">
                  <h1 className="text-[15px] text-[#111111] font-medium">
                    Nike Dri-FIT Challenger
                  </h1>
                  <h1 className="text-[16px] text-[#757575]">
                    Men&apos;s 18cm (approx.) 2-in-1 Versatile Shorts
                  </h1>
                </div>
                <h1 className="text-[15px] font-medium text-[#111111]">₹ 2 495</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-6">
          <Image
            src="/images/AutoLayoutHorizontal.svg"
            alt="image"
            width={211}
            height={48}
            className="mx-auto lg:ml-[375px] xl:ml-[375px]"
          />
          
          <div className="flex flex-col sm:flex-row gap-6">
            
            {/* Third Product */}
            <div className="flex-1 flex flex-col items-center">
              <Image
                src="/images/image6.svg"
                alt="image"
                width={300}
                height={300}
                className="mb-4"
              />
              <div className="flex justify-between items-center w-full max-w-[284px]">
                <div className="flex flex-col items-start">
                  <h1 className="text-[15px] text-[#111111] font-medium">
                    Nike Dri-FIT ADV Run Division
                  </h1>
                  <h1 className="text-[16px] text-[#757575]">
                    Women&apos;s Long-Sleeve Running Top
                  </h1>
                </div>
                <h1 className="text-[15px] font-medium text-[#111111]">₹ 5 295</h1>
              </div>
            </div>

            {/* Fourth Product */}
            <div className="flex-1 flex flex-col items-center">
              <Image
                src="/images/image7.svg"
                alt="image"
                width={300}
                height={300}
                className="mb-4"
              />
              <div className="flex justify-between items-center w-full max-w-[284px]">
                <div className="flex flex-col items-start">
                  <h1 className="text-[15px] text-[#111111] font-medium">
                    Nike Fast
                  </h1>
                  <h1 className="text-[16px] text-[#757575]">
                    Women&apos;s Mid-Rise 7/8 Running Leggings with Pockets
                  </h1>
                </div>
                <h1 className="text-[15px] font-medium text-[#111111]">₹ 3 895</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearUp;
