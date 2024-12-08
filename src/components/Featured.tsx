import Image from "next/image";

const Featured = () => {
  return (
    <div>
      <div className="w-full max-w-[1440px] h-auto sm:mx-[20px] md:mx-[30px] lg:mx-[40px] mx-[48px]  mt-[48px] flex flex-col">
        <h1 className="text-[15px] text-[#111111] font-medium">
          Featured
        </h1>
        <div className="w-full max-w-[1344px] h-auto flex flex-col mt-3 items-center justify-center">
          <Image
            src="/images/image3.svg"
            alt="image"
            width={1344}
            height={700}
            className="w-full max-w-[1344px] h-auto"
          />
          <div className="w-full max-w-[1008px] h-auto mt-[48px] flex flex-col gap-7 items-center justify-center">
            <h1 className="text-center text-[24px] sm:text-[36px] lg:text-[54px] text-[#111111] font-medium">
              STEP INTO WHAT FEELS GOOD
            </h1>
            <p className="w-full max-w-[473px] text-center text-[15px] text-[#111111]">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <button className="w-[152.42px] h-[39px] rounded-[30px] flex items-center justify-center bg-[#111111]">
              <h1 className="font-medium text-center text-[15px] text-[#FFFFFF]">
                Find Your Shoe
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
