import logo from './logo.svg';
import './App.css';
import Hero from './components/herro-part/Hero';
import Search from './components/search/Search';
import Title from './components/course-title/Title';
import Teacherfeature from './components/Teacher feature/Teacherfeature';
import OurPartner from './components/our Partner/OurPartner';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signin from './Pages/Sig nin/Signin';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import Myorders from './Pages/Dashboard/Myorders';



function App() {
  return (
    <div className="App">     
     <Routes>
       <Route path='/' element={<Hero></Hero>} ></Route>
       <Route path='/login' element={<Login></Login>} ></Route>
       <Route path='/signin' element={<Signin></Signin>} ></Route>
       <Route path='/dashboard' element={<Dashboard></Dashboard>} >
         <Route index element={<Myorders></Myorders> } ></Route>
         <Route path='users' element={<Users></Users>} ></Route>
       </Route>
     </Routes>
    </div>
  );
}

export default App;
