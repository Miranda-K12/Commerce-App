import Footer from "../Components/Footer/Footer";
import Routing from "../Routing/Index";
import Header from "../Components/Header/Header";
const Layout = () => {
  return (
    <div className='container'>
      <Header />
      <Routing />
      <Footer />
    </div>
  )
}
export default Layout;