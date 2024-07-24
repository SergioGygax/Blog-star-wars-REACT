import React, { useContext } from 'react'
import { Context } from "../store/appContext";



const Personajes = () => {

    const { store, actions } = useContext(Context);


    return (
        <div className='container row align-items-center'>
            {
                store.personajes.map((personaje) => (
                    <div className="card" style={{"width": "18rem"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{personaje.name}</h5>
                                <p className="card-text">
                                    {personaje.height}
                                    {personaje.mass}
                                    {personaje.hair_color}
                                    

                                </p>
                                <div className='d-flex'>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
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
