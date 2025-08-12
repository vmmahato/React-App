import { Outlet } from "react-router"
import Footer from "../../components/custom/home/footer/Footer"
import Appbar from "../../components/mui/Appbar"

function HomePage() {
  return (
    <>
      <Appbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomePage