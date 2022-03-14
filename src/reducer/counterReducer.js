const INITIAL_STATE = {
  counterValue: 0,
};

export default (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case "INCREAMENT_COUNTER":
      return { ...state, counterValue: action.payload };
    case "DECREAMENT_COUNTER":
      return { ...state, counterValue: action.payload };
    default:
      return { ...state };
  }
};
