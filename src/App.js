import { useState } from "react";

function App() {
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i} onClick={() => updateCalc(i.toString())}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const [calc, setCalc] = useState("");
  const [result, setresult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setresult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc === "") {
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const allClear = () => {
    setCalc("");
    setresult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result}) </span> : ""}
          {calc || "0"}
        </div>

        <div className="operators">
          <button
            onClick={() => {
              updateCalc("/");
            }}
          >
            /
          </button>
          <button
            onClick={() => {
              updateCalc("*");
            }}
          >
            *
          </button>
          <button
            onClick={() => {
              updateCalc("+");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              updateCalc("-");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              deleteLast();
            }}
          >
            DEL
          </button>
          <button
            onClick={() => {
              allClear();
            }}
          >
            AC
          </button>
        </div>

        <div className="digits">
          {createDigits()}
          <button>.</button>
          <button onClick={() => updateCalc(0)}>0</button>
          <button
            onClick={() => {
              calculate();
            }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
