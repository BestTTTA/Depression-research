import Image from "next/image"

export default function Navbar() {
    return (
        <div className="flex items-center w-full h-24 bg-[#F3541C] px-4 gap-4">
            <Image src="/logo_sut.png" height={90} width={120} alt="" />
            <h1 className="text-white font-bold text-[30px]">Depression Research</h1>
        </div>
    )
}
