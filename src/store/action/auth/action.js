export const SetHomeData = (homedata) => {
  return (dispatch) => {
    dispatch({ type: "SET_HOME_DATA", homedata: homedata });
  };
};

