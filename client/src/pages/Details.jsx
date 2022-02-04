import React from 'react';
import { useParams, Link,  } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { sedesDeunaInstitucion } from '../redux/actions/serviceActions'
import { useEffect } from 'react';
// sedesDeunaInstitucion {


const Details = () => {

  const {dane} = useParams()
  const dispatch = useDispatch();
  const {service} = useSelector(state => state)

  // console.log(service.sedesInstitucion, "estas son las sedes")
  useEffect(() => {
  dispatch(sedesDeunaInstitucion(`${dane}`))
  }, []);  

  return <div className='container center'>
    {
       service.sedesInstitucion.length > 0 ?
       service.sedesInstitucion.map(e => 
        <div className="row ">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Sede {e.nombre}</span>
              <p>Instituciones sociales, de salud, educativas y culturales. 1- Merjor el servico alos enfermos. 2- Brindar ayuda a personas de bajos recursos. 3- Tener mas higiene. 1- Apoyar ala jente queno</p>
            </div>
            <div className="card-action">
              <Link to={`/grupo/${e.dane}`}>este instituto tiene un grupo</Link>
              <Link to={`/appScreaan`} >Volver</Link>
            </div>
          </div>
        </div>
      </div>
        )
        : <h2>no se a encontrado sedes de esta institucion</h2>
    }
    </div>;
};

export default Details;
