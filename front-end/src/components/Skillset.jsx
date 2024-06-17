import ProgressBar from './ProgressBar'

function Skillset() {
  return (
    <div className="w-full px-20 flex justify-around items-center gap-0 py-20">
        <div className="w-1/3 flex flex-col justify-start items-start gap-7">
            <div className="">
                <p className="font-semibold text-[#B9525B] text-[17px]">Aperçu</p>
                <h3 className="text-[35px] font-bold">Expériences sur des projets réels</h3>
            </div>
            <p className="text-justify">Bien q u'étant développeur full-stack, la plupart de me contribution sur des projets de développement web et mobile ont été basées sur le font-end, entre autre l'accessibilité la minipulation du dom, la gestion de vue etc... </p>
            
                <button className="w-48  p-2 bg-[#cf6f77] hover:bg-[#B9525B] font-semibold text-white">Me contacter</button>
        </div>
        <div className="w-1/3 flex flex-col gap-10">
            <ProgressBar title="HTML, CSS (Tailwindcss) ET JAVASCRIPT" width ="85%"/>
            <ProgressBar title="PHP" width ="10%"/>
            <ProgressBar title="PERN (PostgreSql, Express JS, React Js, Node JS)" width ="30%"/>
            <ProgressBar title="REACT NATIVE" width ="25%"/>
        </div>
    </div>
  )
}

export default Skillset