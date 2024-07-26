import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';



const Personajes = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate()


    return (
        <div className='container row align-items-center'>
            {
                store.personajes.map((personaje) => (
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{personaje.name}</h5>
                            <p className="card-text">
                                {personaje.height}
                                {personaje.mass}
                                {personaje.hair_color}
                                {personaje.skin_color}
                                {personaje.eye_color}
                                {personaje.birth_year}
                                {personaje.gender}
                                {personaje.homeworld}
                                {personaje.films}


                            </p>
                            <div className='d-flex'>
                                
                                <button onClick={()=>navigate(`/${personaje.uid}`)} className="btn btn-primary">Ver personajes</button>
                                <button>Fav</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Personajes
