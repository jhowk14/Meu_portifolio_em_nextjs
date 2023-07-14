import Link from "next/link";

export default function about(){
    return (
        <div className="flex justify-center">
            <div className="space-x-11 py-16 text-gray-200 px-8 w-8/12 text-center bg-purple-700 rounded-2xl m-10">
                <p className="mt-10 inline-block font-bold bg-yellow-500 hover:bg-yellow-700 text-white py-5 px-12 rounded-lg text-2xl"><Link href='/projetos/apirest'>API</Link></p>
                <p className="mt-10 inline-block bg-red-700 hover:bg-red-900 text-white font-bold py-5 px-12 rounded-lg text-2xl"><Link href='/projetos/xesqflix'>XesqFlix</Link></p>
                <p className="mt-10 inline-block bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl"><Link href='https://github.com/jhowk14/Meu_portifolio_em_nextjs'>GitHub desse site</Link></p>
            </div>
        </div>
        
    )}