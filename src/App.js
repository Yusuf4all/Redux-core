import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increamentCounter, decreamentCounter } from "./action/counterAction";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <p>Current counter:- {props.counterValue}</p>
      <button onClick={() => props.increamentCounter(props.counterValue + 1)}>
        +
      </button>
      <button onClick={() => props.decreamentCounter(props.counterValue - 1)}>
        -
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counterValue: state.counterReducer.counterValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      increamentCounter,
      decreamentCounter,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
