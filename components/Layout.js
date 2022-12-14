import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }){
  return <div>
    <Navbar />
    <main className="m-5">{children}</main>
    <Footer />
  </div>
}