import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div className="w-full h-auto mt-[96px] flex justify-center px-4">
            <div className="w-full lg:w-[1200px] h-auto flex flex-col lg:flex-row justify-between">
                
                {/* Product Image */}
                <div className="w-full lg:w-[653px] h-[653px] mb-4 lg:mb-0">
                    <Image
                        src="/images/image12.png"
                        alt="Nike Air Force 1"
                        width={653}
                        height={653}
                        className="w-full h-full"
                    />
                </div>

                {/* Product Details */}
                <div className="w-full lg:w-[376px] h-auto flex flex-col gap-3 lg:gap-5">
                    <h1 className="w-full lg:w-[367px] text-[32px] lg:text-[48px] font-medium text-[#111111]">
                        Nike Air Force 1 PLT.AF.ORM
                    </h1>

                    <div className="w-full lg:w-[374.92px] h-auto mt-4 lg:mt-10 flex flex-col gap-2">
                        <div className="w-full lg:w-[374.92px] h-auto">
                            <p className="w-full lg:w-[374.92px] text-[14px] lg:text-[15px] text-[#111111]">
                                Turn style on its head with this crafted take on the Air Jordan 1 Mid.
                                Its &quot;inside out&quot;-inspired construction, including unique layering and
                                exposed foam accents, ups the ante on this timeless Jordan Brand
                                silhouette. Details like the deco stitching on the Swoosh add coveted
                                appeal, while the unexpected shading, rich mixture of materials and
                                aged midsole aesthetic give this release an artisan finish.
                            </p>
                            <div className="w-full lg:w-[374.92px] h-[90px] flex">
                                <h1 className="text-[28px] lg:text-[36px] font-medium text-[#111111]">
                                    ₹ 8 695.00
                                </h1>
                            </div>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full lg:w-[174.42px] h-[44px] rounded-[30px] flex items-center justify-center bg-[#111111] mt-4 lg:mt-10">
                            <Image
                                src="/images/Group.svg"
                                alt="Add to Cart"
                                width={22.36}
                                height={21.8}
                                className="w-[24px] h-[24px]"
                            />
                            <Link href='/Cart/' className="text-[15px] font-medium text-white ml-2">Add To Cart</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
