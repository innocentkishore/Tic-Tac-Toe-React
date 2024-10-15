
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Board from './Component/Board';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App  d-flex flex-column min-vh-100">
     <Header/>
     <main className="flex-grow-1 d-flex align-items-center justify-content-center py-4  ">
        <Board />
      </main>
     <Footer/>
    </div>
  );
}

export default App;
