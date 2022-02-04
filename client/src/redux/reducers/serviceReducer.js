import {
    SEDES_TOLIMA,
    INSTITUCIONES_DANE,
    SEDES,
} from '../actions/serviceActions'
const inicialState = {
    sedesTolima:[],
    instituciones:[],
    sedesInstitucion:[],
}
export const serviceReducer = (state = inicialState, action) =>{
    switch (action.type) {
        case SEDES_TOLIMA:
            return {
                ...state,
                sedesTolima:[action.payload]
            }
        case INSTITUCIONES_DANE:
            return {
                ...state,
                instituciones:[action.payload]
            }
        case SEDES:
            return {
                ...state,
                sedesInstitucion:[action.payload[0]]
            }
        default:
          return {...state}
    }
}