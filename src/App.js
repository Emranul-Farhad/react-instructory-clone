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
import Admins from './Pages/Dashboard/Admins/Admins';
import Profile from './Pages/Dashboard/Profile/Profile';
import Profiledetails from './Pages/Dashboard/Profile/Profiledetails';
import Mycourses from './components/My courses/Mycourses';
import Courseupload from './components/Courseupload/Courseupload';
import Takereview from './components/Take Review/Takereview';
import Chekout from './components/Chekoutpage/Chekout';
import Allcourses from './components/All courses/Allcourses';






function App() {
  return (
    <div className="App">     
     <Routes>
       <Route path='/' element={<Hero></Hero>} ></Route>
       <Route path='chekout/:id' element={<Chekout></Chekout>} ></Route>
       <Route path='/allcourses' element={<Allcourses></Allcourses>} ></Route>
       <Route path='/login' element={<Login></Login>} ></Route>
       <Route path='/signin' element={<Signin></Signin>} ></Route>
      <Route path='/courses' element={<Mycourses></Mycourses>} ></Route>
      <Route path='/uploadcourses' element={<Courseupload></Courseupload>} ></Route>
      <Route path='/giverivew' element={<Takereview></Takereview>} ></Route>

       <Route path='/dashboard' element={<Dashboard></Dashboard>} >
       <Route index element={<Myorders></Myorders> } ></Route>
        <Route path='users' element={<Users></Users>} ></Route>
        <Route path='admins' element={<Admins></Admins> } ></Route>
        <Route path='profileedit' element={<Profile></Profile>} ></Route>
        <Route path='profile' element={<Profiledetails></Profiledetails>} ></Route>
       {/* <Route path='profile' element={<Profileshow></Profileshow>} ></Route> */}

       </Route>
     </Routes>
    </div>
  );
}

export default App;
