import { Link } from "react-router-dom";
import allBeersImage from "../assets/beers.png";
import randomBeerImage from "../assets/random-beer.png";
import newBeerImage from "../assets/new-beer.png";

function HomePage() {
  return (
    <>
      <div>
        <Link to="/beers">
          <div>
            <img src={allBeersImage} />
            <div>
              <h3>All Beers</h3>
            </div>
          </div>
        </Link>
        <Link to="/random-beer">
          <div>
            <img src={randomBeerImage} />
            <div>
              <h3>Random Beer</h3>
            </div>
          </div>
        </Link>
        <Link to="/new-beer">
          <div>
            <img src={newBeerImage} />
            <div>
              <h3>New Beer</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
