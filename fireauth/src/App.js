import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import Signup from './pages/signup/Signup';
import Header from './components/Header';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
