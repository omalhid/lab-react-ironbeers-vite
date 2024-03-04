import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AllBeersPage() {
  const [allBeers, setAllBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((res) => {
        setAllBeers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>List of Beers</h1>

      {allBeers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} alt="beer_image" />
              <h4>{beer.name}</h4>
              <p>Tagline: {beer.tagline}</p>
              <p>Contributed By: {beer.contributed_by}</p>
            </Link>
          </div>
        );
      })}
      <button>
        <Link to="../" relative="path">
          {" "}
          Back{" "}
        </Link>
      </button>
    </div>
  );
}

export default AllBeersPage;
