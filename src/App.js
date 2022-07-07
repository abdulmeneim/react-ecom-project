import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import MyNav from './components/MyNav';
import { Navigate, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Aboutus from './components/Aboutus';
import Albums from './components/Albums';
import AlbumDetails from './components/albumDetails';
import Products from './components/Products';
import Mycart from './components/mycart';

function App() {




  return (
    <>
      {console.log("rendering")}
      <div className="container-fluid m-0 p-0 ">

        <MyNav> </MyNav>
      </div>
      <div div className='container' style={{ flex: "1 1 0" }}>

        <Routes>

          <Route path='/' element={<Navigate to="/Home" />}></Route>
          <Route path='/Home' element={<Products />}></Route>
          <Route path='/mycart' element={<Mycart />}></Route>
          <Route path='*' element={<Error />}></Route>

          {/* 
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Albums' element={<Albums />}>

          </Route>
          <Route path='/Albums/:id/:uid/:title' element={<AlbumDetails />}></Route>


          <Route path='/about' element={<Aboutus />}></Route>


          */}

        </Routes>

      </div>
      <div className="container-fluid  p-0 ">

        <footer style={{ marginTop: "10px", height: "10vh", backgroundColor: "#000", textAlign: "center", padding: "20px" }}>this is the footer </footer>
      </div>
    </>
  );
}

export default App;
