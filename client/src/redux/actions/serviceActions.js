import axios from "axios";

export const SEDES_TOLIMA = "SEDES_TOLIMA"
export const INSTITUCIONES_DANE = "INSTITUCIONES_DANE"
export const SEDES = "SEDES"

export const sedesTolima = () => {
   return async (dispatch) => {
    const datos = {   
    "User": "etraining",
    "Password": "explorandoando2020%",
    "option": "municipios"}
    const { data } = await axios.post("https://www.php.engenius.com.co/DatabaseIE.php", datos  )
    // console.log(data)
    dispatch({
        type: SEDES_TOLIMA,
        payload: data.data
    })
   }
}

export const intituciones = (dane) => {
    return async (dispatch) => {
            const datos2 = {   
                "User": "etraining",
                "Password": "explorandoando2020%",
                "option": "instituciones",
                "CodMun": dane
            }
        const { data } = await axios.post("https://www.php.engenius.com.co/DatabaseIE.php", datos2  )
        dispatch({
            type: INSTITUCIONES_DANE,
            payload: data.data
        })
    }
}

export const sedesDeunaInstitucion = (dane) => {
    return async (dispatch) => {
        const datos3 = {   
            "User": "etraining",
            "Password": "explorandoando2020%",
            "option": "sedes",
            "CodInst": dane
        }
        const { data } = await axios.post("https://www.php.engenius.com.co/DatabaseIE.php", datos3  )
        dispatch({
            type: SEDES,
            payload: data.data
        })
    }
}