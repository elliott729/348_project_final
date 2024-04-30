import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from "./users/EditUser";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import ViewCustomers from "./users/ViewCustomers";
import SearchResult from "./products/SearchResult";

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/viewcustomers" element={<ViewCustomers/>}/>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/addproduct" element={<AddProduct/>}/>
        <Route exact path="/edituser/:id" element={<EditUser />}/>
        <Route exact path="/editproduct/:id" element={<EditProduct />}/>
        <Route exact path="/searchresult" element={<SearchResult/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
