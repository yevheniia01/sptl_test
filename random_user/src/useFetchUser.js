import { useReducer, useEffect } from "react";
import axios from 'axios';

// const ACTIONS = {
//     MAKE_REQUEST: 'make-request',
//     GET_DATA: 'get-data',
//     ERROR: 'error'
// }

// function reducer(state, action){
//     switch(action.type){
//         case ACTIONS.MAKE_REQUEST:
//             return{ loading: true, users: []}
//         case ACTIONS.GET_DATA:
//             return {...state, loading: false, users: action.payload.users}
//         case ACTIONS.ERROR:
//             return { ...state, loading:false, error: action.payload.error, users: []}
//         default:
//             return state
//     }

// }


// export default function useFetchUser(params, page){
//     const [state, dispatch] = useReducer(reducer, {users: [], loading: true})

//     useEffect(()=>{
//         dispatch({type: ACTIONS.MAKE_REQUEST})
//         axios.get('https://randomuser.me/api/')
//         .then(res=> {
//             console.log(res)
//         })
//     }, [params, page])


// return{
//     users: [],
//     loading: false,
//     error: false
// }
// }