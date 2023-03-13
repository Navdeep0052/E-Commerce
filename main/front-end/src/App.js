
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import SignUp from './components/SignUp';
import Private from './components/Private';
import Login from './components/login'
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Nav /> 
    <Routes>
      <Route element={<Private />} />
      <Route path='/' element={<ProductList />} />
      <Route path='/add' element={<AddProduct />} />
      <Route path='/update/:id' element={<UpdateProduct />} />
      <Route path='/logout' element={<h1>Logout Product Component</h1>} />
      <Route path='/profile' element={<h1>Profile Product Component</h1>} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="login" element={<Login />} />
    </Routes>
   
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
