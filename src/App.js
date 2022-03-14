import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import * as actionTypes from "./store/action";
import { FaGithub } from "react-icons/fa";

function App() {
  const myState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const plusHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.INCREASE,
      playload: myState,
    });
  };
  const minusHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.DECREASE,
      playload: myState,
    });
  };
  const removeFive = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.REMOVE_FIVE,
      playload: 5,
    });
  };
  const addFive = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.ADD_FIVE,
      playload: 5,
    });
  };
  const reset = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.RESET,
      playload: myState,
    });
  };
  return (
    <div className="App">
      <div className="circle">
        <p className="number">{myState}</p>
      </div>
      <div className="buttons">
        <button onClick={plusHandler}>Add</button>
        <button onClick={minusHandler}>Minus</button>
        <button onClick={addFive}> + Five</button>
        <button onClick={removeFive}> - Five</button>
        <button onClick={reset}>Reset</button>
      </div>

      <a
        href="https://github.com/meanjula"
        target="_blank"
        rel="noopener noreferrer"
        className="footer"
      >
        <p>Anjula Timsina &copy; 2021</p>
        <FaGithub className="github" />
      </a>
    </div>
  );
}

export default App;
