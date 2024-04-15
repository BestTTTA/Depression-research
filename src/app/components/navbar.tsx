import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex items-center w-full h-24 bg-[#20558A] px-4 gap-4">
            <Image src="/logo.png" height={70} width={70} alt="" />
            <h1 className="text-white font-bold text-[30px]">Depression Research</h1>
        </div>
    )
}
