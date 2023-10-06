import "./styles/app.scss";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast";
import Cart from "./components/cart";
function App() {
  return (
    <BrowserRouter>
<Header/>
<Routes >
<Route path="/" element={<Home/>} />

<Route path="/Cart" element={<Cart/>} /> 
</Routes>
<Toaster/>
    </BrowserRouter>);
  
}

export default App;
