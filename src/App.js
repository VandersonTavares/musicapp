import './App.css';

import Header from './components/Header';
import Hero from './Hero';
import { Experience } from './components/Experience';
import Search from './components/Search';

function App() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <Hero />
      <Experience />
      <Search />
    </div>
  );
}

export default App;
