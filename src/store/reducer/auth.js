export const initialState = {
  homedata: null,
 
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOME_DATA": {
      return {
        ...state,
        homedata: action.homedata
      }
    }
    
    default: {
      return state
    }
  }
}

export default reducer
