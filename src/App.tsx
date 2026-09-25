
import { useReducer } from "react";

const App = () => {
  function changeColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const bgcolor = `rgb(${red},${green},${blue})`;

    return bgcolor;
  }

  const initialState = {
    count: 0,
    bgColor: "white",
  };

  function reducer(state: typeof initialState, action: any) {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          count: state.count + 1,
        };

      case "decrement":
        return {
          ...state,
          count: state.count - 1,
        };

      case "reset":
        return {
          ...state,
          count: 0,
        };

      case "change":
        return {
          ...state,
          bgColor: action.color,
        };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: state.bgColor,
        transition: "background 0.5s ease",
      }}
    >
      <div
        className="card shadow-lg border-0 rounded-4 p-4 text-center"
        style={{ width: "360px" }}
      >
        <h2 className="fw-bold mb-3">Counter App</h2>

        <div
          className="rounded-4 d-flex justify-content-center align-items-center mb-4"
          style={{
            height: "150px",
            background: "rgba(0, 0, 0, 0.05)",
          }}
        >
          <h1 className="display-1 fw-bold m-0">{state.count}</h1>
        </div>

        <div className="d-flex justify-content-center gap-2 mb-3">
          <button
            className="btn btn-success btn-lg rounded-3"
            onClick={() => dispatch({ type: "increment" })}
          >
            +
          </button>

          <button
            className="btn btn-danger btn-lg rounded-3"
            onClick={() => dispatch({ type: "decrement" })}
          >
            −
          </button>

          <button
            className="btn btn-secondary btn-lg rounded-3"
            onClick={() => dispatch({ type: "reset" })}
          >
            Reset
          </button>
        </div>

        <button
          className="btn btn-primary w-100 btn-lg rounded-3"
          onClick={() =>
            dispatch({
              type: "change",
              color: changeColor(),
            })
          }
        >
          🎨 Change Background
        </button>

        <p className="text-muted mt-3 mb-0">
          Current Color: {state.bgColor}
        </p>
      </div>
    </div>
  );
};

export default App;

