import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';
function App() {
  return (
    <div>
      <h1 style={{color:"red"}}>Netflix</h1>
      <Banner/>
      <Row title="Netflix Original" fetchurl={requests.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
