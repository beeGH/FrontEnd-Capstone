import './App.css';
import Header from './componets/Header';
import Nav from './componets/Nav';
import Main from './componets/Main';
import Footer from './componets/Footer';

function App() {
  return (
    <body class="container">
      <div class="logo"><Header /></div>
      <div class="nav-bar"><Nav /></div>
      <div class="hero"><Main /></div>
      <div class="foot-bar"><Footer /></div>
    </body>
  );
}

export default App;
