import './Homepage.css';
import Main from './Main';
import Footer from './Footer';

function Homepage() {
  return (
    <body class="container">      
      <div class="hero"><Main /></div>
      <div class="foot-bar"><Footer /></div>
    </body>
  );
}

export default Homepage;