import Counter from './components/Counter';
import Accordion from './components/Accordion';

const App = ()=> {
  return (
  <div className='d-flex flex-column gap-5 vh-100 p-5'>
    <header >
      <h1>STATE</h1>
    </header>

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