import Link from "next/link";

export default function About() {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center">
            <div className="grid grid-cols-1">
              <p className="mt-10 justify-center flex font-bold bg-black hover:bg-gray-700 text-white py-5 px-12 rounded-lg text-2xl">
                <Link href="/projetos/apirest">API</Link>
              </p>
              <p className="mt-10 justify-center flex bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
                <Link href="/projetos/xesqflix">XesqFlix</Link>
              </p>
              <p className="mt-10 justify-center flex bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
                <Link href="https://github.com/jhowk14/Meu_portifolio_em_nextjs">GitHub desse site</Link>
              </p>
            </div>

      </div>
        </div>
      
    );
  }
  
