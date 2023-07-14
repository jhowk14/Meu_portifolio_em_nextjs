import Header from './components/Header'
import './globals.css'
import Footer from './components/Footer';

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      
      <body className="bg-gradient-to-r text-white from-purple-500 to-indigo-500">
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
