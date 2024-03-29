import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "owl.carousel/dist/assets/owl.carousel.css";
//import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery/dist/jquery.js";
import LandingPage from './Components/Landingpage/index.js';
import Banner3 from "./Components/Banner3";
import Banner1 from "./Components/Banner1";
import Banner2 from "./Components/Banner2";
import Teamlist from "./pages/Team";
import NewTopHome from "./pages/NewTopHome";
import NewBannerHome from "./pages/NewBannerHome";
import { useState } from 'react'

// import Payment from "./Components/PricingPlan/components/Payment";
import Payment from "./Components/PricingPlan/components/Payment";
import Swal from "sweetalert2";



function App() {
  const query = new URL(window.location.href).searchParams;
  const [Success] = useState(query.get('success'));
  if(Success && Success == 'true')
    Swal.fire("Success", "Go Back To Your DragonCamp app to start playing!", "success")
  else if(Success && Success == 'false')
    Swal.fire("Subscription Failed", "Please try again later or contact support if the issue persists!", "error") 
  return (
    <>
      <NewBannerHome />
      <NewTopHome />
      <LandingPage />
      <Banner3 />
      <Banner1 />
      <Banner2 />
      <Teamlist />
    </>

  );
}

export default App;
