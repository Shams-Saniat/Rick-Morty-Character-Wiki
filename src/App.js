import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search";
import { useEffect, useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episodes" element={<Episodes />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let [fetchData, updateFetchData] = useState([]);
  let { info, results } = fetchData

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />

    </div>
  );
}

export default App;
