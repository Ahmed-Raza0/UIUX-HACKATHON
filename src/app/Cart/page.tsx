import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
    return (
        <div className="w-full h-full flex mt-[96px] justify-center">
            <div className="w-full max-w-[1100px] h-auto flex flex-col lg:flex-row mx-auto">
                {/* Left Section */}
                <div className="w-full lg:w-[733.33px] h-auto flex flex-col">
                    {/* Free Delivery Banner */}
                    <div className="w-full lg:w-[717.33px] h-[62.89px] bg-[#F1F1F1] p-3">
                        <h1 className={`text-[13px] font-medium text-[#111111] ${inter.className}`}>
                            Free Delivery
                        </h1>
                        <div className="flex items-center">
                            <h1 className={`text-[11px] text-[#111111] ${inter.className}`}>
                                Applies to orders of ₹ 14 000.00 or more.
                            </h1>
                            <h1 className={`text-[11px] ml-2 font-medium underline text-[#111111] ${inter.className}`}>
                                View details
                            </h1>
                        </div>
                    </div>

                    {/* Bag Section */}
                    <h1 className={`text-[22px] font-medium text-[#111111] ${inter.className} mt-3 ml-2`}>
                        Bag
                    </h1>

                    {/* Products Section */}
                    <div className="w-full flex flex-col gap-2">
                        {/* Product 1 */}
                        <div className="w-full h-[218px] flex py-[24px]  border-slate-300">
                            <div className="w-[150px] h-[150px]">
                                <Image
                                    src="/images/image13.jpeg"
                                    alt="product image"
                                    width={150}
                                    height={150}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="w-[537.33px] flex flex-col justify-between gap-3">
                                <div>
                                    <h1 className={`text-[15px] font-medium text-[#111111] ${inter.className}`}>
                                        Nike Dri-FIT ADV TechKnit Ultra
                                    </h1>
                                    <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                        Men&apos;s Short-Sleeve Running Top
                                    </h1>
                                    <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                        Ashen Slate/Cobalt Bliss
                                    </h1>
                                    <div className="flex justify-between items-center">
                                        <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                            Size L
                                        </h1>
                                        <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                            Quantity 1
                                        </h1>
                                    </div>
                                    <div className="w-full">
                                        <Image
                                            src="/images/image14.svg"
                                            alt="image"
                                            width={537}
                                            height={34}
                                            className="w-full h-[34px]"
                                        />
                                    </div>
                                </div>
                                <h1 className="text-[15px] text-[#111111]">MRP: ₹ 3 895.00</h1>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className="w-full h-[218px] flex py-[24px] border-b border-t border-slate-300">
                            <div className="w-[150px] h-[150px]">
                                <Image
                                    src="/images/image13.jpeg"
                                    alt="product image"
                                    width={150}
                                    height={150}
                                    className="w-full h-full"
                                />
                            </div>
                            <div className="w-[537.33px] flex flex-col justify-between gap-3">
                                <div>
                                    <h1 className={`text-[15px] font-medium text-[#111111] ${inter.className}`}>
                                        Nike Dri-FIT ADV TechKnit Ultra
                                    </h1>
                                    <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                        Men&apos;s Short-Sleeve Running Top
                                    </h1>
                                    <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                        Ashen Slate/Cobalt Bliss
                                    </h1>
                                    <div className="flex justify-between items-center">
                                        <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                            Size L
                                        </h1>
                                        <h1 className={`text-[15px] text-[#757575] ${inter.className}`}>
                                            Quantity 1
                                        </h1>
                                    </div>
                                    <div className="w-full">
                                        <Image
                                            src="/images/image14.svg"
                                            alt="image"
                                            width={537}
                                            height={34}
                                            className="w-full h-[34px]"
                                        />
                                    </div>
                                </div>
                                <h1 className="text-[15px] text-[#111111]">MRP: ₹ 3 895.00</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Summary */}
                <div className="w-full lg:w-[350.67px] h-auto flex flex-col gap-5">
                    <h1 className={`text-[21px] font-medium text-[#111111] ${inter.className}`}>
                        Summary
                    </h1>
                    <div className="flex justify-between items-center">
                        <h1 className={`text-[15px] text-[#111111] ${inter.className}`}>Subtotal</h1>
                        <h1 className={`text-[15px] text-[#111111] ${inter.className}`}>₹ 20 890.00</h1>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className={`text-[15px] text-[#111111] ${inter.className}`}>
                            Estimated Delivery & Handling
                        </h1>
                        <h1 className={`text-[15px] text-[#111111] ${inter.className}`}>Free</h1>
                    </div>
                    <div className="flex justify-between items-center border-t border-b border-slate-300 py-2">
                        <h1 className={`text-[15px] text-[#111111] ${inter.className}`}>Total</h1>
                        <h1 className={`text-[15px] text-[#111111] ${inter.className}`}>₹ 20 890.00</h1>
                    </div>
                    <div className="w-full bg-[#111111] rounded-[30px] flex justify-center items-center py-2">
                        <h1 className={`text-[15px] text-white ${inter.className}`}>
                            Member Checkout
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
