import { FaReact } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNpm } from "react-icons/fa6";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiPhpmyadmin } from "react-icons/si";

function Techs() {
  return (
    <div className="w-full px-20 py-40 vsm:py-5 flex flex-col justify-center items-center gap-4">
        <h2 className="font-semibold text-[45px] vsm:text-[30px] vsm:text-center">Mes technologies utilisées</h2>
        <div className="w-full flex flex-wrap justify-center items-center gap-10  py-4">
            <ImHtmlFive size={75}  className="hover:text-[#f97316] text-zinc-400"/>
            <SiCss3 size={75} className="hover:text-[#1d4ed8] text-zinc-400"/>
            <RiJavascriptFill size={75}  className="hover:text-[#facc15] text-zinc-400"/>
            <FaReact size={75} className="hover:text-[#38bdf8] text-zinc-400"/>
            <FaNode size={75} className="hover:text-[#15803d] text-zinc-400"/>
            <SiExpress size={75} className="hover:text-[#000000] text-zinc-400"/>
            <FaNpm size={75} className="hover:text-[#ef4444] text-zinc-400"/>
            <BiLogoPostgresql size={75} className="hover:text-[#0284c7] text-zinc-400"/>
            <SiPhpmyadmin size={75} className="hover:text-[#0284c7] text-zinc-400"/>
            <SiTailwindcss size={75} className="hover:text-[#67e8f9] text-zinc-400"/>
        </div>
    </div>
  )
}

export default Techs