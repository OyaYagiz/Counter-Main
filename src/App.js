import Counter from './components/Counter';
import Accordion from './components/Accordion';
import Header from './components/Header';
import { useState } from 'react';

const App = ()=> {

  const [isDarkMode,setIsDarkMode] = useState(true);
  return (
  <div className={`d-flex flex-column gap-5 vh-100 p-5
  ${isDarkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
    <Header 
    isDarkMode={isDarkMode} 
    setIsDarkMode={setIsDarkMode} 
    />

    <Accordion 
    title="Hangi Teknolojiler Kullanıldı?"
    description ="Bu projeyi geliştirirken Javascript React ve SCSS kullanıldı. 
    Bu projeyi geliştirirken Javascript React ve SCSS kullanıldı."
    />
    <Accordion 
    title="Geliştirmesi Kaç Gün Sürdü?"
    description="Bu projenin geliştirilmesi 6 ay sürdü."
    />
    <Accordion 
    title="Kaç Kişilik Bir Ekip Projede Çalıştı?"
    description="15 kişilik bir ekip çalıştı."
    />

    <Counter />
    <footer></footer>
  </div>
  );
};

export default App;