import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Content from './Components/Content';
import Pagination from './Components/Pagination';
import Login from './Components/Login';


function App() {




  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
        <>
          <Nav/>
          <Content/>
          <Pagination/>
        </>
        }/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      
      

    </div>
  );
}

export default App;
