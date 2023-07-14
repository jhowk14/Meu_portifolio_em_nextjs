import Image from 'next/image'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Tecnologia from './components/tecnologia';
import Projeto from './components/projeto';

export default function Home() {
  return (
    <>
  <div className="py-16 px-8 text-center bg-purple-700 rounded-2xl m-5 ">
    <h1 className="text-5xl font-bold mb-4">Bem-vindo ao meu Portfólio</h1>
    <p className="text-3xl font-bold">Jonathan Henrique Programador Full-Stack Junior</p>
    <div className='space-x-3'>
    <a href="mailto:jonathanperoziti@gmail.com" className="mt-8 inline-block bg-red-600 hover:bg-red-800 text-white py-2 px-9 rounded-lg"><FaEnvelope size={32}/></a>
    <a href="https://www.linkedin.com/in/jonathan-henrique-923541242" className="mt-8 inline-block bg-blue-600 hover:bg-blue-800 text-white py-2 px-9 rounded-lg"><FaLinkedin size={32}/></a>
    <a href="https://github.com/jhowk14" className="mt-8 inline-block bg-black hover:bg-gray-700 text-white py-2 px-9 rounded-lg"><FaGithub size={32}/></a>
    </div>
  </div>

  <section className="py-16 px-8 text-gray-600">
    <h2 className="text-3xl font-bold mb-8 text-gray-100 justify-center flex">Principais Projetos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-3xl text-red-600 justify-center flex font-bold mb-2">XesqFlix</h3>
        <Projeto src='/images/xesq.png' git='https://github.com/jhowk14/Xeqsflix_PI' caminho='/projetos/xesqflix' link='https://xesqflix-pi.vercel.app'/>
      </div>
      
      <div>
        <h3 className="text-3xl text-amber-400 justify-center flex font-bold mb-2">Back-end API de PetShot</h3>
        <Projeto src='/images/pet.png' git='https://github.com/jhowk14/API_pets_AUTH' caminho='/projetos/apirest' link='#'/>
      </div>
    </div>
  </section>
  <section className="py-16 px-8 text-gray-600">
    <h2 className="text-3xl font-bold mb-8 text-gray-100 justify-center flex">Minhas tecnologias</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
      <Tecnologia src={'/images/next.png'} nome='Nest.JS'/>
      <Tecnologia src={'/images/api.png'} nome='API REST'/>
      <Tecnologia src={'/images/node.svg'} nome='NODE'/>
      <Tecnologia src={'/images/type.png'} nome='TypeScript'/>
      <Tecnologia src={'/images/sql.png'} nome='SQL'/>
      <Tecnologia src={'/images/csharp.png'} nome='C#'/>
      <Tecnologia src={'/images/android.svg'} nome='Android Studio'/>
      <Tecnologia src={'/images/python.svg'} nome='Python'/>
      <Tecnologia src={'/images/react.svg'} nome='React'/>
      <Tecnologia src={'/images/java.svg'} nome='Java'/>
    </div>
  </section>
  <a href="https://contate.me/jhowtech"
        target="_blank"
        className="fixed bottom-8 right-7 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300"
      >
        <Image src="/images/icoWhatsapp.png" alt="WhatsApp" width={30} height={30} />
      </a>
    </>
  )
}
