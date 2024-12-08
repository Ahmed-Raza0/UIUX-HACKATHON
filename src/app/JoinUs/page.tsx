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
                        alt="image"
                        width={324}
                        height={17}
                        className="w-full h-[17px]"
                    />
                    <h1
                        className={`w-full sm:w-[231.22px] text-center text-[#111111] text-[18px] font-bold ${inter.className}`}
                    >
                        BECOME A NIKE MEMBER
                    </h1>
                    <p
                        className={`w-full sm:w-[282.08px] text-[14px] ${inter.className} text-center text-[#8D8D8D]`}
                    >
                        Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
                    </p>
                </div>

                {/* Form Section */}
                <div className="w-full sm:w-[324px] h-auto mt-7 flex flex-col gap-3 items-center justify-center">
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="w-full sm:w-[324px] h-[40px] pl-3 border border-[#E5E5E5] rounded-[3px]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full sm:w-[324px] h-[40px] border pl-3 border-[#E5E5E5] rounded-[3px]"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full sm:w-[324px] h-[40px] border pl-3 border-[#E5E5E5] rounded-[3px]"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full sm:w-[324px] h-[40px] border pl-3 border-[#E5E5E5] rounded-[3px]"
                    />

                    {/* Date of Birth */}
                    <div className="w-full sm:w-[324px] h-auto flex flex-col gap-3 items-center justify-center">
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            className="w-full sm:w-[324px] h-[40px] border pl-3 border-[#E5E5E5] rounded-[3px]"
                        />
                        <p className="w-[301.45px] h-[14px] text-center text-[11px] text-[#8D8D8D]">
                            Get a Nike Member Reward every year on your Birthday.
                        </p>
                    </div>

                    {/* Select Inputs */}
                    <select
                        aria-label="Country"
                        className="w-full sm:w-[324px] h-[40px] border pl-3 border-[#E5E5E5] rounded-[3px]"
                    >
                        <option value="Pakistan">Pakistan</option>
                        <option value="India">India</option>
                    </select>
                    <select
                        aria-label="Gender"
                        className="w-full sm:w-[324px] h-[40px] border pl-3 border-[#E5E5E5] rounded-[3px]"
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                    </select>

                    {/* Email Sign-up */}
                    <div className="w-full sm:w-[324px] h-[40px] flex items-center justify-start mt-3">
                        <Image
                            src="/images/Rectangle.svg"
                            alt="image"
                            width={20}
                            height={20}
                            className="w-[20px] h-[20px]"
                        />
                        <p className="text-[11px] text-[#8D8D8D] ml-2">
                            Sign up for emails to get updates from Nike on products, offers and your Member benefits.
                        </p>
                    </div>

                    {/* Privacy Policy */}
                    <div className="w-full sm:w-[324px] h-auto flex justify-center mt-3">
                        <p className="text-center text-[12px] text-[#8D8D8D]">
                            By creating an account, you agree to Nike&apos;s{" "}
                            <span className="text-[#111111] text-[12px] font-medium underline">
                                Privacy Policy
                            </span>{" "}
                            and Terms of Use.
                        </p>
                    </div>

                    {/* Join Button */}
                    <button className="w-full sm:w-[324px] h-[40px] flex items-center justify-center border border-black bg-[#111111] rounded-[3px] mt-4">
                        <h1 className="text-center font-medium text-[15px] text-[#FFFFFF]">JOIN US</h1>
                    </button>

                    {/* Sign In Link */}
                    <div className="w-full sm:w-[324px] h-[24px] flex flex-row items-center justify-center mt-4">
                        <h1 className="text-center text-[15px] text-[#8D8D8D]">
                            Already a Member?{" "}
                            <span className="text-[#111111] font-medium underline text-[15px]">
                                Sign In
                            </span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
