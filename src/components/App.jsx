import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Nav from "./Navbar";
import Home from './Home';
import BlogList from "./BlogList";
import Contact from './Contact';
import './App.css'

const App = () => {
    return (
     <BrowserRouter>
     
     <Routes>
      <Route path='/' element={<Nav />} >
      <Route index element={<Home />}/>
      <Route path='/bloglist' element={<BlogList />} />
      <Route path='/contact' element={<Contact />}/>

      </Route>
     </Routes>
     </BrowserRouter>
      );
}
 
export default App;

// class base component
// functional base component