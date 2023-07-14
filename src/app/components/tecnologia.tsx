import Image from "next/image";

type caminho = {
   src: string;
   nome: string;
}

export default function Tecnologia(props: caminho) {
    return <>
    <div>
      <h3 className="text-3xl text-gray-800 justify-center flex font-bold mb-2">{props.nome}</h3>
        <div className='justify-center flex'><Image src={props.src} alt="imagen ilustrativa de como e a tecnologia" width={50} height={50} /></div>
      </div>
    </>;
}
  