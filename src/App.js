import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';
function App() {
  return (
    <div>
      <h1 style={{color:"red"}}>Netflix</h1>
      <Banner/>
      <Row title="NetflixOriginal" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="TopRated" fetchurl={requests.fetchTopRated}/>
      <Row title="Trending" fetchurl={requests.fetchTrending}/>
      <Row title="Action" fetchurl={requests.fetchActionMovies}/>
      <Row title="Comedy" fetchurl={requests.fetchComedyMovies}/>
      <Row title="Horror" fetchurl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchurl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={requests.fetchDocumentaries}/>




    </div>
  );
}

export default App;
