import React from 'react';
import { Link } from 'react-router-dom';
import '../css/card.css'

const Instituciones = ({array}) => {
  return <div className='vinculo_municipios  animate__animated animate__pulse' >
        <div className="row ">
        <div >
          <div className="card blue-grey darken-1 ">
            <div className="card-action " style={{width: '45rem'}}>
                <h4>INSTITUCIONES</h4>
                <hr />
            {
      array.length >= 0 ?
       array.map(i => 
        <Link to={`/details/${i.dane}`}>
        <h4>{i.nombre}</h4>
        </Link>
        ) 
        : <h2>notpitis</h2>
    }
            </div>
            {/* <div className="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div> */}
          </div>
        </div>
      </div>
     
    </div>;
};

export default Instituciones;
