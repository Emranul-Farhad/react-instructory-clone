import logo from './logo.svg';
import './App.css';
import Hero from './components/herro-part/Hero';
import Search from './components/search/Search';
import Title from './components/course-title/Title';
import Teacherfeature from './components/Teacher feature/Teacherfeature';
import OurPartner from './components/our Partner/OurPartner';



function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Search></Search>
      <Title></Title>
      <Teacherfeature></Teacherfeature>
      <OurPartner></OurPartner>
    </div>
  );
}

export default App;
