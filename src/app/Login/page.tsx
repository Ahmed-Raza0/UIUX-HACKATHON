import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
    return (
        <div className="w-full h-full flex items-center justify-center px-4">
            <div className="w-full sm:w-[380px] h-auto flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="w-full sm:w-[324px] h-auto mt-7 sm:mt-7 flex flex-col gap-3 items-center justify-center">
                    <Image
                        src="/images/image.svg"
                        alt="Nike Logo"
                        width={324}
                        height={17}
                        className="w-full h-auto"
                    />
                    <h1
                        className={`w-full sm:w-[231.22px] text-center text-[#111111] text-[18px] font-bold ${inter.className}`}
                    >
                        BECOME A NIKE MEMBER
                    </h1>
                </div>

                {/* Form Section */}
                <div className="w-full sm:w-[324px] h-auto mt-7 flex flex-col gap-4 items-center justify-center">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full h-[40px] pl-3 border border-[#E5E5E5] rounded-[3px]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-[40px] pl-3 border border-[#E5E5E5] rounded-[3px]"
                    />

                    {/* Keep me signed in and Forget Password Links */}
                    <div className="w-full flex justify-between items-center mt-3 px-3">
                        <div className="flex items-center">
                            <Image
                                src="/images/Rectangle.svg"
                                alt="checkbox"
                                width={20}
                                height={20}
                                className="w-[20px] h-[20px]"
                            />
                            <p className="text-[11px] text-[#8D8D8D] ml-2">Keep me signed in</p>
                        </div>
                        <p className="text-[11px] text-[#8D8D8D] underline">Forget Password</p>
                    </div>

                    {/* Privacy Policy */}
                    <div className="w-full sm:w-[324px] h-auto flex justify-center mt-3">
                        <p className="text-center text-[12px] text-[#8D8D8D]">
                            By logging into your account, you agree to Nike&apos;s{" "}
                            <span className="text-[#111111] font-medium underline">
                                Privacy Policy
                            </span>{" "}
                            and Terms of Use.
                        </p>
                    </div>

                    {/* Sign In Button */}
                    <button className="w-full sm:w-[324px] h-[40px] flex items-center justify-center border border-black bg-[#111111] rounded-[3px] mt-4">
                        <h1 className="text-center font-medium text-[15px] text-[#FFFFFF]">
                            Sign In
                        </h1>
                    </button>

                    {/* Sign Up Link */}
                    <div className="w-full sm:w-[324px] h-[24px] flex flex-row items-center justify-center mt-4">
                        <h1 className="text-center text-[15px] text-[#8D8D8D]">
                            Don&apos;t have an account?{" "}
                            <span className="text-[#111111] font-medium underline text-[15px]">
                                Sign Up
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
