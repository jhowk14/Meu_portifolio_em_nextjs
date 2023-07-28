import Header from './components/Header'
import './globals.css'
import Image from 'next/image'
import Footer from './components/Footer';
import Head from './head';


export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <Head/>
      <body className="bg-gradient-to-r text-white text-center from-green-200 to-green-600">
        <Header/>
        {children}
        
      <a href="https://contate.me/jhowtech" target="_blank" className="fixed bottom-8 right-7 bg-green-500 hover:bg-green-600 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-colors duration-300">
        <Image src="/images/icoWhatsapp.png" alt="WhatsApp" width={30} height={30} />
      </a>
        <Footer/>
        </body>
    </html>
  )
}
