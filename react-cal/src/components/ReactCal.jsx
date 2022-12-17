import "./ReactCal.css"
import * as math from 'mathjs';
import {useState, useRef } from "react";


const ReactCal = () => {
  let [board, setBoard] = useState("");
  let [result, setResult] = useState("");
  const ref = useRef(null);
  
  function getValue(text) {
    switch (text) {
      case '+':
        return '+'
      case 'x':
        return '*'
      case '√':
        return 'sqrt('
      case 'x!':
        return '!'
      case '−':
        return '-'
      case '÷':
        return '/'
      case 'tan':
        return 'tan(deg '
      case 'cos':
        return 'cos(deg '
      case 'x y':
        return '^'
      case 'sin':
        return 'sin(deg '
      case 'log':
        return 'log('
      case 'ln':
        return 'ln('
      case 'EXP':
        return '*10^'
      default:
        return text;
    }
  }

  function ln2log() {
    const ln = 'ln(', closure = ')', val = board
    let start = val.indexOf(ln)
    let end = val.indexOf(closure, start)
    let num = val.substring(start + 3, end);
  
    if (start !== -1) {
      setBoard(val.substring(0, start) + "log(" + num + ",e)" + val.substring(end + 1, val.length))
    }
  }
  

  return (
    <div ref={ref} class="main">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.3.1/math.js"
        integrity="sha512-Q1qOFs0DNtp9bviP8uSyPm0d1ES7zw8BXZ7AF2XCWIVKHObK6U7mkMZ+SGOf1vF71zI/60lO+FjBTrzaYGRqnw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      <div class="container">
        <div class="display">
          <input type="text" id="result" value={result} disabled="disabled" />
          <input type="text" id="board" value={board} class="input-box" disabled="disabled" placeholder="0" />
        </div>
        {/* <!-- First--> */}
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>Deg</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>x!</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>(</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>)</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>%</button>
        <button class="keys" onClick={() => {
          setResult("")
          setBoard("")
        }}>AC</button>
        {/* <!-- Second--> */}
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>sin</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>ln</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>7</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>8</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>9</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>÷</button>
        {/* <!-- Third--> */}
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>cos</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>log</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>4</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>5</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>6</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>x</button>
        {/* <!-- Fourth--> */}
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>tan</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>√</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>1</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>2</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>3</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>−</button>
        {/* <!-- Fifth--> */}
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>EXP</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>x <span class="exponent">y</span></button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>0</button>
        <button class="num keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>.</button>
        <button class="res keys" onClick={() => {
          try {
            ln2log()
            let res = math.evaluate(board);
            math.format(res, { precision: 10 });
            setResult(res)
            setBoard("")
          } catch (error) {
            setResult("err")
            setBoard("")
          }
        }}>=</button>
        <button class="keys" onClick={(e) => {setBoard(board + getValue(e.target.innerText))}}>+</button>
      </div>
    </div>
  )
}

export default ReactCal;