import Image from "next/image";
 

const Hero = () => {
  return (
    <div>
       
      <div className="w-full h-auto flex flex-col items-center -top-1 justify-center px-4 sm:px-6 lg:px-10 xl:px-16">
        <h1 className="text-center text-[#111111] text-[15px] sm:text-[16px] md:text-[18px]">
          Hello Nike App
        </h1>
        <div className="w-full max-w-[323px] sm:max-w-[400px] h-[24px] px-[11px] text-center">
          <p className="text-[11px] sm:text-[12px] text-[#111111]">
            Download the app to access everything Nike.{" "}
            <span className="text-[#111111] font-medium underline">
              Get Your Great
            </span>
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1344px] mx-auto h-auto flex flex-col items-center justify-center ml-[48px] sm:ml-0">
        <Image src="/images/hero.svg" alt="hero" width={1344} height={700} className="w-full max-w-[1344px] h-auto" />
        <div className="w-full max-w-[1008px] flex flex-col items-center justify-center gap-2">
          <h1 className="text-center text-[15px] sm:text-[18px] md:text-[20px] font-medium text-[#111111]">
            First Look
          </h1>
          <h1 className="text-center text-[56px] sm:text-[60px] md:text-[64px] font-medium text-[#111111]">
            Nike Air Max Pulse
          </h1>
          <div className="w-full max-w-[1008px] flex items-center justify-center my-5 px-6 sm:px-8">
            <p className="text-[15px] sm:text-[16px] md:text-[18px] text-center text-[#111111]">
              Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse —designed to push you past your limits and help you go to the max.
            </p>
          </div>
          <div className="w-full max-w-[1008px] flex flex-row items-center justify-center gap-[1px] sm:gap-[10px]">
            <button className="w-[110px] sm:w-[120px] h-[39px] flex items-center justify-center rounded-[30px] bg-[#111111]">
              <h1 className="text-center text-white text-[15px] sm:text-[16px] font-medium">
                Notify Me
              </h1>
            </button>
            <button className="w-[138px] sm:w-[150px] h-[39px] flex items-center justify-center rounded-[30px] bg-[#111111]">
              <h1 className="text-center text-white text-[15px] sm:text-[16px] font-medium">
                Shop Air Max
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
