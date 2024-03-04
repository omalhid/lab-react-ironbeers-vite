import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function BeerDetailsPage() {
  const [singleBeer, setSingleBeer] = useState(null);

  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((res) => {
        setSingleBeer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {singleBeer && (
        <div>
          <h3>{singleBeer.name} beer details</h3>
          <img src={singleBeer.image_url} alt="beer_img" />
          <h4>{singleBeer.name}</h4>
          <p>{singleBeer.tagline}</p>
          <p>{singleBeer.first_brewed}</p>
          <p>{singleBeer.attenuation_level}</p>
          <p>{singleBeer.description}</p>
          <p>{singleBeer.contributed_by}</p>
        </div>
      )}
      <Link to="../" relative="path">
        {" "}
        Back{" "}
      </Link>
    </div>
  );
}

export default BeerDetailsPage;
