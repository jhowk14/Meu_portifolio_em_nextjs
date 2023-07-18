import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import Tecnologia from './components/tecnologia';
import Projeto from './components/projeto';

export default function Home() {
  return (
    <>
      <div className="py-16 px-8 text-center bg-gray-900 lg:flex lg:justify-between lg:items-center md:rounded-2xl md:m-5">
        <div className="lg:mr-12">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 ">Developer Full-Stack NODE</h1>
          <h2 className="text-2xl lg:text-5xl font-bold">Jonathan Henrique</h2>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start space-x-3">
            
          </div>
        </div>
        <div className="rounded-full mt-8 lg:mt-0 lg:ml-12 flex-shrink-0 space-x-2 justify-center">
        <a href="https://www.instagram.com/jhow.tech/" className="inline-block bg-red-500 hover:bg-red-800 text-white py-2 px-6 rounded-lg"><FaInstagram size={24} /></a>
            <a href="mailto:jonathanperoziti@gmail.com" className="inline-block bg-red-600 hover:bg-red-800 text-white py-2 px-6 rounded-lg"><FaEnvelope size={24} /></a>
            <a href="https://www.linkedin.com/in/jonathan-henrique-923541242" className="inline-block bg-blue-600 hover:bg-blue-800 text-white py-2 px-6 rounded-lg"><FaLinkedin size={24} /></a>
            <a href="https://github.com/jhowk14" className="inline-block bg-black hover:bg-gray-700 text-white py-2 px-6 rounded-lg"><FaGithub size={24} /></a>
        </div>
      </div>

      <section className="py-16 px-8 text-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Principais Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl flex justify-center text-red-600 font-bold mb-2">XesqFlix</h3>
            <Projeto src="/images/xesq.png" git="https://github.com/jhowk14/Xeqsflix_PI" caminho="/projetos/xesqflix" link="https://xesqflix-pi.vercel.app" />
          </div>

          <div>
            <h3 className="text-3xl flex justify-center text-center text-amber-400 font-bold mb-2">Back-end API de PetShot</h3>
            <Projeto src="/images/pet.png" git="https://github.com/jhowk14/API_pets_AUTH" caminho="/projetos/apirest" link="#" />
          </div>
        </div>
      </section>

      <section className="py-16 px-8 text-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center">Minhas tecnologias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
          <Tecnologia src="/images/next.png" nome="Next.JS" />
          <Tecnologia src="/images/api.png" nome="API REST" />
          <Tecnologia src="/images/node.svg" nome="NODE" />
          <Tecnologia src="/images/type.png" nome="TypeScript" />
          <Tecnologia src="/images/sql.png" nome="SQL" />
          <Tecnologia src="/images/csharp.png" nome="C#" />
          <Tecnologia src="/images/android.svg" nome="Android Studio" />
          <Tecnologia src="/images/python.svg" nome="Python" />
          <Tecnologia src="/images/react.svg" nome="React" />
          <Tecnologia src="/images/java.svg" nome="Java" />
        </div>
      </section>

    </>
  );
}

