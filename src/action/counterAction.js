export const increamentCounter = (value) => {
  return (dispatch) => {
    dispatch({
      type: "INCREAMENT_COUNTER",
      payload: value,
    });
  };
};

export const decreamentCounter = (value) => {
  return (dispatch) => {
    dispatch({
      type: "DECREAMENT_COUNTER",
      payload: value,
    });
  };
};
