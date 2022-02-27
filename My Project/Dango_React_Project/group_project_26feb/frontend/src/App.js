// import logo from './logo.svg';
import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarMenu from './components/NavBarMenu';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBarMenu />
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/:id/" element={<ProductDetails />} />
          <Route path="/:id/update" element={<UpdateProduct />} />
        </Routes>
      </Router>
      {/* <ShowProducts /> */}
      {/* <AddProduct /> */}
    </div>
  );
}

export default App;
