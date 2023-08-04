
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Cart from './components/Cart';
import Home from './components/Home';

function App() {
  return (
  <BrowserRouter>
     <Header/>
     <div>
      

<Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/cart" element={<Cart/>}/>
</Routes>
     
     </div>
 </BrowserRouter>
  );
}

export default App;


// <BrowserRouter>
//      <Header/>
//      <div>
      
//      <Routes>
//      <Route path = '/' exact>
// <Home/>  
// </ Route>



//      <Route path = '/cart' exact>
//      <Cart/>
   
//      </Route></Routes>
     
//      </div>
//   </BrowserRouter>