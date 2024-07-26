import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';

const Planetas = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate()

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
                                  
                                  

                              </p>
                              <div className='d-flex'>
                              <button onClick={()=>navigate(`/${planeta.uid}`)} className="btn btn-primary">Ver planetas</button>
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
