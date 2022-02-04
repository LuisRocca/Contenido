
import {useDispatch, useSelector} from 'react-redux';
import { intituciones } from '../redux/actions/serviceActions'
import '../css/card.css'



const Card = ({array}) => {

    const dispatch = useDispatch();
    const {service} = useSelector(state => state)

    const handleSedes = (e) => {
        e.preventDefault();
         dispatch(intituciones(`${e.target.dane.value}`))
     }
  return <div className='contenedor_card'>
       {
          array && array?.map(i => 
            <div className="card sombriado" key={i.dane} style={{width: 235 , margin:10}} >
              <form action=""  onSubmit={e => handleSedes(e)  } >
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="https://tecnolite.lat/blog/especialistas/files/2016/06/Screenshot_5.jpg" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-3">{i.nombre}
       {/* <i className="material-icons right">more_vert </i> */}
      
      </span>
      <p><button className="btn" type='submit'>Ver sedes </button></p>
    </div>
    <div className="card-reveal">
    <input type="" name='dane' value={i.dane}  />
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
    </form>
   </div>

            )
       }
  </div>;
};


            //  <div className="contenedor" key={i.dane}> 
            //   <h4>municipio de : {i.nombre}</h4> 
            //  <form action=""  onSubmit={e => handleSedes(e) } >
            //  <input type="" name='dane' value={i.dane}  />
            // <button type='submit' >ver en:{i.nombre}</button>
         
            //  </form>
            //   </div> 
export default Card;
