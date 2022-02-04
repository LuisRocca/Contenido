
import {useDispatch, useSelector} from 'react-redux';
import { sedesTolima, } from '../redux/actions/serviceActions'
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Instituciones from "../components/Instituciones";
import { useEffect } from 'react';

const AppScreen = () => {
  const {service} = useSelector(state => state)
  // console.log(service.instituciones[0], "este es")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sedesTolima())
  }, []);
  

  return (
  <div className="container center" style={{width: "90%"}} >
    <h2>Departamento del tolima</h2>
    <hr />
    <div className="center contenedor_flexible ">
    {/* <div > */}
       <Card array={service.sedesTolima[0]} />
       {/* </div> */}
    {
       service.instituciones[0] === undefined ? <div className="cotainer center"><h3>ELIGE UN MUNICIPIO</h3></div> : <div className='contenedor_flexible' > <Instituciones array={service.instituciones[0]} /> </div>
     } 
     </div> 
  </div>
  );
};

export default AppScreen;
