import Link from 'next/link';

export default function Api() {
  return (
    <>
      <div className="flex justify-center space-x-10">
        <p className="mt-10 inline-block bg-black hover:bg-gray-700 text-white font-bold py-5 px-12 rounded-lg text-2xl">
          <Link href="https://github.com/jhowk14/API_pets_AUTH">GitHub</Link>
        </p>
      </div>
      <div className="flex justify-center">
      <div className="py-16 text-gray-200 px-8 w-full sm:w-10/12 md:w-8/12 lg:w-6/12 text-center bg-purple-700 rounded-2xl md:m-10">
          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            Este projeto consiste no desenvolvimento do backend de um site de petshop. Utilizamos as tecnologias Node.js,
            Sequelize, MySQL, Express e Consign para construir a API. O Node.js é uma plataforma de execução de código
            JavaScript do lado do servidor, que nos permite construir aplicações escaláveis e eficientes. O Sequelize é
            um ORM (Object-Relational Mapping) que facilita a interação com o banco de dados MySQL, proporcionando uma
            camada de abstração para manipulação dos dados.
          </p>

          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            O Express é um framework web para Node.js que nos ajuda a criar rotas e gerenciar requisições HTTP. O Consign
            é um módulo que facilita a organização e o carregamento automático de arquivos no projeto, simplificando a
            estrutura do código.
          </p>

          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            A implementação inclui recursos como cadastro, atualização, login e cadastro de pets. Utilizamos JWT (JSON
            Web Token) para o cadastro, que nos permite gerar tokens seguros para autenticação e autorização dos
            usuários. O token de login também é gerado utilizando JWT, garantindo a segurança das sessões de usuário.
          </p>

          <p className="text-2xl leading-8 text-center sm:text-left sm:leading-loose md:text-center md:leading-12">
            O desenvolvimento do frontend do site será realizado posteriormente, utilizando as tecnologias adequadas para
            a construção da interface do usuário.
          </p>
        </div>
      </div>
    </>
  );
}
