import { useEffect, createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clothing from './Components/Clothing';
import Footwear from './Components/Footwear';
import Watches from './Components/Watches';
import Home from './Components/Home';
import MainPage from './Components/MainPage';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Viewproduct from './Components/Viewproduct';
import Admin from './Components/Admin';
import Adminproductview from './Components/Adminproductview';
import Contact from './Components/Contact';

const AllProducts = createContext();
const newProducts = createContext();

function App() {
  
  const [products, setProducts] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  async function newProduct() {
      const res = await fetch("data.json");
      const data = await res.json();
      // console.log(data.data);
      setNewArrivals(data.data)
      // console.log(products)
    }

    async function getProducts() {
      const res = await fetch("https://emarche-backend.herokuapp.com/products", {
          method: "GET"
      })
      const products = await res.json();
      if(products) {
          // console.log(products.data)
          setProducts(products.data)
      } 
  }
    
    useEffect(() => {
      newProduct();
      getProducts();
    }, [])


  return (
    <div>
      <AllProducts.Provider value={products}>
        <newProducts.Provider value={newArrivals}>
          <BrowserRouter>
            <Routes>
              
              <Route path='/' element={<MainPage />} />
              <Route path='/home' element={<Home />} />
              <Route path='/clothing' element={<Clothing />} />
              <Route path='/footwear' element={<Footwear />} />
              <Route path='/watches' element={<Watches />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/view/:id' element={<Viewproduct />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/admin-products-view' element={<Adminproductview />} />

            </Routes>
          </BrowserRouter>
        </newProducts.Provider>
      </AllProducts.Provider>
    </div>
  );
}

export default App;
export { AllProducts, newProducts };