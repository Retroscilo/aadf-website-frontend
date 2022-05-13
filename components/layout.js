import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <>
    <Navbar />
    <div className="min-h-[90vh]">{children}</div>
    <Footer />
  </>
)

export default Layout
