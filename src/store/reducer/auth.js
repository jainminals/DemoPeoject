export const initialState = {
  homedata: [],
  homedatabackup:[]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_HOME_DATA": {
      return {
        ...state,
        homedata: action.homedata
      }
    }
    case "SET_HOME_DATA_BACKUP": {
      return {
        ...state,
        homedatabackup: action.homedatabackup
      }
    }
    
    default: {
      return state
    }
  }
}

export default reducer
