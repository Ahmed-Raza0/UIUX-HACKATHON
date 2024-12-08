
const Essential = () => {
  return (
    <div className="w-full max-w-[1344px] mx-auto mt-[48px] px-[16px]">
      <h1 className="w-[157.48px] h-[27px] text-[23px] font-medium mb-[24px]">The Essentials</h1>

      <div className="flex flex-col lg:flex-row gap-[12px] mt-[48px] justify-center">
        {/* Men's Section */}
        <div className="w-[440px] h-[540px] bg-[url('/images/image9.svg')] bg-cover bg-center relative">
          <button className="w-[85.19px] h-[39px] rounded-[30px] flex items-center justify-center absolute bottom-[40px] left-[48px] bg-white">
            <h1 className="text-[15px] font-medium text-[#111111]">Men&apos;s</h1>
          </button>
        </div>

        {/* Women's Section */}
        <div className="w-[440px] h-[540px] bg-[url('/images/image10.svg')] bg-cover bg-center relative">
          <button className="w-[108.89px] h-[39px] rounded-[30px] flex items-center justify-center absolute bottom-[40px] left-[48px] bg-white">
            <h1 className="text-[15px] font-medium text-[#111111]">Women&apos;s</h1>
          </button>
        </div>

        {/* Kids' Section */}
        <div className="w-[440px] h-[540px] bg-[url('/images/image11.svg')] bg-cover bg-center relative">
          <button className="w-[77.19px] h-[39px] rounded-[30px] flex items-center justify-center absolute bottom-[40px] left-[48px] bg-white">
            <h1 className="text-[15px] font-medium text-[#111111]">Kids&apos;</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Essential;
