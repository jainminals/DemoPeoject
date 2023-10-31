import {SET_HOME_DATA,SET_HOME_DATA_BACKUP} from '../action/ReduxType'


export interface HomeState {
  homedata: any[]; // Update the type to match your data structure
  homedatabackup: any[]; // Update the type to match your data structure
}

const initialState: HomeState = {
  homedata: [],
  homedatabackup: [],
};

type Action = { type: string; homedata?: any[]; homedatabackup?: any[] };

const reducer = (state: HomeState = initialState, action: Action): HomeState => {
  switch (action.type) {
    case SET_HOME_DATA: {
      return {
        ...state,
        homedata: action.homedata || [],
      };
    }
    case SET_HOME_DATA_BACKUP: {
      return {
        ...state,
        homedatabackup: action.homedatabackup || [],
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
