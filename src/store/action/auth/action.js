export const SetHomeData = (homedata) => {
  return (dispatch) => {
    dispatch({ type: "SET_HOME_DATA", homedata: homedata });
  };
};
export const SetHomeDataBackup = (homedatabackup) => {
  return (dispatch) => {
    dispatch({ type: "SET_HOME_DATA_BACKUP", homedatabackup: homedatabackup });
  };
};

