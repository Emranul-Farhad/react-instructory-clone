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
   <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
