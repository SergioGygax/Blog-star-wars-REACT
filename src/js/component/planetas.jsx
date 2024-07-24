import React, { useContext } from 'react'
import { Context } from "../store/appContext";


const Planetas = () => {

    const { store, actions } = useContext(Context);

    return (
      <div className='container row align-items-center'>
          {
              store.planetas.map((planeta) => (
                  <div className="card" style={{"width": "18rem"}}>
                      <img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">{planeta.name}</h5>
                              <p className="card-text">
                                  {planeta.rotation_period}
                                  {planeta.mass}
                                  {planeta.hair_color}
                                  

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

export default Planetas
