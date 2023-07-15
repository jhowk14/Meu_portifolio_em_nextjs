import Link from 'next/link';

export default function Xesq() {
  return (
    <>
      <div className="flex justify-center space-x-5">
      <p className="mt-10 inline-block bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
          <Link href="https://xesqflix-pi.vercel.app">Deploy vercel</Link>
        </p>
  <p className="mt-10 inline-block bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
          <Link href="https://github.com/jhowk14/API_pets_AUTH">GitHub</Link>
  </p>
</div>
      <div className="flex justify-center">
      <div className="py-16 text-gray-200 px-8 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 text-center bg-purple-700 rounded-2xl m-10">
          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            Este projeto consiste no desenvolvimento de um site que visa oferecer funcionalidades semelhantes às encontradas no serviço Netflix. Utilizamos as tecnologias Next.js, MongoDB e NextAuth.js para construir o site. O Next.js é uma estrutura de desenvolvimento web que nos permite criar aplicativos web dinâmicos e escaláveis. O MongoDB é um banco de dados NoSQL altamente flexível e adequado para armazenar e gerenciar dados de forma eficiente. O NextAuth.js é uma biblioteca que nos auxilia na implementação de recursos avançados de autenticação e gerenciamento de usuários.
          </p>

          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            Para a autenticação do sistema, estamos utilizando o próprio backend do Next.js em conjunto com o NextAuth.js. Essa combinação nos permite criar um sistema seguro e confiável de autenticação de usuários.
          </p>

          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            Atualmente, contamos com uma equipe de sete pessoas trabalhando no projeto. Estamos em desenvolvimento há dois meses, trabalhando arduamente para criar uma aplicação web de qualidade, com recursos avançados e uma experiência de usuário semelhante à do Netflix.
          </p>
        </div>
      </div>
    </>
  );
}
