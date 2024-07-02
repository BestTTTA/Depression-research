import Image from "next/image"
import StudioMenu from "./StudioMenu"

export default function Navbar() {
    return (
        <div className="flex fixed items-center justify-between w-full h-24 bg-[#F3541C] px-4 gap-4 animate-fade-down">
            <Image src="/logo_sut.png" height={90} width={120} alt="" />
            <StudioMenu />
        </div>
    )
}
