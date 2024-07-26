import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Vistadetalles = () => {

    const [detalles, setDetalles] = useState({})

    const [planetas, setPlanetas] = useState({})

    const params = useParams()



    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${params.id}`)
            .then(resp => resp.json())
            .then(data => setDetalles(data))
    }, [])

    useEffect(() => {
        fetch(detalles.homeworld)
            .then(resp => resp.json())
            .then(data => setPlanetas(data))
    }, [detalles])

    console.log(detalles.homeworld);
    console.log("PLANETAS", planetas)



    return (
        <div>
            <div className="card" style={{ width: "18rem;" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{detalles.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">ALTURA = {detalles.height}</li>
                    <li className="list-group-item">{detalles.mass}</li>
                    <li className="list-group-item">{detalles.hair_color}</li>
                    <li className="list-group-item">{detalles.skin_color}</li>
                    <li className="list-group-item">{detalles.birth_year}</li>
                    <li className="list-group-item">{detalles.gender}</li>
                    <li className="list-group-item">{planetas.name}</li>
                    {/* <li className="list-group-item">{detalles.homeworld}</li> */}
                    <li className="list-group-item">{detalles.films}</li>


                </ul>

            </div>
        </div>
    )
}

export default Vistadetalles
