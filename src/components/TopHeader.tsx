import Image from "next/image";
import { MenuIcon } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const TopHeader = () => {
    return (
        <div className="w-full">
            <Sheet>
                <SheetTrigger>
                    <MenuIcon className="block md:hidden   lg:hidden xl:hidden 2xl:hidden" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle></SheetTitle>
                        <SheetDescription>
                            <div className="h-[36px] flex flex-col  items-center justify-center px-4 sm:px-8">
                                <div className="w-auto h-[36px] flex flex-col  items-center justify-center gap-2 sm:gap-[15px]">
                                    <div className="w-[98.5px] h-[34px]  ">
                                        <Link
                                            href="/"
                                            className="text-[11px] flex text-[#111111] font-medium"
                                        >
                                            Find a Store
                                        </Link>
                                    </div>

                                    <div className="w-[51.81px] h-[34px] ">
                                        <Link
                                            href="/"
                                            className="text-[11px] flex text-[#111111] font-medium"
                                        >
                                            Help
                                        </Link>
                                    </div>

                                    <div className="w-[122.5px] h-[36px]  flex flex-col  items-center justify-center gap-2">
                                        <Link
                                            href="/JoinUs/"
                                            className="text-[11px] flex text-[#111111] font-medium"
                                        >
                                            Join Us
                                        </Link>

                                        <Link
                                            href="/Login/"
                                            className="text-center flex text-[11px] text-[#111111]"
                                        >
                                            Sign In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>

            <div className="w-full h-full hidden md:block lg:block xl:block 2xl:block ">
                <div className="h-[36px] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8">
                    {/* Logo */}
                    <Image
                        src="/images/logo.svg"
                        alt="Logo"
                        width={24}
                        height={24}
                        className="ml-0 sm:ml-[48px] mb-2 sm:mb-0"
                    />

                   

                    {/* Other Links (Find a Store, Help, Join Us, Sign In) */}
                    <div className="w-auto h-[36px] flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-[15px]">
                        {/* Find a Store */}
                        <div className="w-[98.5px] h-[34px] flex flex-row gap-[15.38px]">
                            <h1 className="text-[11px] text-[#111111] font-medium">
                                Find a Store
                            </h1>
                            <p className="text-[12px] text-[#111111]">|</p>
                        </div>

                        {/* Help */}
                        <div className="w-[51.81px] h-[34px] flex flex-row gap-[12.69px]">
                            <h1 className="text-[11px] text-[#111111] font-medium">Help</h1>
                            <p className="text-[12px] text-[#111111]">|</p>
                        </div>

                        {/* Join Us & Sign In */}
                        <div className="w-[122.5px] h-[36px] flex justify-between gap-2 sm:gap-3">
                            <Link href="/JoinUs/" className="text-[11px] font-medium">Join Us</Link>
                            <p className="text-[12px] text-[#111111]">|</p>
                            <Link href="/Login/" className="text-center text-[11px] text-[#111111]">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
