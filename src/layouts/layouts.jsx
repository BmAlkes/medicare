import Footer from "../components/Footer"
import Header from "../components/Header"
import Routers from "../routes/Routers"


const Layouts = () => {
  return (
    <>
    <Header/>
    <main>
        <Routers/>
    </main>
    <Footer/>
    </>
  )
}

export default Layouts