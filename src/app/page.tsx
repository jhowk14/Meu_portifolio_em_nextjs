import Image from 'next/image'
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  return (
    <>
  <div className="py-16 px-8 text-center">
    <h1 className="text-4xl font-bold mb-4">Bem-vindo ao meu Portfólio</h1>
    <p className="text-2xl font-bold">Jonathan Henrique Programador Full-Stack Junior</p>
    <div className='space-x-3'>
    <a href="mailto:jonathanperoziti@gmail.com" className="mt-8 inline-block bg-red-600 hover:bg-red-800 text-white py-2 px-9 rounded-lg"><FaEnvelope size={32}/></a>
    <a href="https://www.linkedin.com/in/jonathan-henrique-923541242" className="mt-8 inline-block bg-blue-600 hover:bg-blue-800 text-white py-2 px-9 rounded-lg"><FaLinkedin size={32}/></a>
    <a href="https://github.com/jhowk14" className="mt-8 inline-block bg-black hover:bg-gray-700 text-white py-2 px-9 rounded-lg"><FaGithub size={32}/></a>
    </div>
  </div>

  <section className="py-16 px-8 text-gray-600">
    <h2 className="text-3xl font-bold mb-8 text-gray-100 justify-center flex">Meus Projetos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      <div>
        <h3 className="text-3xl text-red-600 justify-center flex font-bold mb-2">XesqFlix</h3>
        <div className='justify-center flex'><Link href="https://xesqflix-pi.vercel.app"><Image src="/images/xesq.png" alt="imagen ilustrativa de como e o projeto" width={500} height={500} /></Link></div>
        <div className='flex justify-center space-x-10'>
        <p className="mt-3 inline-block bg-black hover:bg-gray-700 text-white py-2 px-9 rounded-lg"><Link href="https://github.com/jhowk14/Xeqsflix_PI"><FaGithub size={32}/></Link></p>
        <p className="mt-3 font-bold text-xl inline-block bg-indigo-400 hover:bg-purple-800 text-white py-2 px-9 rounded-lg"><Link href="/projetos">Sobre</Link></p> 
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl text-amber-400 justify-center flex font-bold mb-2">Back-end API de PetShot</h3>
        <div className='justify-center flex'><Link href="https://xesqflix-pi.vercel.app"><Image src="/images/xesq.png" alt="imagen ilustrativa de como e o projeto" width={500} height={500} /></Link></div>
        <div className='flex justify-center space-x-10'>
        <p className="mt-3 inline-block bg-black hover:bg-gray-700 text-white py-2 px-9 rounded-lg"><Link href="https://github.com/jhowk14/Xeqsflix_PI"><FaGithub size={32}/></Link></p>
        <p className="mt-3 font-bold text-xl inline-block bg-purple-500 hover:bg-purple-800 text-white py-2 px-9 rounded-lg"><Link href="/projetos">Sobre</Link></p> 
        
      </div>
      </div>
    </div>
  </section>
  <section className="py-16 px-8 text-gray-600">
    <h2 className="text-3xl font-bold mb-8 text-gray-100 justify-center flex">Minhas tecnologias</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Projeto 1</h3>
        <p>Descrição do projeto 1.</p>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Projeto 2</h3>
        <p>Descrição do projeto 2.</p>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-2">Projeto 3</h3>
        <p>Descrição do projeto 3.</p>
      </div>
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
