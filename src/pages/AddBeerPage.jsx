import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBeerPage() {
    const [ name, setName ] = useState("");
    const [ tagline, setTagline ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ firstBrewed, setFirstBrewed ] = useState("");
    const [ brewersTips, setBrewersTips ] = useState("");
    const [ attenuationLevel, setAttenuationLevel ] = useState(0);
    const [ contributedBy, setContributedBy ] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBeer = {
            name,
            tagline,
            description,
            firstBrewed,
            brewersTips,
            attenuationLevel,
            contributedBy
        }

        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => {
                setName("");
                setTagline("");
                setDescription("");
                setFirstBrewed("");
                setAttenuationLevel("");
                setContributedBy("");
                navigate("/beers")
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input 
                type="text" 
                name="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                />
                <br />

                <label>Tagline</label>
                <input 
                type="text" 
                name="tagline" 
                value={tagline} 
                onChange={(e) => setTagline(e.target.value)} 
                />
                <br />

                <label>Description</label>
                <textarea 
                type="text" 
                name="description" 
                value={description}
                rows={10} 
                cols={25} 
                onChange={(e) => setDescription(e.target.value)} 
                />
                <br />

                <label>First Brewed</label>
                <input 
                type="text" 
                name="firstBrewed" 
                value={firstBrewed} 
                onChange={(e) => setFirstBrewed(e.target.value)} 
                />
                <br />

                <label>Brewer's Tips</label>
                <input 
                type="text" 
                name="brewersTips" 
                value={brewersTips} 
                onChange={(e) => setBrewersTips(e.target.value)} 
                />
                <br />

                <label>Attenuation Level</label>
                <input 
                type="number" 
                name="attenuationLevel" 
                value={attenuationLevel} 
                onChange={(e) => setAttenuationLevel(e.target.value)} 
                />
                <br />

                <label>Contributed By</label>
                <input 
                type="text" 
                name="contributedBy" 
                value={contributedBy} 
                onChange={(e) => setContributedBy(e.target.value)} 
                />
                <br />

                <button type="submit">Add Beer</button>

            </form>

        </div>
    )
}

export default AddBeerPage;