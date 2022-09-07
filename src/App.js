
import './App.css';
import CardDetails from './components/CardDetails';
import FoodCard from './components/FoodCard';
import Navbar from './components/Navbar';

import {Routes,Route, BrowserRouter } from "react-router-dom";
import Error from './components/Error';
function App() {
  return (
    <>
    <Navbar />
    <FoodCard />

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<FoodCard />} />
     <Route path='/cardDetails' element={<Error />} />
   
    </Routes>
  </BrowserRouter>
    
    {/* <Routes>
     <Route path='/' element={<FoodCard />} />
     <Route path='/cardDetails' element={<CardDetails />} />
   </Routes> */}
    </>
  );
}

export default App;
