import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-full mt-[156px]">
      <div className="w-full max-w-[1440px] h-[51px] flex ">
        <div className="w-full max-w-[1344px] h-[36px] flex flex-row">
          <div className="w-full max-w-[1119px] h-[33.19px]">
            <h1 className="w-[120px] ml-[48px] mb-[48px] h-[32px] font-medium text-[24px] text-[#111111]">
              New (500)
            </h1>
          </div>
          <div className="w-[224px] h-[28px]">
            <Image
              src="/images/image16.svg"
              alt="line"
              width={224}
              height={28}
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1440px] h-full  mt-[36px] flex flex-row">
        <div className="w-[260px] h-[849px] hidden md:flex xl:flex 2xl:flex lg:flex flex-col">
          <div className="w-[192px] h-full ml-[48px]">
            <div className="w-[192px] h-[400.72px] flex flex-col gap-[15px]">
              <h1 className="w-[45.58px] h-[17px] text-[15px] font-medium text-[#111111]">
                Shoes
              </h1>
              <h1 className="w-[83.79px] h-[17px] text-[15px] font-medium text-[#111111]">
                Sports Bras
              </h1>
              <h1 className="w-[108.39px] h-[17px] text-[15px] font-medium text-[#111111]">
                Tops & T-Shirts
              </h1>
              <h1 className="w-[161.17px] h-[17px] text-[15px] font-medium text-[#111111]">
                Hoodies & Sweatshirts
              </h1>
              <h1 className="w-[54.45px] h-[17px] text-[15px] font-medium text-[#111111]">
                Jackets
              </h1>
              <h1 className="w-[124.98px] h-[17px] text-[15px] font-medium text-[#111111]">
                Trousers & Tights
              </h1>
              <h1 className="w-[46.45px] h-[17px] text-[15px] font-medium text-[#111111]">
                Shorts
              </h1>
              <h1 className="w-[72.51px] h-[17px] text-[15px] font-medium text-[#111111]">
                Tracksuits
              </h1>
              <h1 className="w-[156.7px] h-[17px] text-[15px] font-medium text-[#111111]">
                Jumpsuits & Rompers
              </h1>
              <h1 className="w-[118.45px] h-[17px] text-[15px] font-medium text-[#111111]">
                Skirts & Dresses
              </h1>
              <h1 className="w-[43.78px] h-[17px] text-[15px] font-medium text-[#111111]">
                Socks
              </h1>
              <h1 className="w-[101.51px] h-[38.59px] text-[15px] font-medium text-[#111111]">
                Accessories & Equipment
              </h1>
            </div>
            <div className="w-[192px] h-full flex flex-col gap-[15px]">
              <div className="w-[192px] h-[163px] flex flex-col border-t border-b border-slate-300">
                <div className="w-[188.16px] h-[48px] flex flex-row justify-between items-center ">
                  <h1 className="w-[58.03px] h-[17px] font-medium text-[16px] text-[#111111]">
                    Gender
                  </h1>
                  <Image
                    src="/images/image17.svg"
                    alt="line"
                    width={14}
                    height={14}
                  />
                </div>
                <div className="w-[196px] h-[108px] flex flex-col">
                  <div className="w-[196px] h-[80px] flex flex-col gap-2">
                    <div className="w-[188.16px] h-[24px] flex flex-row gap-1">
                      <Image
                        src="/images/Rectangle.svg"
                        alt="line"
                        width={20}
                        height={20}
                      />
                      <h1 className="w-[31.33px] h-[17px] text-[15px]  text-[#111111]">
                        Men
                      </h1>
                    </div>
                    <div className="w-[188.16px] h-[24px] flex flex-row gap-1">
                      <Image
                        src="/images/Rectangle.svg"
                        alt="line"
                        width={20}
                        height={20}
                      />
                      <h1 className="w-[31.33px] h-[17px] text-[15px]  text-[#111111]">
                        Women
                      </h1>
                    </div>
                    <div className="w-[188.16px] h-[24px] flex flex-row gap-1">
                      <Image
                        src="/images/Rectangle.svg"
                        alt="line"
                        width={20}
                        height={20}
                      />
                      <h1 className="w-[31.33px] h-[17px] text-[15px]  text-[#111111]">
                        Unisex
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link href="/ProductDetail/">
          {/* Main Product Section */}
          <div className="w-[1092px] h-full flex gap-2 flex-wrap">
            {/* Each product block */}
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div className="w-[348px] h-[533px] flex flex-col" key={index}>
                  <Image
                    src="/images/image18.png"
                    alt="image"
                    width={348}
                    height={348}
                  />
                  <div className="w-[348px] h-[185px] flex flex-col gap-3">
                    <div className="w-[169.34px] h-[76px] flex flex-col gap-3">
                      <h1 className="w-[47px] h-[28px] text-[15px] font-medium text-[#9E3500]">
                        Just In
                      </h1>
                      <div className="w-[169.34px] h-[48px] flex flex-col">
                        <h1 className="w-[166px] h-[24px] text-[15px] font-medium text-[#111111]">
                          Nike Air Force 1 Mid &apos;07
                        </h1>
                        <h1 className="w-[88px] h-[24px] text-[15px]  text-[#757575]">
                          Men&apos;s Shoes
                        </h1>
                      </div>
                      <h1 className="w-[60.68px] h-[17px] text-[15px]  text-[#757575]">
                        1 Colour
                      </h1>
                      <h1 className="w-[132.42px] h-[17px] text-[15px] font-medium text-[#111111]">
                        MRP : ₹ 10 795.00
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-[1092px] h-full flex  gap-2 flex-wrap">
            {/* Each product block */}
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div className="w-[348px] h-[533px] flex flex-col" key={index}>
                  <Image
                    src="/images/image18.png"
                    alt="image"
                    width={348}
                    height={348}
                  />
                  <div className="w-[348px] h-[185px] flex flex-col gap-3">
                    <div className="w-[169.34px] h-[76px] flex flex-col gap-3">
                      <h1 className="w-[47px] h-[28px] text-[15px] font-medium text-[#9E3500]">
                        Just In
                      </h1>
                      <div className="w-[169.34px] h-[48px] flex flex-col">
                        <h1 className="w-[166px] h-[24px] text-[15px] font-medium text-[#111111]">
                          Nike Air Force 1 Mid &apos;07
                        </h1>
                        <h1 className="w-[88px] h-[24px] text-[15px]  text-[#757575]">
                          Men&apos;s Shoes
                        </h1>
                      </div>
                      <h1 className="w-[60.68px] h-[17px] text-[15px]  text-[#757575]">
                        1 Colour
                      </h1>
                      <h1 className="w-[132.42px] h-[17px] text-[15px] font-medium text-[#111111]">
                        MRP : ₹ 10 795.00
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="w-[1092px] h-full flex gap-2 flex-wrap">
            {/* Each product block */}
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div className="w-[348px] h-[533px] flex flex-col" key={index}>
                  <Image
                    src="/images/image18.png"
                    alt="image"
                    width={348}
                    height={348}
                  />
                  <div className="w-[348px] h-[185px] flex flex-col gap-3">
                    <div className="w-[169.34px] h-[76px] flex flex-col gap-3">
                      <h1 className="w-[47px] h-[28px] text-[15px] font-medium text-[#9E3500]">
                        Just In
                      </h1>
                      <div className="w-[169.34px] h-[48px] flex flex-col">
                        <h1 className="w-[166px] h-[24px] text-[15px] font-medium text-[#111111]">
                          Nike Air Force 1 Mid &apos;07
                        </h1>
                        <h1 className="w-[88px] h-[24px] text-[15px]  text-[#757575]">
                          Men&apos;s Shoes
                        </h1>
                      </div>
                      <h1 className="w-[60.68px] h-[17px] text-[15px]  text-[#757575]">
                        1 Colour
                      </h1>
                      <h1 className="w-[132.42px] h-[17px] text-[15px] font-medium text-[#111111]">
                        MRP : ₹ 10 795.00
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default page;
