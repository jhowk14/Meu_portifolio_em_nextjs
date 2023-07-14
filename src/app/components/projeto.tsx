import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type caminho = {
   src: string;
   git: string;
   link?: string;
   caminho: string;
}

export default function Projeto(props: caminho) {
    return <>
    <div className='justify-center flex'><Link href={props.link ? props.link : ""}><Image src={props.src} alt="imagen ilustrativa de como e o projeto" width={500} height={500} /></Link></div>
        <div className='flex justify-center space-x-10'>
        <p className="mt-3 inline-block bg-black hover:bg-gray-700 text-white py-2 px-9 rounded-lg"><Link href={props.git}><FaGithub size={32}/></Link></p>
        <p className="mt-3 font-bold text-xl inline-block bg-purple-800 hover:bg-purple-950 text-white py-2 px-9 rounded-lg"><Link href={props.caminho}>Sobre</Link></p> 
        </div>
    </>;
}
  