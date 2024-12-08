import Link from "next/link"

const Footer = () => {
  return (
    <div className="w-full h-[auto] bg-black flex flex-col items-center justify-center px-4">
      {/* Main content section */}
      <div className="w-full max-w-screen-xl h-[auto] flex flex-wrap justify-between gap-8 py-8">
        {/* Column 1 */}
        <div className="flex flex-col gap-4 w-full sm:w-[245.25px]">
          <h1 className="text-[10px] text-[#FFFFFF]">Find A Store</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Become A Member</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Sign Up for Email</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Send Us Feedback</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Student Discounts</h1>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 w-full sm:w-[245.25px]">
          <h1 className="text-[10px] text-[#FFFFFF]">Get Help</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Order Status</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Delivery</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Returns</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Contact Us On Nike.com Inquiries</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Contact Us On All Other Inquiries</h1>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 w-full sm:w-[245.25px]">
          <h1 className="text-[10px] text-[#FFFFFF]">Find A Store</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Become A Member</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Sign Up for Email</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Send Us Feedback</h1>
          <h1 className="text-[10px] text-[#FFFFFF]">Student Discounts</h1>
        </div>
      </div>

      {/* Bottom Section (Legal and Links) */}
      <div className="w-full border-t border-gray-700 mt-8 pt-4 text-sm">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between items-center">
          <span className="text-white">India © 2023 Nike, Inc. All Rights Reserved</span>
          <div className="flex flex-wrap space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-white text-[10px] sm:text-sm">Guides</Link>
            <Link href="#" className="text-white text-[10px] sm:text-sm">Terms of Sale</Link>
            <Link href="#" className="text-white text-[10px] sm:text-sm">Terms of Use</Link>
            <Link href="#" className="text-white text-[10px] sm:text-sm">Nike Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
