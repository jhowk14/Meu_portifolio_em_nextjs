import Link from "next/link";

export default function About() {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
        <div className="flex flex-wrap justify-center md:justify-start md:space-x-11 py-16 text-gray-200 px-8 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 text-center bg-purple-700 rounded-2xl m-10">
          <p className="mt-10 inline-block font-bold bg-black hover:bg-gray-700 text-white py-5 px-12 rounded-lg text-2xl">
            <Link href="/projetos/apirest">API</Link>
          </p>
          <p className="mt-10 inline-block bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
            <Link href="/projetos/xesqflix">XesqFlix</Link>
          </p>
          <p className="mt-10 inline-block bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
            <Link href="https://github.com/jhowk14/Meu_portifolio_em_nextjs">GitHub desse site</Link>
          </p>
        </div>
      </div>
        </div>
      
    );
  }
  
