// div hover color #EB9B9E
import { Link } from "react-router-dom"
import landingImage from "../images/image1.png"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";


function LandingPage() {


    const handleDownload = () => {
        const pdfUrl = '/Docs/cv.pdf'
        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = 'CV-Benjamin-KABEYA'
        link.click()
    }



  return (
    <div className='w-full:px-20 py-0 flex justify-center items-end gap-1 font-normal font-poppins box-border bg-white'>
        {/* <div className="relative w-1/4 h-full right-0 bg-[#eb9b9e42] z-0"></div> */}
        <div className="w-1/2 h-[80%] flex flex-col justify-start items-start gap-10 p-2 py-5 ">
            <div className="w-full text-left flex flex-col justify-between items-start gap-2 ">
                <p className="text-[30px] font-semibold">Salut le monde!</p>
                <h1 className="text-[50px] vsm:text-[35px] vsm:leading-[40px] font-bold leading-[70px]"><span>Je suis Benjamin Kabeya</span> <br /> <span className="text-[#B9525B]">Devéloppeur Web et mobile</span></h1>
            </div>
            <p className="text-left w-3/4 ">Concepteur des sites et applications web fluide, élégant avec des interfaces qui attires plus des prospects </p>
            <div className="flex justify-start items-center gap-4">
                    <Link to='/gmail'><SiGmail size={25} className="hover:text-[#ec6060]"/></Link>
                    <Link to='/linkedin'><FaLinkedin size={25} className="hover:text-[#4ca8d3]"/></Link>
                    <Link to='/twitter'><FaSquareXTwitter size={25} className="hover:text-[#000000]"/></Link>
                    <Link to='/facebook'><FaSquareFacebook size={25} className="hover:text-[#495bff]"/></Link>
                </div>
            <div className="w-full flex justify-start items-center gap-8">
                <button className="w-25 h-12 p-3 border-none bg-[#cf6f77] hover:bg-[#B9525B] font-semibold text-white" onClick={handleDownload}>Télécharger mon CV</button>
                <button className="w-25 h-12 p-3 text-[#B9525B] border font-semibold border-[#B9525B]">Me contacter</button>
            </div>
        </div>
        <div className="smd:w-1/3 flex flex-wrap justify-start items-center vsm:w-full">
            <img src={landingImage} alt="" className="md:w-[90%] vsm:w-full z-10"/>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp" alt="" className="w-12 absolute right-25 top-120  "/>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-9294859-7578002.png?f=webp" alt="" className="w-12 vsm:hidden absolute right-72 top-20 "/>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-native-5562339-4642743.png" alt="" className="w-12 vsm:hidden absolute right-16 top-40 "/>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-css-11492968-9325303.png" alt="" className="w-12 vsm:z-[-10] absolute right-72 top-72 "/>
            <img src="https://cdn3d.iconscout.com/3d/free/thumb/free-css-logo-6563485-5453030.png?f=webp" alt="" className="w-12 absolute right-24 blur-sm top-80 "/>
        </div>
    </div>
  )
}

export default LandingPage