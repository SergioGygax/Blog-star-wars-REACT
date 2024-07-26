import React, { useContext, useEffect } from 'react'
import { Context } from "../store/appContext";



const Naves = () => {

    const { store, actions } = useContext(Context);

     


    return (
        <div className='container row align-items-center'>
            {
                store.naves.map((nave) => (
                    <div className="card" style={{"width": "18rem"}}>
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${nave.uid}.jpg `} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{nave.name}</h5>
                                <p className="card-text">
                                    
                                    

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



export default Naves
