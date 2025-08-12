import { Outlet, useLocation } from "react-router";
import OfferHeader from "../components/custom/offers/OfferHeader";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <OfferHeader />}
      <Outlet />
    </>
  );
}

export default App;
