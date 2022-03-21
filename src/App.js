import logo from './logo.svg';
import './App.css';
import Hero from './components/herro-part/Hero';
import Search from './components/search/Search';
import Title from './components/course-title/Title';

function App() {
  return (
    <div className="App">
    <Hero></Hero>
    <Search></Search>
   <Title></Title>
    </div>
  );
}

export default App;
