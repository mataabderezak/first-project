import { Link, Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import DetailsProduct from './pages/DetailsProduct';
import AddCategory from './pages/AddCategory';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
   <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">My Store</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/detail-product">Detail Product</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-category">Add Category</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

   <Routes>
    <Route path="/" element={ <Products></Products>}/> 
    <Route path="detail-product" element={ <DetailsProduct></DetailsProduct>}/> 
    <Route path="add-category" element={<AddCategory></AddCategory>}/> 
   </Routes>

   <footer className="mt-5 pt-3 pb-3 bg-light text-center">
        <div className="container">
          <p>&copy; 2023 BAHMED KAMEL</p>
        </div>
      </footer>
   </>
  );
}

export default App;
