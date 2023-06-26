import Header from "./components/Navbar";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import { headerTabs } from "./config/routingConfig";
import Products from "./components/Products";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header brandName={"E-commerce"} tabData={headerTabs} />
      <Routes>
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/products" element={<Products/>}/>
      </Routes>
      {/* <Products/> */}
    </>
  );
}

export default App;
