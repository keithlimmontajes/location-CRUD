import {
     GET_LOCATION_LIST ,
     GET_LOCATION_LIST_SUCCESS ,
     GET_LOCATION_LIST_FAILED ,
   
  } from "../saga/types";
  
  export const INITIAL_STATE = {
    loading: true,
    list: [],
    error: false,
  };
  
const locations = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_LOCATION_LIST:
        return {
          ...state,
          list: {
            ...state.list,
            loading: true,
          },
        };
      case GET_LOCATION_LIST_SUCCESS:
        return {
          ...state,
         loading: false,
         error: false,
         list: action.payload
        };
  
      case GET_LOCATION_LIST_FAILED:
        return {
          ...state,
            loading: false,
            list: [],
            error: true,
        };
  
  
      default:
        return state;
    }
  };
  
  export default locations;
  