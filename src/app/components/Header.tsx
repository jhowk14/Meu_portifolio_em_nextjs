import Link from "next/link";

export default function Header() {
    return <>
    <header className=" text-white p-4">
    <ul className="space-x-10 flex justify-center text-xl font-bold">
      <li  className="hover:text-gray-400"><Link href="/">Inicio</Link></li>
      <li className="hover:text-gray-400 cursor-pointer"><Link href="/about">Sobre min</Link></li>
      <li><a href="/projetos" className="hover:text-gray-400">Projetos</a></li>
    </ul>
    </header></>;
}
  