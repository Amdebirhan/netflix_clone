import Row from "./Row";
import requsts from "./request";
import './App.css'

function App() {
  return (
    <div className="App">

      <Row title="NETFLIX ORIGINALS" fetchUrl={requsts.fetchNetflixOrginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={requsts.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requsts.fetchTopRated} />
      <Row title="Horror" fetchUrl={requsts.fetchHorrorMovies} />
      <Row title="Action" fetchUrl={requsts.fetchActionMovies} />
      <Row title="Romance" fetchUrl={requsts.fetchRomanceMovies} />
      <Row title="Comedy" fetchUrl={requsts.fetchComedyMovies} />
      <Row title="Documentery" fetchUrl={requsts.fetchDocumentaries} />
    </div>
  );
}

export default App;
