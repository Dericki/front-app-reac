import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App()  {
  return (
    <div>
      <h1>Olá Mundo!</h1>
        <Nav />
        <Outlet/>
        <Footer />
    </div>
  )
}