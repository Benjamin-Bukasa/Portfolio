import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Experience() {

    // const handleClick = ()=>{
    //     console.log("ok");
    // }
    
  return (
    <div className="w-full px-10 flex justify-center items-center gap-20 py-20 bg-white">
        <img src="https://scontent.ffih1-2.fna.fbcdn.net/v/t39.30808-6/438089429_2722997784543139_1453542075828211443_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEqhE0K1k4ZiG6noGfWKtztyLx1A09GTGPIvHUDT0ZMY-OPmhw-978Qipdfx5fKNdgrhCds5YggzQtrWmeK1MO0&_nc_ohc=ZDOEqdgkLBcQ7kNvgE-WHu1&_nc_ht=scontent.ffih1-2.fna&oh=00_AYBj3KwB3jYxGevLF4ZGW2YkIaGbJXB4gQvmRCGbyQGNhw&oe=667098E6" alt="" className="w-1/4 rounded-xl"/>
        <div className="w-2/4 flex flex-col justify-start items-start gap-12 p-6">
            <div className="">
                <p className="font-semibold text-[#B9525B] text-[17px]">A propos de moi</p>
                <h3 className="text-[35px] font-bold">Avec +3 ans d`expérience dans le développement web et mobile</h3>
            </div>
            <p className="text-justify">J`ai réalisé et participé dans plusieurs projets de développement web et mobile, qui m'ont permis d'acquérir plusieurs compétences dans la programmation. le travail en équipe, m'a permis à acquérir des compétences softskills tel que la gestion de projet grâce aux methodes agiles, scrum, kanban et aussi l'utilisation d'outils de gestion de projets tel que Asana, Notion, etc... </p>
            <div className="">
                    <div className=""><p className="flex justify-start items-center gap-4 border p-2"><FaGithub size={20} /><Link to='/'>Mes repos GitHub</Link></p></div>
            </div>
            <div className="w-full flex justify-start items-center gap-20">
                <button className="w-64  p-2 bg-[#cf6f77] hover:bg-[#B9525B] font-semibold text-white">Prendre un rendez-vous</button>
                <div className="flex justify-start items-center gap-8">
                    <Link to='/gmail'><SiGmail size={30} className="hover:text-[#ec6060]"/></Link>
                    <Link to='/linkedin'><FaLinkedin size={30} className="hover:text-[#4ca8d3]"/></Link>
                    <Link to='/twitter'><FaSquareXTwitter size={30} className="hover:text-[#000000]"/></Link>
                    <Link to='/facebook'><FaSquareFacebook size={30} className="hover:text-[#495bff]"/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience