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
import Courseupload from './components/Courseupload/Courseupload';
import Takereview from './components/Take Review/Takereview';
import Chekout from './components/Chekoutpage/Chekout';
import Allcourses from './components/All courses/Allcourses';
import Managecourses from './components/Manage all Courses/Managecourses';
import Mycoursemap from './components/My courses/Mycoursemap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Firekey/Firekey';
import Protected from './Proctedpages/Protected';
import Notfound from './Animation/Notfound';
import Loading from './Loading/Loading';
import Adminprotected from './Proctedpages/Adminprotected';
import Allorders from './Pages/Dashboard/Allorders/Allorders';
import Uploaded from './Pages/Dashboard/Uploaded/Uploaded';







function App() {
  const [user,loading] = useAuthState(auth)
  
  return (
    <div className="App"> 
   { loading ? <Loading></Loading> : 
     <Routes>  
       <Route path='/' element={<Hero></Hero>} ></Route>
       <Route path='/chekout/:id' element={ <Protected> <Chekout></Chekout> </Protected> } ></Route>
       <Route path='/allcourses' element={<Allcourses></Allcourses>} ></Route>
       <Route path='/login' element={<Login></Login>} ></Route>
       <Route path='/signin' element={<Signin></Signin>} ></Route>
     <Route path='/mycourses' element={ <Protected> <Mycoursemap></Mycoursemap></Protected> } ></Route>
      <Route path='/uploadcourses' element={ <Protected><Courseupload></Courseupload></Protected> } ></Route>
      <Route path='/giverivew' element={ <Protected><Takereview></Takereview></Protected> } ></Route>
      <Route path='/profileedit' element={<Profile></Profile>} ></Route>
      <Route path='/profile' element={<Profiledetails></Profiledetails>} ></Route>

      {/* dashboard */}
       <Route path='/dashboard' element={ <Protected><Dashboard></Dashboard> </Protected> } >
       <Route index element={<Myorders></Myorders> } ></Route>
        <Route path='users' element={<Users></Users>} ></Route>
        <Route path='admins' element={<Admins></Admins> } ></Route>
        <Route path='managecourses' element={<Managecourses></Managecourses>} ></Route>
        <Route path='allorders' element={<Allorders></Allorders>} ></Route>
        <Route path='uploaded' element={<Uploaded></Uploaded>} ></Route>
       </Route>
       <Route path='*' element={<Notfound></Notfound> } ></Route>
      
     </Routes>}
 
    </div>
  );
}

export default App;
